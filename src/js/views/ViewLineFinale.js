// ViewLineFinale.js


import alfrid, { GL } from 'alfrid';
import glmatrix from 'gl-matrix';

import Perlin from '../libs/Perlin'
import Line from '../geom/Line'
import Dear from '../animals/Dear'
import Spline from '../libs/Spline';
// import vs from '../../shaders/line.vert';
import vs from '../../shaders/line_end.vert';
import fs from '../../shaders/line_end.frag';
import Easings from '../libs/Easings';
import Motions from '../LinesMotions';

const STATES = {
	wandering: 0,
	muting: 1,
	leaving: 2,
	travelling: 3,
	dying: 4,
}
let tempArray = [];
class ViewLineFinale extends alfrid.View {

	constructor(app) {
		super(vs, fs);

		this.alpha = 0;
		this.ratio = 0;
		this.hide = false;
		this.deltaTime = 0;

		// this.isPaused = false;
		this.app = app;
		this._tick = 0;
		this.tickLeaving = 0;
		this.tickRender = 0;

		this.mainSpeed = .6;

		this.easings = new Easings();
	}


	_init() {

		this.isReady = false;
		this.position = [0, 0, 0]
		this.spline = new Spline([]);
		// this.points = []
		// const max = 20;

		// let index = 0;
		// let x, y=-.3, z, r = .05, pt = [], t = Math.PI;
		// for (var i = 0; i < 15; i++) {
		// 	t+= 1;
		// 	x = Math.sin(t * 1.3) * r;
		// 	z = Math.cos(t * 1.3) * r;
		// 	y -= .3;
		// 	r+= .06;
		//
		// 	if(r > 2) r = 2;
		//
		// 	// console.log(y);
		// 	//
		//
		// 	// this.points[index++] = [0,0,0];
		// 	// pt = [x,y,z]
		// 	this.points[index++] = [x,y,z];
		//
		// }


		// let division = 20;
		// this.line = new Line();
		// console.log(this.getPoints(this.points).toString());
		// this.line = new Line(this.getPoints(this.points),(p)=>{
		// 	return p * division });
		// this.line.points = this.points;

		// properties for wandering animation
		this.tick = Math.random() * Math.PI*2 * 100;

	}

	reset(){
		this.easings.killTweensOf(this);
		this.animated = 1;
		this.deltaTime = 0;
		this.stopRendering = false;
	}

	resetOptions(data){
		this.animated = 1;
		this.deltaTime = 0;
		this.isReady = true;


		this.data = data;
		this.line = new Line(this.getPoints(data.points),(p)=>{
			return p * data.division });

		this.texture = new alfrid.GLTexture(getAsset('stroke'));
	}

	fadeOut(){
		this.easings.to(this, 2, {
			alpha: 0,
			ease: this.easings.easeInSine,
			onComplete: ()=> {
				this.stopRendering = true;
			}
		})
	}

	finishDraw(){
		this.animated = 0;
	}

	// appear(delay=0){
	// 	this.deltaTime = 0;
	//
	// 	this.easings.to(this, 4, {
	// 		alpha: 1,
	// 		// ease: this.easings.easeInOutCirc,
	// 		delay: delay
	// 	});
	//
	// 	// this.easings.to(this, 4, {
	// 	// 	delay: delay,
	// 	// 	deltaTime: this.data.deltaTime,
	// 	// 	ease: this.easings.easeInOutCirc
	// 	// })
	// }
	//
	// hide(delay = 0){
	// 	this.easings.to(this, 4, {
	// 		delay: delay,
	// 		ease: this.easings.easeOutSine,
	// 		alpha: 0
	// 	});
	//
	// 	// this.easings.to(this, 4, {
	// 	// 	delay: delay,
	// 	// 	deltaTime: -this.data.deltaTime,
	// 	// 	ease: this.easings.easeOutCirc
	// 	// })
	// }

  getPoints(pts){
		this.spline.points = pts;
		let indexArray, n_sub = 6;

		tempArray = [];
		let index = 0;
		for (let i = 0; i < pts.length * n_sub; i ++ ) {
			indexArray = i / ( pts.length * n_sub );
			this.spline.getPoint( indexArray,  tempArray);
		}

		return tempArray;
	}




	pause() {
		// alert()
		this.isPaused = true;
		// this.isPaused = !this.isPaused;
	}

	render() {

		if(!this.isReady || this.stopRendering) return;
		// this.easings.update();

		// console.log(this.isPaused);
		this._tick += this.data.deltaTime * (window.hasVR ? .66 : 1) * (this.hide? -1:1);
		// this._tick += this.deltaTime * (window.hasVR ? .66 : 1);
		// let canUpdate = (this.tickRender++ % 2 == 0);

		// if(canUpdate){
			if(this.easings.tweens.length){
				this.easings.update();
			}
		// 	if(!this.isPaused){
		// 		// this.update();
		// 	}
		// }

		this.shader.bind();
		// this.shader.uniform("texture", "uniform1i", 0);
		// this.texture.bind(0);

		// this.shader.uniform("animated", "int", this.animated);
		this.shader.uniform("uTime", "float", this._tick);
		this.shader.uniform("ratio", "float", this.ratio);
		this.shader.uniform("alpha", "float", this.alpha);
		this.shader.uniform("thickness", "float", this.data.thickness);
		this.shader.uniform("aspect", "float", window.innerWidth / window.innerHeight);
		this.shader.uniform("resolutions", "vec2", [window.innerWidth, window.innerHeight]);

		// if(this.isPaused){
			GL.draw(this.line);

			// return;
		// }
	}


}

export default ViewLineFinale;
