import ReactDOM from 'react-dom/client'
import Viewer from './viewer.tsx'
import { FragmentIfcLoader } from 'openbim-components';

ReactDOM.createRoot(document.getElementById('app')!).render(
	<>
		<Viewer />
	</>
)

window.addEventListener("di5", async (event: any) => {
	const {name, payload} = event.detail;
	if(name=== "openModel"){
		const {name, buffer} = payload;
		const model = await FragmentIfcLoader.load(buffer, name);
		const scene = Viewer.scene.get();
		scene.add(model);
	}
});