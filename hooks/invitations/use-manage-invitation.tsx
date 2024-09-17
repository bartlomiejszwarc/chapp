import {createClient} from '@/utils/supabase/client';

export default function useManageInvitation() {
  const acceptInvitation = async (inviterId: string, inviteeId: string) => {
    const supabase = createClient();
    try {
      const {data, error} = await supabase.rpc('accept_invitation', {inviter_id: inviterId, invitee_id: inviteeId});
      if (error) throw new Error(error.message);
      return data;
    } catch (error: any) {}
  };
  const declineInvitation = async (inviterId: string, inviteeId: string) => {
    const supabase = createClient();
    try {
      const {data, error} = await supabase.rpc('decline_invitation', {inviter_id: inviterId, invitee_id: inviteeId});
      if (error) throw new Error(error.message);
      return data;
    } catch (error: any) {}
  };

  return {acceptInvitation, declineInvitation};
}
