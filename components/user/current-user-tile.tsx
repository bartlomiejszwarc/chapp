import {useFindUsers} from '@/hooks/useFindUsers';
import {createClient} from '@/utils/supabase/server';

export default async function CurrentUserTile() {
  const supabase = createClient();
  const {
    data: {user},
  } = await supabase.auth.getUser();

  const {findUsers} = useFindUsers();

  const users = await findUsers('xyz');
  const displayName = user!.user_metadata.display_name;
  return <div>{displayName}</div>;
}
