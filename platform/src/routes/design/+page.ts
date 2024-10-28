import * as OBC from '@thatopen/components';
import type {PageLoad} from './$types';

export const load: PageLoad = async ({fetch, params}) => {
    console.log("Start Page Load");
    const components = new OBC.Components();
    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    fragmentIfcLoader.settings.wasm = {
        path: '/',
        absolute: false,
    };
    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
    console.log('Fragment Manager Ready');

    //const res = await fetch('https://thatopen.github.io/engine_components/resources/small.ifc');
    const res = await fetch('./Demo_File.ifc');
    const data = await res.arrayBuffer();
    const buffer = new Uint8Array(data);
    console.log('Loaded Data');
    const model = await fragmentIfcLoader.load(buffer);
    model.name = 'example';
    console.log("Model", model);
    return {model};
}
