import { auth } from '@/auth'
import SignIn from '@/components/auth/SignIn'
import SignOut from '@/components/auth/SignOut'

export default async function Home() {
	const session = await auth()
	return (
		<div className="flex h-screen items-center justify-center bg-black text-white">
			<div className="flex flex-col gap-4 justify-center items-center">
				<h1 className="text-4xl font-bold">Welcome to Perlify</h1>
				<span>{ JSON.stringify(session)}</span>
				{session?.user ? <SignOut /> : <SignIn />}
			</div>
		</div>
	)
}
