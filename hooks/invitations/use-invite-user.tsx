import {createClient} from '@/utils/supabase/client';

export default function useInviteUser() {
  const inviteUser = async (inviterId: string, inviteeId: string) => {
    const supabase = createClient();
    try {
      const {data, error} = await supabase.rpc('invite_user', {inviter_id: inviterId, invitee_id: inviteeId});
      if (error) throw new Error(error.message);
      return data;
    } catch (error: any) {}
  };

  return {inviteUser};
}
