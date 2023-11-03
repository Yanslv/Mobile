import { AxiosResponse } from "axios";
import api from "../../api";
import FlashMessage, { showMessage } from "react-native-flash-message";
import axios from "axios";


export type ErrorMessage = {
  error: string;
  message: string;
  statusCode: string;
};

// Typeguard to check if response is error
export function isError<T>(
  response: T | ErrorMessage
): response is ErrorMessage {
  return typeof (response as ErrorMessage).error !== "undefined";
}

export const parse = async (response: AxiosResponse) => {
  if (response.status === 204) {
    return true;
  }

  const body = await response;

  if (isError(body)) {
    throw body;
  }

  let removeUser = {
    user: {
      name: body.data.name,
      email: body.data.email
    },
    isLogged: true,
    token: body.data.token
  };
  return removeUser;
};

export async function makeRequest(url: string, opts = {}) {
  let patchedOptions = {
    ...opts, 
    headers: {
      "content-type": "application/json"
    },
    url
  };

  try{
    let response = await api(patchedOptions);
    return response;
  }catch(error){
    console.error(error)
    // return error.toJSON()

  }
}


export async function handleRequest(routeName, data, method="GET", timeout = 6000, tries = 3){
  const controller = new AbortController();
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  while(tries > 0){
      const req = await makeRequest(routeName, {
          method: method,
          timeout: timeout,
          cancelToken: source.token,
          signal: controller.signal,
          data: data,
        })
      .then((res) => {
          if (res !== undefined  && res.status === 200){
            return res
          } else {
            showMessage({
              type: 'info',
              message: 'Falha na requisição. Tentando conectar novamente...',
              duration: 5000,
            })
            throw new Error("Não obteve resposta do servidor");
          }
      })
      .catch(err => {
        // handle error
        // mock error;
        return ({
          status: 500,
          data: {
            sets: [],
            message: 'timeout'
          }
        })
      })

      if (req.status === 200){
        controller.abort();
        return req
      }

      tries = tries - 1;

      if (tries === 0){
        showMessage({
          type: 'danger',
          message: 'Conexão com o servidor indisponível no momento',
          duration: 5000,
        })
        return req;
      }
  }

}
