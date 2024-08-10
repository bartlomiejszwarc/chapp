export default function useInviteUser() {
  const inviteUser = async (inviterId: string, inviteeId: string) => {
    console.log(inviterId, inviteeId);
  };
  return {inviteUser};
}
