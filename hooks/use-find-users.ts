import {createClient} from '@/utils/supabase/client';

export const useFindUsers = () => {
  const findUsers = async (keyword: string) => {
    const supabase = createClient();
    const searchPattern = `%${keyword}%`;
    try {
      const {data, error} = await supabase
        .from('users')
        .select('id, display_name, email, avatar_url')
        .or(`display_name.ilike.${searchPattern},email.ilike.${searchPattern}`);

      if (error) throw new Error(error.message);
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return {findUsers};
};
