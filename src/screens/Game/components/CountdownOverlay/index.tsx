import { CountdownOverlayView } from './CountdownOverlay.view'
import { useCountdownOverlayViewModel } from './useCountdownOverlay.viewModel'

export const CountdownOverlay = () => {
  const viewModel = useCountdownOverlayViewModel()
  return <CountdownOverlayView {...viewModel} />
}
