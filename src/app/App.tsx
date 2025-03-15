import { MainLayout } from './layout/MainLayout'
import { BottomBar } from './shared/components/BottomBar'
import { OptionsMenu } from './shared/components/OptionsMenu'

export const App = () => {
	return (
		<>
			<MainLayout />
			<OptionsMenu />
			<BottomBar />
		</>
	)
}
