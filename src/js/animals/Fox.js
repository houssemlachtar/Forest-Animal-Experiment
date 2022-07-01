import Animal from './Animal';

class Fox extends Animal {
  constructor(pos){
    let v = [
      [722,563, 0],[687,550, 0],[678,529, 0],[691,489, 0],[712,449, 0],[714,427, 0],[699,402, 0],[682,384, 0],[680,371, 0],[693,357, 0],[715,347, 0],[718,341, 0],[672,342, 0],[644,348, 0],[641,353, 0],[667,356, 0],[693,341, 0],[699,327, 0],[680,294, 0],[655,276, 0],[645,272, 0],[635,280, 0],[632,297, 0],[632,314, 0],[625,317, 0],[616,309, 0],[620,277, 0],[615,267, 0],[595,256, 0],[586,240, 0],[591,225, 0],[607,219, 0],[627,229, 0],[635,243, 0],[636,299, 0],[650,355, 0],[675,401, 0],[691,368, 0],[696,314, 0],[688,246, 0],[669,203, 0],[639,158, 0],[607,130, 0],[580,122, 0],[563,130, 0],[551,154, 0],[548,184, 0],[549,202, 0],[600,234, 0],[615,247, 0],[620,256, 0],[632,261, 0],[651,262, 0],[657,270, 0],[652,297, 0],[654,315, 0],[666,320, 0],[674,313, 0],[666,294, 0],[667,282, 0],[676,262, 0],[675,252, 0],[663,244, 0],[658,233, 0],[664,193, 0],[641,154, 0],[602,126, 0],[533,104, 0],[497,113, 0],[491,120, 0],[490,128, 0],[503,133, 0],[524,145, 0],[549,168, 0],[556,180, 0],[548,190, 0],[535,203, 0],[529,212, 0],[532,225, 0],[542,227, 0],[549,218, 0],[549,208, 0],[584,179, 0],[585,154, 0],[572,129, 0],[546,108, 0],[513,107, 0],[485,121, 0],[464,147, 0],[451,180, 0],[430,169, 0],[428,163, 0],[440,162, 0],[453,161, 0],[467,148, 0],[485,134, 0],[499,136, 0],[522,151, 0],[541,176, 0],[542,190, 0],[538,195, 0],[512,209, 0],[506,219, 0],[515,227, 0],[529,225, 0],[526,215, 0],[515,211, 0],[503,216, 0],[495,230, 0],[489,244, 0],[484,250, 0],[480,253, 0],[466,257, 0],[464,251, 0],[467,237, 0],[466,218, 0],[459,212, 0],[453,205, 0],[453,187, 0],[461,177, 0],[482,173, 0],[499,176, 0],[501,178, 0],[492,184, 0],[475,179, 0],[471,169, 0],[482,160, 0],[498,160, 0],[502,171, 0],[509,184, 0],[523,187, 0],[533,190, 0],[519,201, 0],[497,224, 0],[481,254, 0],[480,286, 0],[490,305, 0],[500,314, 0],[512,315, 0],[519,309, 0],[511,305, 0],[502,305, 0],[492,308, 0],[480,322, 0],[471,348, 0],[479,370, 0]
    ]


    super(v, pos || [0, -3, 0], [[474, 203, 0]])


  }
}

export default Fox;