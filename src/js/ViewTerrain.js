// ViewTerrain.js

import alfrid, { GL, GLTexture } from 'alfrid';
import ShaderUtils from './ShaderUtils';
import Params from './Params';

import vs from '../shaders/terrain.vert';
import fs from '../shaders/terrain.frag';
import fsFallback from '../shaders/terrainFallback.frag';

const grey = 0.25;
const oUniforms = {
	maxHeight:3,
	roughness:1,
	specular:.25,
	metallic:0,
	baseColor:[grey, grey, grey]
}

class ViewTerrain extends alfrid.View {
	
	constructor() {
		const useFallback = !GL.getExtension('EXT_shader_texture_lod') || GL.isMobile;
		const _vs = ShaderUtils.addUniforms(vs, oUniforms);
		const _fs = ShaderUtils.addUniforms(useFallback ? fsFallback : fs, oUniforms);

		super(_vs, _fs);
		this.useFallback = useFallback;
		this.setupUniforms();
	}


	_init() {
		const size = Params.terrainSize;
		const num = GL.isMobile ? 80 : 120;
		this.mesh = alfrid.Geom.plane(size, size, num, 'xz');

		this._textureHeight = new GLTexture(getAsset('height'));
		this._textureNormal = new GLTexture(getAsset('normal'));
	}

	setupUniforms() {
		this.shader.bind();
		ShaderUtils.bindUniforms(this.shader, oUniforms);

		this.shader.uniform('uExposure', 'float', Params.exposure);
		this.shader.uniform('uGamma', 'float', Params.gamma);
		
		this.shader.uniform('uFogDensity', 'float', Params.fogDensity);
		this.shader.uniform('uFogColor', 'vec3', Params.fogColor);

		this.shader.uniform("textureHeight", "uniform1i", 0);
		this.shader.uniform("textureNormal", "uniform1i", 1);
		this.shader.uniform("textureNoise", "uniform1i", 2);

		if(this.useFallback) {
			this.shader.uniform("textureEnv", "uniform1i", 3);
		} else {
			this.shader.uniform('uRadianceMap', 'uniform1i', 3);
			this.shader.uniform('uIrradianceMap', 'uniform1i', 4);
		}
	}


	render(textureRad, textureIrr, textureNoise, textureEnv) {
		this.shader.bind();

		this._textureHeight.bind(0);
		this._textureNormal.bind(1);
		textureNoise.bind(2);

		if(this.useFallback) {
			textureEnv.bind(3);
		} else {
			textureRad.bind(3);
			textureIrr.bind(4);	
		}


		this.shader.uniform("uClipY", "float", Params.clipY);
		this.shader.uniform("uDir", "float", Params.clipDir);

		GL.draw(this.mesh);
	}


}

export default ViewTerrain;