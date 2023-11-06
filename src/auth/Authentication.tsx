import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient('https://ahfbxnsxbeythablgyzu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZmJ4bnN4YmV5dGhhYmxneXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzk2NzUsImV4cCI6MjAxNDYxNTY3NX0.uubtVIydIxCqyCMfRJGS8wBNqBb015yN1L3FqeRh2Yc', {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export async function createUser(email: string, password: string) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.error('Error signing up:', error);
      return null;
    } else {
      return user;
    }
  }