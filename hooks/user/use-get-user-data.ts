import {useAuthenticatedUserStore} from '@/providers/authenticated-user-provider';
import {AuthenticatedUser} from '@/stores/authenticated-user-store';
import {createClient} from '@/utils/supabase/client';

export interface InviterUserData {
  id: string;
  displayName: string;
  email: string;
  avatarUrl: string;
}
export const useGetUserData = () => {
  const supabase = createClient();
  const getUserData = async (id: string) => {
    try {
      const {data, error} = await supabase
        .from('users')
        .select('id, display_name, email, avatar_url, sent_invitations, incoming_invitations')
        .eq('id', id)
        .single();
      if (error) throw new Error(error.message);

      const formattedData: AuthenticatedUser = {
        id: data.id,
        displayName: data.display_name,
        email: data.email,
        avatarUrl: data.avatar_url,
        sentInvitations: data.sent_invitations,
        incomingInvitations: data.incoming_invitations,
      };

      return formattedData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const getInviterUserData = async (id: string) => {
    try {
      const {data, error} = await supabase
        .from('users')
        .select('id, display_name, email, avatar_url')
        .eq('id', id)
        .single();
      if (error) throw new Error(error.message);

      const formattedData: InviterUserData = {
        id: data.id,
        displayName: data.display_name,
        email: data.email,
        avatarUrl: data.avatar_url,
      };

      return formattedData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  return {getUserData, getInviterUserData};
};
