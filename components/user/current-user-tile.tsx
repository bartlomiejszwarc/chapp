import {useFindUsers} from '@/hooks/use-find-users';
import {createClient} from '@/utils/supabase/server';
import {Avatar} from '@nextui-org/react';

export default async function CurrentUserTile() {
  const supabase = createClient();
  const {
    data: {user},
  } = await supabase.auth.getUser();

  const {findUsers} = useFindUsers();

  const users = await findUsers('xyz');
  const displayName = user!.user_metadata.display_name;
  return (
    <div className='flex items-center space-x-2 bg-transparent'>
      <Avatar showFallback name={displayName.split('')} src={''} />
      <span>{displayName}</span>
    </div>
  );
}
