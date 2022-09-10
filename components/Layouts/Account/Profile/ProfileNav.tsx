import Image from "next/image";
import { selectCurrentuser } from "../../../../features/user/user-auth-slice";
import { useAppSelector } from "../../../../utils/app/hook";

const ProfileNav = () => {
  const user = useAppSelector(selectCurrentuser)

  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className="flex flex-col gap-2 items-center">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bscpe-store-v2.appspot.com/o/profile%2Fdefault_profile.png?alt=media&token=60bbf95e-c1ad-4fb5-80a4-c81c07558fa4"
              alt=""
              layout="fill"
            />
          </div>

          <div className='flex flex-col items-center'>

            <p className="font-medium text-lg text-white">{user?.displayName}</p>
            <span className='text-xs text-white/50'>Edit profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
