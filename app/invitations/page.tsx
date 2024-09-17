'use client';
import IncomingInvitation from '@/components/invitations/incoming-invitation';
import {useGetUserData} from '@/hooks/user/use-get-user-data';
import {useAuthenticatedUserStore} from '@/providers/authenticated-user-provider';
import {createClient} from '@/utils/supabase/client';
import {Key, useEffect} from 'react';

export default function Page() {
  const supabase = createClient();
  const {authenticatedUser, setAuthenticatedUserData} = useAuthenticatedUserStore((state) => state);
  const {getUserData} = useGetUserData();

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      const userData = await getUserData(user!.id);
      setAuthenticatedUserData(userData);
    };
    fetchUserData();
  }, []);

  return (
    <>
      {authenticatedUser?.incomingInvitations!?.map((invitationId: string, idx: Key) => (
        <IncomingInvitation invitationId={invitationId} key={idx} />
      ))}
    </>
  );
}
