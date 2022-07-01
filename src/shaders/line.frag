precision mediump float;


uniform float alpha;
uniform sampler2D texture;
// varying vec3 vPosition;
// varying vec3 vColor;
// uniform vec2 resolutions;

varying float vCounters;
varying vec2 vUV;

void main() {

  vec4 color = vec4(1.0);
  // vec4 color = vec4(1.0);
  vec4 colorEnd = color * texture2D( texture, vUV );

  if(colorEnd.a < .01){
    discard;
  }

  // colorEnd.a = 1.0;
  // color *= texture2D( texture, vUV );

  gl_FragColor = colorEnd;
  // gl_FragColor.a *= step(vCounters, 1.0);

}
