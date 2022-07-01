// SubsceneLines.js
import alfrid, { GL } from 'alfrid';

import Sono from 'sono';
import Controller from './controller/controller'
import ViewDear from './views/viewsAnimals/ViewDear'
import ViewBoar from './views/viewsAnimals/ViewBoar'
import ViewFox from './views/viewsAnimals/ViewFox'
import ViewBat from './views/viewsAnimals/ViewBat'
import ViewBear from './views/viewsAnimals/ViewBear'
import ViewWolf from './views/viewsAnimals/ViewWolf'
import ViewRabbit from './views/viewsAnimals/ViewRabbit'
import ViewWeasel from './views/viewsAnimals/ViewWeasel'
import LinesManager from './managers/LinesManager'
import CameraStops from './CameraStops';
import Params from './Params';
import DelayedCalls from './libs/DelayedCalls';


class SubsceneLines {
	constructor(mScene) {
		this._scene = mScene;
		this.delayedCalls = new DelayedCalls();
		this._initTextures();
		this._initViews();


	}

	_initTextures() {

	}

	_initViews() {
		this.firstTime = true;
		// this.delayedCalls.clear();
		// this._step = 0;
		this.cameraPos = [0,0,0];
		// this._tick = 0;

		this.controller = new Controller(this);

		this.animals = [];


		this.linesManager = new LinesManager(this._scene);

		for (var i = 0; i < (GL.isMobile ? 3:7); i++) {
			this.linesManager.addLine();
		}

		this.reset();

		// this.updateAnimals()
	}

	updateAnimals(){
		this.shapes = [
			null,
			ViewBoar,
			ViewBat,
			ViewFox,
			ViewBear,
			ViewDear,
			ViewWolf,
			ViewRabbit,
			ViewWeasel,
		];

		let data;
		if(vrPresenting){
			data = [
				null,
				{ pos:[-4,-0.5,-.5], rx: 0, ry: 0},
				{ pos:[0,2,0], rx:0, ry: 0},
				{ pos:[3,.5,-3], rx:0, ry: -60 * Math.PI / 180},
				// { pos:[3,.5,-3], rx:0, ry: 0},
				{ pos:[0,.8,-5], rx:0, ry: -15 * Math.PI / 180},
				{ pos:[0,1.2,-6], rx:0, ry: 14 * Math.PI / 180},
				{ pos:[0,0,0], rx:0, ry: 0},
				{ pos:[0,1.4,5], rx:0, ry: 0},
				{ pos:[-5, .6,2], rx:0, ry: 0}
			]
		}
		else {
			data = [
				null,
				{ pos:[0,-.7,0], rx: 0, ry: 0},
				{ pos:[0,2,0], rx:0, ry: 0},
				{ pos:[0,0,0], rx:0, ry: 0},
				{ pos:[0,.4,0], rx:0, ry: 0},
				{ pos:[0,.5,0], rx:0, ry: 0},
				{ pos:[0,0,0], rx:0, ry: 0},
				{ pos:[0,.4,0], rx:0, ry: 0},
				{ pos:[0,.1,0], rx:0, ry: 0}
			]
		}


		this.animals = [];
		for (var i = 0; i < CameraStops.length; i++) {
			// CameraStops[i]

			if(this.shapes[i]){
				let view = new this.shapes[i % this.shapes.length];

				let dataStop = CameraStops[i];
				let _pT = [dataStop.tx * Params.terrainSize/2 + data[i].pos[0], dataStop.ty + data[i].pos[1], dataStop.tz * Params.terrainSize/2 + data[i].pos[2]];

				let debug = false;
				if(i === 1){
					debug = true;
				}

				view.reset([_pT[0], -_pT[1], -_pT[2]], CameraStops[i].rx + data[i].rx, CameraStops[i].ry + data[i].ry, debug)
				this.animals.push(view);

			}
		}
	}

	reset(){
		this.delayedCalls.clear();
		this._step = 0;
		this._tick = 0;
		this.linesManager.reset();
	}

	goTo(pt, isFinished, firstTime){
		if(this.firstTime){
			this.updateAnimals();
			this.firstTime = false;
		}
		this._scene.fadeInLightVolume();

		this.delayedCalls.clear();
		this.delayedCalls.add(this._scene.fadeOutLightVolume.bind(this._scene), 1);
		this.delayedCalls.add(this._scene.stopLightSound.bind(this._scene), 5);
		// newMusic.fade(newMusic.volume, this.fadeOutDuration);
		// say the lines to all move to pt ! Second paramater is the animal to draw
		let lineToFollow = this.linesManager.moveTo(pt, this.animals[this._step % this.animals.length], isFinished, firstTime)
		this._step++;

		if(lineToFollow){

			return lineToFollow;
		}
		else {
			return false
		}
	}

	pause(){
		this.linesManager.pause();
		// this._vLine.pause();
		// this.linesManager.moveTo([-5, -2, 5])
	}

	onClick(pt){
    // console.log(pt);
		// this._pointsManager.addPoint(pt)
  }

	undraw(){
		// this.l.undraw();
		this.linesManager.undraw();
	}

	transform(){
	}

	update(pos) {
		this.delayedCalls.update()
	}

	render(pos) {

		this.controller.update();

		this.linesManager.update(pos);

		// this.volume = 0;

		// for (var i = 0; i < this.animals.length; i++) {
			// this.animals[i].render();

			// const pos = [this.animals[i].shape.centerX + this._pt[0], this.animals[i].shape.centerY + this._pt[1], this.animals[i].shape.centerZ + this._pt[2]];
			// this._bBall.draw(pos, [.1, .1, .1], [0.2, 0.6, 1.0]);
		// }
		// if(this.volume < .02) this.volume = .02;

		// console.log("dist", this.linesManager.dist);
		// this._vLine.render();
		// this._viewDear.render();
	}

	map(val, inputMin, inputMax, outputMin, outputMax){
        return ((outputMax - outputMin) * ((val - inputMin)/(inputMax - inputMin))) + outputMin;
    }
}

export default SubsceneLines;
