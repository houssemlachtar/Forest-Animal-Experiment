! function(e) {
    function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }(function(e) { for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function(t) { var n = t.slice(1),
                        i = e[t[0]]; return function(e, t, r) { i.apply(this, [e, t, r].concat(n)) } }(e[t]); break;
            default:
                e[t] = e[e[t]] }
        return e }([function(e, t, n) { e.exports = n(126) }, function(e, t) { "use strict";
    t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    t.__esModule = !0; var r = n(176),
        o = i(r);
    t.default = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }() }, function(e, t, n) { e.exports = { "default": n(186), __esModule: !0 } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    t.__esModule = !0; var r = n(81),
        o = i(r),
        a = n(80),
        s = i(a),
        u = n(47),
        l = i(u);
    t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, l.default)(t)));
        e.prototype = (0, s.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t) } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    t.__esModule = !0; var r = n(47),
        o = i(r);
    t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = n(10),
        f = i(c),
        h = n(14),
        d = i(h),
        v = n(75),
        p = i(v),
        m = n(74),
        _ = i(m),
        g = n(25),
        x = i(g),
        y = n(30),
        b = i(y),
        M = n(17),
        w = i(M),
        E = n(132),
        S = i(E),
        T = n(131),
        P = i(T),
        A = n(29),
        C = i(A),
        I = n(145),
        D = i(I),
        F = n(46),
        k = i(F),
        L = n(149),
        R = i(L),
        O = n(78),
        N = i(O),
        V = n(147),
        z = i(V),
        B = n(43),
        G = i(B),
        U = n(76),
        j = i(U),
        X = n(44),
        q = i(X),
        Y = n(133),
        H = i(Y),
        W = n(77),
        K = i(W),
        Z = n(45),
        Q = i(Z),
        J = n(144),
        $ = i(J),
        ee = n(143),
        te = i(ee),
        ne = n(136),
        ie = i(ne),
        re = n(134),
        oe = i(re),
        ae = n(135),
        se = i(ae),
        ue = n(137),
        le = i(ue),
        ce = n(138),
        fe = i(ce),
        he = n(140),
        de = i(he),
        ve = n(139),
        pe = i(ve),
        me = n(141),
        _e = i(me),
        ge = n(142),
        xe = i(ge),
        ye = n(148),
        be = i(ye),
        Me = function() {
            function e() {
                (0, o.default)(this, e), this.glm = l.default, this.GL = f.default, this.GLTool = f.default, this.GLShader = d.default, this.GLTexture = p.default, this.GLCubeTexture = _.default, this.Mesh = x.default, this.Geom = b.default, this.Batch = w.default, this.FrameBuffer = S.default, this.CubeFrameBuffer = P.default, this.Scheduler = C.default, this.EventDispatcher = D.default, this.EaseNumber = k.default, this.TweenNumber = R.default, this.Camera = G.default, this.CameraOrtho = j.default, this.CameraPerspective = q.default, this.Ray = K.default, this.CameraCube = H.default, this.OrbitalControl = N.default, this.QuatRotation = z.default, this.BinaryLoader = Q.default, this.ObjLoader = $.default, this.HDRLoader = te.default, this.BatchCopy = ie.default, this.BatchAxis = oe.default, this.BatchBall = se.default, this.BatchBall = se.default, this.BatchLine = fe.default, this.BatchSkybox = de.default, this.BatchSky = pe.default, this.BatchDotsPlane = le.default, this.Scene = _e.default, this.View = xe.default, this.ShaderLibs = be.default; for (var t in l.default) l.default[t] && (window[t] = l.default[t]) } return (0, s.default)(e, [{ key: "log", value: function() { navigator.userAgent.indexOf("Chrome") > -1; for (var e in this) this[e] } }]), e }(),
        we = new Me;
    t.default = we, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    t.__esModule = !0; var r = n(3),
        o = i(r),
        a = n(178),
        s = i(a);
    t.default = function u(e, t, n) { null === e && (e = Function.prototype); var i = (0, s.default)(e, t); if (void 0 === i) { var r = (0, o.default)(e); return null === r ? void 0 : u(r, t, n) } if ("value" in i) return i.value; var a = i.get; if (void 0 !== a) return a.call(n) } }, function(e, t, n) { t.glMatrix = n(15), t.mat2 = n(226), t.mat2d = n(227), t.mat3 = n(96), t.mat4 = n(228), t.quat = n(229), t.vec2 = n(230), t.vec3 = n(97), t.vec4 = n(98) }, function(e, t) { var n = e.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = void 0,
        f = (new Float32Array([0, 0, .1, 1, 0, .2, 2, 0, .3, 3, 0, .4]), new Float32Array([1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1]), function(e, t, n) { return void 0 === t.cacheAttribLoc && (t.cacheAttribLoc = {}), void 0 === t.cacheAttribLoc[n] && (t.cacheAttribLoc[n] = e.getAttribLocation(t, n)), t.cacheAttribLoc[n] }),
        h = function() {
            function e() {
                (0, o.default)(this, e), this.canvas, this._viewport = [0, 0, 0, 0], this._enabledVertexAttribute = [], this.identityMatrix = l.default.mat4.create(), this._normalMatrix = l.default.mat3.create(), this._inverseModelViewMatrix = l.default.mat3.create(), this._modelMatrix = l.default.mat4.create(), this._matrix = l.default.mat4.create(), this._lastMesh = null, this._hasArrayInstance, this._extArrayInstance, this._hasCheckedExt = !1, l.default.mat4.identity(this.identityMatrix, this.identityMatrix), this.isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.isMobile = !0) } return (0, s.default)(e, [{ key: "init", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; if (null !== e && void 0 !== e) { void 0 !== this.canvas && null !== this.canvas && this.destroy(), this.canvas = e, this.setSize(window.innerWidth, window.innerHeight); var n = this.canvas.getContext("webgl", t) || this.canvas.getContext("experimental-webgl", t);
                        this.initWithGL(n) } } }, { key: "initWithGL", value: function(e) { this.canvas || (this.canvas = e.canvas), c = this.gl = e; var t = ["EXT_shader_texture_lod", "EXT_sRGB", "EXT_frag_depth", "OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "ANGLE_instanced_arrays", "WEBGL_draw_buffers"];
                    this.extensions = {}; for (var n = 0; n < t.length; n++) this.extensions[t[n]] = c.getExtension(t[n]);
                    this.VERTEX_SHADER = c.VERTEX_SHADER, this.FRAGMENT_SHADER = c.FRAGMENT_SHADER, this.COMPILE_STATUS = c.COMPILE_STATUS, this.DEPTH_TEST = c.DEPTH_TEST, this.CULL_FACE = c.CULL_FACE, this.BLEND = c.BLEND, this.POINTS = c.POINTS, this.LINES = c.LINES, this.TRIANGLES = c.TRIANGLES, this.LINEAR = c.LINEAR, this.NEAREST = c.NEAREST, this.LINEAR_MIPMAP_NEAREST = c.LINEAR_MIPMAP_NEAREST, this.MIRRORED_REPEAT = c.MIRRORED_REPEAT, this.CLAMP_TO_EDGE = c.CLAMP_TO_EDGE, this.SCISSOR_TEST = c.SCISSOR_TEST, this.enable(this.DEPTH_TEST), this.enable(this.CULL_FACE), this.enable(this.BLEND) } }, { key: "setViewport", value: function(e, t, n, i) { var r = !1;
                    e !== this._viewport[0] && (r = !0), t !== this._viewport[1] && (r = !0), n !== this._viewport[2] && (r = !0), i !== this._viewport[3] && (r = !0), r && (c.viewport(e, t, n, i), this._viewport = [e, t, n, i]) } }, { key: "scissor", value: function(e, t, n, i) { c.scissor(e, t, n, i) } }, { key: "clear", value: function(e, t, n, i) { c.clearColor(e, t, n, i), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT) } }, { key: "setMatrices", value: function(e) { this.camera = e, this.rotate(this.identityMatrix) } }, { key: "useShader", value: function(e) { this.shader = e, this.shaderProgram = this.shader.shaderProgram } }, { key: "rotate", value: function(e) { l.default.mat4.copy(this._modelMatrix, e), l.default.mat4.multiply(this._matrix, this.camera.matrix, this._modelMatrix), l.default.mat3.fromMat4(this._normalMatrix, this._matrix), l.default.mat3.invert(this._normalMatrix, this._normalMatrix), l.default.mat3.transpose(this._normalMatrix, this._normalMatrix), l.default.mat3.fromMat4(this._inverseModelViewMatrix, this._matrix), l.default.mat3.invert(this._inverseModelViewMatrix, this._inverseModelViewMatrix) } }, { key: "draw", value: function(e, t) { if (e.length)
                        for (var n = 0; n < e.length; n++) this.draw(e[n]);
                    else { if (e.instancedAttributes.length > 0) return void this.drawInstance(e);
                        e.vao ? this._bindVao(e) : this._lastMesh !== e && this._bindBuffers(e), void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix); var i = e.drawType;
                        void 0 !== t && (i = t), i === c.POINTS ? c.drawArrays(i, 0, e.vertexSize) : c.drawElements(i, e.iBuffer.numItems, c.UNSIGNED_SHORT, 0), e.vao && this._unbindVao(e) } } }, { key: "drawInstance", value: function(e) { if (!this._hasCheckedExt) { var t = this.getExtension("ANGLE_instanced_arrays");
                        t ? (this._hasArrayInstance = !0, this._extArrayInstance = t) : this._hasArrayInstance = !1, this._hasCheckedExt = !0 } if (this._hasArrayInstance)
                        if (e.length)
                            for (var n = 0; n < e.length; n++) this.drawInstance(e[n], mDrawingType);
                        else { var i = [],
                                r = this._extArrayInstance;
                            this._lastMesh !== e && this._bindBuffers(e); for (var o = 1, a = 0; a < e.instancedAttributes.length; a++) { var s = e.instancedAttributes[a];
                                c.bindBuffer(c.ARRAY_BUFFER, s.buffer); var u = f(c, this.shaderProgram, s.name);
                                c.vertexAttribPointer(u, s.itemSize, c.FLOAT, !1, 4 * s.itemSize, 0), r.vertexAttribDivisorANGLE(u, 1), i.push(u), -1 === this._enabledVertexAttribute.indexOf(u) && (c.enableVertexAttribArray(u), this._enabledVertexAttribute.push(u)), o = s.numInstance }
                            this._instanceCount = o, void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix), r.drawElementsInstancedANGLE(e.drawType, e.iBuffer.numItems, c.UNSIGNED_SHORT, 0, this._instanceCount), i.map(function(e) { r.vertexAttribDivisorANGLE(e, 0) }) } } }, { key: "_bindVao", value: function(e) { e.bindVAO() } }, { key: "_unbindVao", value: function(e) { e.unbindVAO() } }, { key: "_bindBuffers", value: function(e) { for (var t = 0; t < e.attributes.length; t++) { var n = e.attributes[t];
                        c.bindBuffer(c.ARRAY_BUFFER, n.buffer); var i = f(c, this.shaderProgram, n.name);
                        c.vertexAttribPointer(i, n.itemSize, c.FLOAT, !1, 0, 0), -1 === this._enabledVertexAttribute.indexOf(i) && (c.enableVertexAttribArray(i), this._enabledVertexAttribute.push(i)) }
                    c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, e.iBuffer), this._lastMesh = e } }, { key: "setSize", value: function(e, t) { this._width = e, this._height = t, this.canvas.width = this._width, this.canvas.height = this._height, this._aspectRatio = this._width / this._height, c && this.viewport(0, 0, this._width, this._height) } }, { key: "showExtensions", value: function() { for (var e in this.extensions) this.extensions[e] } }, { key: "checkExtension", value: function(e) { return !!this.extensions[e] } }, { key: "getExtension", value: function(e) { return this.extensions[e] } }, { key: "enableAlphaBlending", value: function() { c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA) } }, { key: "enableAdditiveBlending", value: function() { c.blendFunc(c.ONE, c.ONE) } }, { key: "enable", value: function(e) { c.enable(e) } }, { key: "disable", value: function(e) { c.disable(e) } }, { key: "viewport", value: function(e, t, n, i) { this.setViewport(e, t, n, i) } }, { key: "destroy", value: function() { if (this.canvas.parentNode) try { this.canvas.parentNode.removeChild(this.canvas) } catch (e) {}
                    this.canvas = null } }, { key: "width", get: function() { return this._width } }, { key: "height", get: function() { return this._height } }, { key: "aspectRatio", get: function() { return this._aspectRatio } }]), e }(),
        d = new h;
    t.default = d, e.exports = t.default }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = { numParticles: 128, skipCount: 10, maxRadius: 20, terrainSize: 50, seaLevel: .71, gamma: 2.2, exposure: 5, clipY: .71, clipDir: -1, fogColor: [12 / 255, 24 / 255, 29 / 255], fogDensity: .05, postEffect: !0 };
    t.default = n, e.exports = t.default }, function(e, t) { e.exports = "precision mediump float;\n#define GLSLIFY 1\n\n\nuniform float alpha;\nuniform sampler2D texture;\n// varying vec3 vPosition;\n// varying vec3 vColor;\n// uniform vec2 resolutions;\n\nvarying float vCounters;\nvarying vec2 vUV;\n\nvoid main() {\n\n  vec4 color = vec4(1.0);\n  // vec4 color = vec4(1.0);\n  vec4 colorEnd = color * texture2D( texture, vUV );\n\n  if(colorEnd.a < .01){\n    discard;\n  }\n\n  // colorEnd.a = 1.0;\n  // color *= texture2D( texture, vUV );\n\n  gl_FragColor = colorEnd;\n  // gl_FragColor.a *= step(vCounters, 1.0);\n\n}\n" }, function(e, t) { e.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float direction;\nattribute vec3 aPrevious;\nattribute vec3 aNext;\nattribute float width;\n// attribute vec4 a_offsets;\nattribute float aCounters;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uTime;\nuniform float thickness;\n\n\nuniform float aspect;\n\nvarying vec2 vUV;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying float vCounters;\n\nvoid main() {\n\n  // float thickness = 1. * width;\n  int miter = 0;\n\n  vec2 aspectVec = vec2(aspect, 1.0);\n  mat4 projViewModel = uProjectionMatrix * uViewMatrix * uModelMatrix;//projection * view * model;\n\n  vec4 previousProjected = projViewModel * vec4(aPrevious.x, -aPrevious.y, -aPrevious.z, 1.0);\n  vec4 currentProjected = projViewModel * vec4(aVertexPosition.x, -aVertexPosition.y, -aVertexPosition.z, 1.0);\n  vec4 nextProjected = projViewModel * vec4(aNext.x, -aNext.y, -aNext.z, 1.0);\n\n  // vec4 previousProjected = projViewModel * vec4(aPrevious, 1.0);\n  // vec4 currentProjected = projViewModel * vec4(aVertexPosition, 1.0);\n  // vec4 nextProjected = projViewModel * vec4(aNext, 1.0);\n\n  vNormal = aNormal;\n  vUV = aTextureCoord;\n  //get 2D screen space with W divide and aspect correction\n  vec2 currentScreen = currentProjected.xy / currentProjected.w * aspectVec;\n  vec2 previousScreen = previousProjected.xy / previousProjected.w * aspectVec;\n  vec2 nextScreen = nextProjected.xy / nextProjected.w * aspectVec;\n\n  vCounters = aCounters;\n\n  float len = thickness *width ;\n  // len *= smoothstep(vUV.x*2.,vUV.y*2.+2.,-uTime*2000.);;\n  // len *= smoothstep(vUV.x * 2., vUV.y * 2.+ 1., -uTime*2000.);\n\n  float orientation = direction;\n\n  //starting point uses (next - current)\n  vColor = vec3(1.0, .0, 0.0);\n  vec2 dir = vec2(0.0);\n  if (currentScreen == previousScreen) {\n    dir = normalize(nextScreen - currentScreen);\n    // vColor = vec3(1.0, 0.0, 0.0);\n  }\n  //ending point uses (current - previous)\n  else if (currentScreen == nextScreen) {\n    dir = normalize(currentScreen - previousScreen);\n    // vColor = vec3(0.0, 1.0, 0.0);\n  }\n  //somewhere in middle, needs a join\n  else {\n    //get directions from (C - B) and (B - A)\n\n    vec2 dirA = normalize((currentScreen - previousScreen));\n    if (miter == 1) {\n      vec2 dirB = normalize((nextScreen - currentScreen));\n      //now compute the miter join normal and length\n      vec2 tangent = normalize(dirA + dirB);\n      vec2 perp = vec2(-dirA.y, dirA.x);\n      vec2 miter = vec2(-tangent.y, tangent.x);\n      dir = tangent;\n      len = thickness / dot(miter, perp);\n    } else {\n      dir = dirA;\n\n    }\n  }\n  vec2 normal = vec2(-dir.y, dir.x);\n  vColor = vec3(normal, 1.0);\n  normal.x /= aspect;\n  normal *= len/2.0;\n\n  vec4 offset =  vec4(normal * orientation, 0.0, 0.0);\n  // vColor = vec3(orientation);\n\n\n\n\n\n\n\n  gl_Position = currentProjected + offset;\n  gl_PointSize = 1.0;\n}\n" }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(10),
        l = i(u),
        c = (n(232), function(e, t) { if (e.length !== t.length) return !1; for (var n = 0; n < e.length; n++)
                if (e[n] !== t[n]) return !1;
            return !0 }),
        f = function(e) { return e.slice ? e.slice(0) : new Float32Array(e) },
        h = void 0,
        d = n(63),
        v = n(240),
        p = { "float": "uniform1f", vec2: "uniform2fv", vec3: "uniform3fv", vec4: "uniform4fv", "int": "uniform1i", mat3: "uniformMatrix3fv", mat4: "uniformMatrix4fv" },
        m = function() {
            function e() { var t = arguments.length <= 0 || void 0 === arguments[0] ? d : arguments[0],
                    n = arguments.length <= 1 || void 0 === arguments[1] ? v : arguments[1];
                (0, o.default)(this, e), h = l.default.gl, this.parameters = [], this.uniformTextures = [], t || (t = d), n || (n = d); var i = this._createShaderProgram(t, !0),
                    r = this._createShaderProgram(n, !1);
                this._attachShaderProgram(i, r) } return (0, s.default)(e, [{ key: "bind", value: function() { l.default.shader !== this && (h.useProgram(this.shaderProgram), l.default.useShader(this), this.uniformTextures = []) } }, { key: "uniform", value: function(e, t, n) { for (var i = p[t] || t, r = !1, o = void 0, a = -1, s = 0; s < this.parameters.length; s++)
                        if (o = this.parameters[s], o.name === e) { r = !0, a = s; break }
                    var u = !1; if (r ? (this.shaderProgram[e] = o.uniformLoc, u = o.isNumber) : (u = "uniform1i" === i || "uniform1f" === i, this.shaderProgram[e] = h.getUniformLocation(this.shaderProgram, e), u ? this.parameters.push({ name: e, type: i, value: n, uniformLoc: this.shaderProgram[e], isNumber: u }) : this.parameters.push({ name: e, type: i, value: f(n), uniformLoc: this.shaderProgram[e], isNumber: u }), a = this.parameters.length - 1), this.parameters[a].uniformLoc)
                        if (-1 === i.indexOf("Matrix"))
                            if (u) { var l = this.parameters[a].value !== n || !r;
                                l && (h[i](this.shaderProgram[e], n), this.parameters[a].value = n) } else c(this.parameters[a].value, n) && r || (h[i](this.shaderProgram[e], n), this.parameters[a].value = f(n));
                    else c(this.parameters[a].value, n) && r || (h[i](this.shaderProgram[e], !1, n), this.parameters[a].value = f(n)) } }, { key: "_createShaderProgram", value: function(e, t) { var n = t ? l.default.VERTEX_SHADER : l.default.FRAGMENT_SHADER,
                        i = h.createShader(n); return h.shaderSource(i, e), h.compileShader(i), h.getShaderParameter(i, h.COMPILE_STATUS) ? i : null } }, { key: "_attachShaderProgram", value: function(e, t) { this.shaderProgram = h.createProgram(), h.attachShader(this.shaderProgram, e), h.attachShader(this.shaderProgram, t), h.linkProgram(this.shaderProgram) } }]), e }();
    t.default = m, e.exports = t.default }, function(e, t) { var n = {};
    n.EPSILON = 1e-6, n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function(e) { n.ARRAY_TYPE = e }; var i = Math.PI / 180;
    n.toRadian = function(e) { return e * i }, n.equals = function(e, t) { return Math.abs(e - t) <= n.EPSILON * Math.max(1, Math.abs(e), Math.abs(t)) }, e.exports = n }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = function() {
            function e(t, n, i, r) {
                (0, o.default)(this, e), this.eyes = i || [], this.vertices = t || [], this.position = n || [0, 0, 0], this.m = l.default.mat4.create(), this.mRX = l.default.mat4.create(), this.mRY = l.default.mat4.create(), this.mT = l.default.mat4.create(), this.mTAnchor = l.default.mat4.create(), this.offsetEyes = r || [0, 0, 0], this.positionedEyes = [], this.remapVertices() } return (0, s.default)(e, [{ key: "remapVertices", value: function() { for (var e = 1e4, t = 0, n = 1e4, i = 0, r = 0; r < this.vertices.length; r++) { var o = this.vertices[r];
                        o[0] < e && (e = o[0]), o[0] > t && (t = o[0]), o[1] < n && (n = o[1]), o[1] > i && (i = o[1]) }
                    this.wX = t - e, this.wY = i - n; var a = Math.max(this.wX, this.wY);
                    this.tick = 0; for (var s = null, u = null, l = null, c = null, f = null, h = null, r = 0; r < this.eyes.length; r++) this.eyes[r][0] /= a / 2, this.eyes[r][1] /= a / 2, this.eyes[r][2] = this.offsetEyes[2]; for (var r = 0; r < this.vertices.length; r++) this.tick++, this.vertices[r][0] /= a / 2, this.vertices[r][1] /= a / 2, this.vertices[r][2] = .4 * Math.cos(this.tick / 10), (this.vertices[r][0] < s || null === s) && (s = this.vertices[r][0]), (this.vertices[r][0] > u || null === u) && (u = this.vertices[r][0]), (this.vertices[r][1] < l || null === l) && (l = this.vertices[r][1]), (this.vertices[r][1] > c || null === c) && (c = this.vertices[r][1]), (this.vertices[r][2] < f || null === f) && (f = this.vertices[r][2]), (this.vertices[r][2] > h || null === h) && (h = this.vertices[r][2]);
                    this.centerX = (u + s) / 2, this.centerY = (c + l) / 2, this.centerZ = (h + f) / 2; var d = [this.position[0], this.position[1], this.position[2]];
                    this.translationAnchor = [-this.centerX, -this.centerY, -this.centerZ], mat4.identity(this.mT, this.mT), mat4.identity(this.mTAnchor, this.mTAnchor), mat4.translate(this.mTAnchor, this.mTAnchor, this.translationAnchor), mat4.translate(this.mT, this.mT, d) } }, { key: "rotateX", value: function(e) { l.default.mat4.fromXRotation(this.mRX, e) } }, { key: "rotateY", value: function(e) { l.default.mat4.identity(this.mRY), l.default.mat4.fromYRotation(this.mRY, e) } }, { key: "getPoints", value: function() { var e = this.vertices.slice();
                    mat4.identity(this.m), mat4.multiply(this.m, this.m, this.mT), mat4.multiply(this.m, this.m, this.mRY), mat4.multiply(this.m, this.m, this.mTAnchor); for (var t = 0; t < e.length; t++) vec3.transformMat4(e[t], e[t], this.m);
                    this.positionedEyes = []; for (var t = 0; t < this.eyes.length; t++) vec3.transformMat4(this.eyes[t], this.eyes[t], this.m); return e } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(10),
        l = i(u),
        c = function() {
            function e(t, n) {
                (0, o.default)(this, e), this._mesh = t, this._shader = n } return (0, s.default)(e, [{ key: "draw", value: function() { this._shader.bind(), l.default.draw(this.mesh) } }, { key: "mesh", get: function() { return this._mesh } }, { key: "shader", get: function() { return this._shader } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(35),
        _ = i(m),
        g = n(34),
        x = (i(g), n(37)),
        y = i(x),
        b = n(13),
        M = (i(b), n(12)),
        w = (i(M), []),
        E = function(e) {
            function t(e, n, i) {
                (0, s.default)(this, t); var r = (0, f.default)(this, (0, o.default)(t).call(this, e, n)); return r.pos = i, r.time = 255 * Math.random(), r.totalPts = [], r } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.rotation = 0 } }, { key: "rotateX", value: function(e) { this.shape.rotateX(e) } }, { key: "rotateY", value: function(e) { this.shape.rotateY(e) } }, { key: "reset", value: function(e) { var t = (arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2]);
                    this.sub = v.GL.isMobile ? 2 : 6, this.pos = e, this.shape.rotateY(t), this.points = [], this.spline = new y.default([]), this.tick = 0, this.finalP = this.getPoints(this.shape.getPoints()), this.line = new _.default(this.finalP) } }, { key: "updatePos", value: function(e) { var t = (arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2]);
                    arguments[3];
                    this.pos = e, this.shape.rotateY(t), this.finalP = this.getPoints(this.shape.getPoints()) } }, { key: "getPointsWithPos", value: function(e) { for (var t = [], n = 0, i = 0; i < this.finalP.length; i++) t[n++] = [this.finalP[i][0] + e[0], this.finalP[i][1] + e[1], this.finalP[i][2] + e[2]]; return t } }, { key: "getPoints", value: function(e) { this.spline.points = e, w.length = 0; for (var t = void 0, n = [], i = 0; i < e.length * this.sub; i++) t = i / (e.length * this.sub), n.push(this.spline.getPoint(t)); return this.totalPts = n, n } }, { key: "update", value: function(e) {} }, { key: "render", value: function() {} }]), t }(p.default.View);
    t.default = E, e.exports = t.default }, function(e, t, n) { e.exports = !n(32)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t, n) { var i = n(196),
        r = n(48);
    e.exports = function(e) { return i(r(e)) } }, function(e, t, n) { var i = n(20),
        r = n(9),
        o = n(85),
        a = n(26),
        s = "prototype",
        u = function(e, t, n) { var l, c, f, h = e & u.F,
                d = e & u.G,
                v = e & u.S,
                p = e & u.P,
                m = e & u.B,
                _ = e & u.W,
                g = d ? r : r[t] || (r[t] = {}),
                x = g[s],
                y = d ? i : v ? i[t] : (i[t] || {})[s];
            d && (n = t); for (l in n) c = !h && y && void 0 !== y[l], c && l in g || (f = c ? y[l] : n[l], g[l] = d && "function" != typeof y[l] ? n[l] : m && c ? o(f, i) : _ && y[l] == f ? function(e) { var t = function(t, n, i) { if (this instanceof e) { switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) } return new e(t, n, i) } return e.apply(this, arguments) }; return t[s] = e[s], t }(f) : p && "function" == typeof f ? o(Function.call, f) : f, p && ((g.virtual || (g.virtual = {}))[l] = f, e & u.R && x && !x[l] && a(x, l, f))) };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u }, function(e, t) { var n = {}.hasOwnProperty;
    e.exports = function(e, t) { return n.call(e, t) } }, function(e, t, n) { var i = n(31),
        r = n(87),
        o = n(60),
        a = Object.defineProperty;
    t.f = n(19) ? Object.defineProperty : function(e, t, n) { if (i(e), t = o(t, !0), i(n), r) try { return a(e, t, n) } catch (s) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(10),
        l = i(u),
        c = n(8),
        f = i(c),
        h = void 0,
        d = f.default.vec3,
        v = function(e, t, n) { return void 0 === t.cacheAttribLoc && (t.cacheAttribLoc = {}), void 0 === t.cacheAttribLoc[n] && (t.cacheAttribLoc[n] = e.getAttribLocation(t, n)), t.cacheAttribLoc[n] },
        p = function() {
            function e() { var t = arguments.length <= 0 || void 0 === arguments[0] ? 4 : arguments[0];
                (0, o.default)(this, e), h = l.default.gl, this.drawType = t, this._attributes = [], this._instancedAttributes = [], this._vertexSize = 0, this._vertices = [], this._texCoords = [], this._normals = [], this._faceNormals = [], this._tangents = [], this._indices = [], this._faces = [], this._extVAO = l.default.getExtension("OES_vertex_array_object") } return (0, s.default)(e, [{ key: "bindVAO", value: function(e) { this._extVAO && (this.shader = e, this._vao || (this._vao = this._extVAO.createVertexArrayOES()), this._extVAO.bindVertexArrayOES(this._vao)) } }, { key: "unbindVAO", value: function() { this._extVAO && this._extVAO.bindVertexArrayOES(null) } }, { key: "deleteVAO", value: function() { this._extVAO && this._extVAO.deleteVertexArrayOES(this._vao) } }, { key: "bufferVertex", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3]; if (this._vertexSize = e.length, this.bufferData(e, "aVertexPosition", 3, t, n), this._vertices = e, this._normals.length < this._vertices.length) { for (var r = [], o = 0; o < e.length; o++) r.push([1, 0, 0]);
                        this.bufferNormal(r, t) }
                    this._indices.length > 0 && this.drawType === l.default.TRIANGLES && i && this._generateFaces() } }, { key: "bufferTexCoord", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    this.bufferData(e, "aTextureCoord", 2, t), this._texCoords = e } }, { key: "bufferNormal", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    this.bufferData(e, "aNormal", 3, t), this._normals = e } }, { key: "bufferIndex", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                        i = t ? h.DYNAMIC_DRAW : h.STATIC_DRAW;
                    this._indices = e, this.iBuffer || (this.iBuffer = h.createBuffer()), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, this.iBuffer), h.bufferData(h.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), i), this.iBuffer.itemSize = 1, this.iBuffer.numItems = e.length, this._vertices.length > 0 && this.drawType === l.default.TRIANGLES && n && this._generateFaces() } }, { key: "bufferData", value: function t(e, n, i) { var r = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                        o = arguments.length <= 4 || void 0 === arguments[4] ? !1 : arguments[4],
                        a = -1,
                        s = 0,
                        u = r ? h.DYNAMIC_DRAW : h.STATIC_DRAW,
                        t = [],
                        l = void 0,
                        c = void 0; for (i || (i = e[0].length), s = 0; s < this._attributes.length; s++)
                        if (this._attributes[s].name === n) { this._attributes[s].data = e, a = s; break }
                    if (o) t = e;
                    else
                        for (s = 0; s < e.length; s++)
                            for (var f = 0; f < e[s].length; f++) t.push(e[s][f]); if (-1 === a) { if (l = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, l), c = new Float32Array(t), h.bufferData(h.ARRAY_BUFFER, c, u), this._attributes.push({ name: n, data: e, itemSize: i, buffer: l, dataArray: c }), this.vao) { h.enableVertexAttribArray(d); var d = v(h, this.shader.shaderProgram, n);
                            h.vertexAttribPointer(d, i, h.FLOAT, !1, 0, 0) } } else { l = this._attributes[a].buffer, h.bindBuffer(h.ARRAY_BUFFER, l), c = new Float32Array(t), h.bufferData(h.ARRAY_BUFFER, c, u); var p = this._attributes.find(function(e) { return e.name === n });
                        p.data = e, p.itemSize = i, p.dataArray = c } } }, { key: "bufferInstance", value: function(e, t) { if (l.default.checkExtension("ANGLE_instanced_arrays")) { var n = -1,
                            i = 0,
                            r = h.STATIC_DRAW,
                            o = [],
                            a = void 0,
                            s = void 0,
                            u = e.length,
                            c = e[0].length; for (i = 0; i < this._instancedAttributes.length; i++)
                            if (this._instancedAttributes[i].name === t) { this._instancedAttributes[i].data = e, n = i; break }
                        for (i = 0; i < e.length; i++)
                            for (var f = 0; f < e[i].length; f++) o.push(e[i][f]); if (-1 === n) a = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, a), s = new Float32Array(o), h.bufferData(h.ARRAY_BUFFER, s, r), this._instancedAttributes.push({ name: t, data: e, itemSize: c, buffer: a, dataArray: s, numInstance: u });
                        else { a = this._instancedAttributes[n].buffer, h.bindBuffer(h.ARRAY_BUFFER, a), s = new Float32Array(o), h.bufferData(h.ARRAY_BUFFER, s, r); var d = this._instancedAttributes.find(function(e) { return e.name === t });
                            d.data = e, d.itemSize = c, d.dataArray = s } } } }, { key: "computeNormals", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                    this._generateFaces(), e ? this._computeFaceNormals() : this._computeVertexNormals() } }, { key: "computeTangents", value: function() {} }, { key: "_computeFaceNormals", value: function() { for (var e = void 0, t = void 0, n = [], i = 0; i < this._indices.length; i += 3) { e = i / 3, t = this._faces[e]; var r = t.normal;
                        n[t.indices[0]] = r, n[t.indices[1]] = r, n[t.indices[2]] = r }
                    this.bufferNormal(n) } }, { key: "_computeVertexNormals", value: function() { for (var e = void 0, t = d.create(), n = [], i = 0; i < this._vertices.length; i++) { d.set(t, 0, 0, 0); for (var r = 0; r < this._faces.length; r++) e = this._faces[r], e.indices.indexOf(i) >= 0 && (t[0] += e.normal[0], t[1] += e.normal[1], t[2] += e.normal[2]);
                        d.normalize(t, t), n.push([t[0], t[1], t[2]]) }
                    this.bufferNormal(n) } }, { key: "_generateFaces", value: function() { for (var e = void 0, t = void 0, n = void 0, i = void 0, r = void 0, o = void 0, a = (d.create(), d.create(), d.create(), 0); a < this._indices.length; a += 3) { e = this._indices[a], t = this._indices[a + 1], n = this._indices[a + 2], i = this._vertices[e], r = this._vertices[t], o = this._vertices[n]; var s = { indices: [e, t, n], vertices: [i, r, o] };
                        this._faces.push(s) } } }, { key: "vao", get: function() { return this._vao } }, { key: "vertices", get: function() { return this._vertices } }, { key: "normals", get: function() { return this._normals } }, { key: "coords", get: function() { return this._texCoords } }, { key: "indices", get: function() { return this._indices } }, { key: "attributes", get: function() { return this._attributes } }, { key: "instancedAttributes", get: function() { return this._instancedAttributes } }, { key: "vertexSize", get: function() { return this._vertexSize } }, { key: "hasNormals", get: function() { return 0 !== this._normals.length } }, { key: "hasTangents", get: function() { return 0 !== this._tangents.length } }, { key: "faces", get: function() { return this._faces } }]), e }();
    t.default = p, e.exports = t.default }, function(e, t, n) { var i = n(24),
        r = n(39);
    e.exports = n(19) ? function(e, t, n) { return i.f(e, t, r(1, n)) } : function(e, t, n) { return e[t] = n, e } }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) { var i = n(57)("wks"),
        r = n(40),
        o = n(20).Symbol,
        a = "function" == typeof o,
        s = e.exports = function(e) { return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e)) };
    s.store = i }, function(e, t) {
    "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        r = 60,
        o = function() {
            function e() { n(this, e), this._delayTasks = [], this._nextTasks = [], this._deferTasks = [], this._highTasks = [], this._usurpTask = [], this._enterframeTasks = [], this._idTable = 0, this._loop() }
            return i(e, [{ key: "addEF", value: function(e, t) { t = t || []; var n = this._idTable; return this._enterframeTasks[n] = { func: e, params: t }, this._idTable++, n } }, {
                key: "removeEF",
                value: function(e) {
                    return void 0 !== this._enterframeTasks[e] && (this._enterframeTasks[e] = null), -1
                }
            }, { key: "delay", value: function(e, t, n) { var i = (new Date).getTime(),
                        r = { func: e, params: t, delay: n, time: i };
                    this._delayTasks.push(r) } }, { key: "defer", value: function(e, t) { var n = { func: e, params: t };
                    this._deferTasks.push(n) } }, { key: "next", value: function(e, t) { var n = { func: e, params: t };
                    this._nextTasks.push(n) } }, { key: "usurp", value: function(e, t) { var n = { func: e, params: t };
                    this._usurpTask.push(n) } }, { key: "_process", value: function() { var e = 0,
                        t = void 0,
                        n = void 0,
                        i = void 0; for (e = 0; e < this._enterframeTasks.length; e++) t = this._enterframeTasks[e], null !== t && void 0 !== t && t.func(t.params); for (; this._highTasks.length > 0;) t = this._highTasks.pop(), t.func(t.params); var o = (new Date).getTime(); for (e = 0; e < this._delayTasks.length; e++) t = this._delayTasks[e], o - t.time > t.delay && (t.func(t.params), this._delayTasks.splice(e, 1)); for (o = (new Date).getTime(), n = 1e3 / r; this._deferTasks.length > 0;) { if (t = this._deferTasks.shift(), i = (new Date).getTime(), !(n > i - o)) { this._deferTasks.unshift(t); break }
                        t.func(t.params) } for (o = (new Date).getTime(), n = 1e3 / r; this._usurpTask.length > 0;) t = this._usurpTask.shift(), i = (new Date).getTime(), n > i - o && t.func(t.params);
                    this._highTasks = this._highTasks.concat(this._nextTasks), this._nextTasks = [], this._usurpTask = [] } }, { key: "_loop", value: function() { var e = this;
                    this._process(), window.requestAnimationFrame(function() { return e._loop() }) } }]), e
        }(),
        a = new o;
    t.default = a
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(25),
        o = i(r),
        a = {};
    a.plane = function(e, t, n) { for (var i = arguments.length <= 3 || void 0 === arguments[3] ? "xy" : arguments[3], r = arguments.length <= 4 || void 0 === arguments[4] ? 4 : arguments[4], a = [], s = [], u = [], l = [], c = e / n, f = t / n, h = 1 / n, d = .5 * -e, v = .5 * -t, p = 0, m = 0; n > m; m++)
            for (var _ = 0; n > _; _++) { var g = c * m + d,
                    x = f * _ + v,
                    y = m / n,
                    b = _ / n; "xz" === i ? (a.push([g, 0, x + f]), a.push([g + c, 0, x + f]), a.push([g + c, 0, x]), a.push([g, 0, x]), s.push([y, 1 - (b + h)]), s.push([y + h, 1 - (b + h)]), s.push([y + h, 1 - b]), s.push([y, 1 - b]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0])) : "yz" === i ? (a.push([0, x, g]), a.push([0, x, g + c]), a.push([0, x + f, g + c]), a.push([0, x + f, g]), s.push([y, b]), s.push([y + h, b]), s.push([y + h, b + h]), s.push([y, b + h]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0])) : (a.push([g, x, 0]), a.push([g + c, x, 0]), a.push([g + c, x + f, 0]), a.push([g, x + f, 0]), s.push([y, b]), s.push([y + h, b]), s.push([y + h, b + h]), s.push([y, b + h]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1])), u.push(4 * p + 0), u.push(4 * p + 1), u.push(4 * p + 2), u.push(4 * p + 0), u.push(4 * p + 2), u.push(4 * p + 3), p++ }
        var M = new o.default(r); return M.bufferVertex(a), M.bufferTexCoord(s), M.bufferIndex(u), M.bufferNormal(l), M }, a.sphere = function(e, t) {
        function n(n, i) { var r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                o = n / t * Math.PI - .5 * Math.PI,
                a = i / t * Math.PI * 2,
                s = r ? 1 : e,
                u = [];
            u[1] = Math.sin(o) * s; var l = Math.cos(o) * s;
            u[0] = Math.cos(a) * l, u[2] = Math.sin(a) * l; var c = 1e4; return u[0] = Math.floor(u[0] * c) / c, u[1] = Math.floor(u[1] * c) / c, u[2] = Math.floor(u[2] * c) / c, u } for (var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2], r = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3], a = [], s = [], u = [], l = [], c = 1 / t, f = 0, h = 0; t > h; h++)
            for (var d = 0; t > d; d++) { a.push(n(h, d)), a.push(n(h + 1, d)), a.push(n(h + 1, d + 1)), a.push(n(h, d + 1)), l.push(n(h, d, !0)), l.push(n(h + 1, d, !0)), l.push(n(h + 1, d + 1, !0)), l.push(n(h, d + 1, !0)); var v = d / t,
                    p = h / t;
                s.push([1 - v, p]), s.push([1 - v, p + c]), s.push([1 - v - c, p + c]), s.push([1 - v - c, p]), u.push(4 * f + 0), u.push(4 * f + 1), u.push(4 * f + 2), u.push(4 * f + 0), u.push(4 * f + 2), u.push(4 * f + 3), f++ }
        i && u.reverse(); var m = new o.default(r); return m.bufferVertex(a), m.bufferTexCoord(s), m.bufferIndex(u), m.bufferNormal(l), m }, a.cube = function(e, t, n) { var i = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3];
        t = t || e, n = n || e; var r = e / 2,
            a = t / 2,
            s = n / 2,
            u = [],
            l = [],
            c = [],
            f = [],
            h = 0;
        u.push([-r, a, -s]), u.push([r, a, -s]), u.push([r, -a, -s]), u.push([-r, -a, -s]), f.push([0, 0, -1]), f.push([0, 0, -1]), f.push([0, 0, -1]), f.push([0, 0, -1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([r, a, -s]), u.push([r, a, s]), u.push([r, -a, s]), u.push([r, -a, -s]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([r, a, s]), u.push([-r, a, s]), u.push([-r, -a, s]), u.push([r, -a, s]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-r, a, s]), u.push([-r, a, -s]), u.push([-r, -a, -s]), u.push([-r, -a, s]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-r, a, s]), u.push([r, a, s]), u.push([r, a, -s]), u.push([-r, a, -s]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-r, -a, -s]), u.push([r, -a, -s]), u.push([r, -a, s]), u.push([-r, -a, s]), f.push([0, -1, 0]), f.push([0, -1, 0]), f.push([0, -1, 0]), f.push([0, -1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++; var d = new o.default(i); return d.bufferVertex(u), d.bufferTexCoord(l), d.bufferIndex(c), d.bufferNormal(f), d }, a.skybox = function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? 4 : arguments[1],
            n = [],
            i = [],
            r = [],
            a = [],
            s = 0;
        n.push([e, e, -e]), n.push([-e, e, -e]), n.push([-e, -e, -e]), n.push([e, -e, -e]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3), s++, n.push([e, -e, -e]), n.push([e, -e, e]), n.push([e, e, e]), n.push([e, e, -e]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3), s++, n.push([-e, e, e]), n.push([e, e, e]), n.push([e, -e, e]), n.push([-e, -e, e]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3), s++, n.push([-e, -e, e]), n.push([-e, -e, -e]), n.push([-e, e, -e]), n.push([-e, e, e]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3), s++, n.push([e, e, e]), n.push([-e, e, e]), n.push([-e, e, -e]), n.push([e, e, -e]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3), s++, n.push([e, -e, -e]), n.push([-e, -e, -e]), n.push([-e, -e, e]), n.push([e, -e, e]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), i.push([0, 0]), i.push([1, 0]), i.push([1, 1]), i.push([0, 1]), r.push(4 * s + 0), r.push(4 * s + 1), r.push(4 * s + 2), r.push(4 * s + 0), r.push(4 * s + 2), r.push(4 * s + 3); var u = new o.default(t); return u.bufferVertex(n), u.bufferTexCoord(i), u.bufferIndex(r), u.bufferNormal(a), u }, a.bigTriangle = function() { var e = [2, 1, 0],
            t = [
                [-1, -1],
                [-1, 4],
                [4, -1]
            ],
            n = new o.default; return n.bufferData(t, "aPosition", 2), n.bufferIndex(e), n }, t.default = a, e.exports = t.default }, function(e, t, n) { var i = n(27);
    e.exports = function(e) { if (!i(e)) throw TypeError(e + " is not an object!"); return e } }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (t) { return !0 } } }, function(e, t, n) { var i = n(94),
        r = n(49);
    e.exports = Object.keys || function(e) { return i(e, r) } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [499, 446, 0],
                    [491, 410, 0],
                    [499, 381, 0],
                    [513, 354, 0],
                    [517, 331, 0],
                    [515, 286, 0],
                    [545, 219, 0],
                    [563, 219, 0],
                    [577, 223, 0],
                    [595, 216, 0],
                    [611, 215, 0],
                    [623, 231, 0],
                    [625, 255, 0],
                    [587, 316, 0],
                    [569, 333, 0],
                    [562, 369, 0],
                    [560, 435, 0],
                    [554, 444, 0],
                    [545, 441, 0],
                    [548, 383, 0],
                    [551, 376, 0],
                    [552, 337, 0],
                    [572, 271, 0],
                    [603, 256, 0],
                    [630, 263, 0],
                    [644, 252, 0],
                    [633, 232, 0],
                    [609, 225, 0],
                    [631, 247, 0],
                    [652, 311, 0],
                    [666, 332, 0],
                    [673, 356, 0],
                    [699, 416, 0],
                    [701, 425, 0],
                    [692, 430, 0],
                    [688, 426, 0],
                    [661, 363, 0],
                    [623, 312, 0],
                    [603, 305, 0],
                    [605, 331, 0],
                    [614, 350, 0],
                    [613, 373, 0],
                    [599, 403, 0],
                    [589, 436, 0],
                    [581, 440, 0],
                    [575, 436, 0],
                    [597, 383, 0],
                    [597, 364, 0],
                    [589, 351, 0],
                    [564, 319, 0],
                    [563, 308, 0],
                    [572, 306, 0],
                    [541, 324, 0],
                    [512, 303, 0],
                    [507, 260, 0],
                    [518, 208, 0],
                    [519, 182, 0],
                    [515, 171, 0],
                    [494, 162, 0],
                    [486, 153, 0],
                    [491, 153, 0],
                    [503, 161, 0],
                    [512, 158, 0],
                    [504, 149, 0],
                    [474, 130, 0],
                    [448, 92, 0],
                    [447, 62, 0],
                    [452, 77, 0],
                    [458, 76, 0],
                    [474, 52, 0],
                    [471, 63, 0],
                    [483, 53, 0],
                    [484, 56, 0],
                    [469, 72, 0],
                    [462, 87, 0],
                    [472, 119, 0],
                    [511, 143, 0],
                    [501, 126, 0],
                    [491, 109, 0],
                    [495, 108, 0],
                    [509, 128, 0],
                    [528, 141, 0],
                    [529, 149, 0],
                    [522, 161, 0],
                    [521, 171, 0],
                    [532, 179, 0],
                    [544, 180, 0],
                    [550, 198, 0],
                    [539, 201, 0],
                    [536, 189, 0],
                    [545, 184, 0],
                    [553, 184, 0],
                    [556, 169, 0],
                    [555, 155, 0],
                    [568, 144, 0],
                    [584, 138, 0],
                    [574, 157, 0],
                    [550, 160, 0],
                    [546, 145, 0],
                    [554, 131, 0],
                    [563, 107, 0],
                    [570, 90, 0],
                    [573, 91, 0],
                    [567, 114, 0],
                    [556, 136, 0],
                    [558, 140, 0],
                    [565, 138, 0],
                    [576, 123, 0],
                    [581, 119, 0],
                    [579, 124, 0],
                    [580, 129, 0],
                    [599, 98, 0],
                    [600, 85, 0],
                    [581, 55, 0],
                    [589, 58, 0],
                    [598, 68, 0],
                    [600, 57, 0],
                    [601, 58, 0],
                    [605, 69, 0],
                    [606, 61, 0],
                    [606, 61, 0],
                    [610, 92, 0],
                    [589, 125, 0],
                    [589, 129, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, -3, 0], [
                    [530, 168, 0],
                    [549, 168, 0]
                ], [0, 0, -.4])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = void 0,
        _ = [],
        g = [],
        x = function(e) {
            function t(e, n) { var i = arguments.length <= 2 || void 0 === arguments[2] ? v.GL.TRIANGLES : arguments[2];
                (0, s.default)(this, t), m = v.GL; var r = (0, f.default)(this, (0, o.default)(t).call(this, i));
                r.compareV3 = function(e, t) { var n = 6 * e,
                        i = 6 * t; return this.positions[n] === this.positions[i] && this.positions[n + 1] === this.positions[i + 1] && this.positions[n + 2] === this.positions[i + 2] }, r.copyV3 = function(e, t) { t || (t = _); var n = 6 * e;
                    t[0] = this.positions[n], t[1] = this.positions[n + 1], t[2] = this.positions[n + 2] }, r.widthCallback = n; var a = [
                    [0, 0, 0],
                    [.125, .3125, 0],
                    [.0625, .25, 0],
                    [0, .25, 0],
                    [-0.125, .275, 0],
                    [-0.0875, .375, 0]
                ]; return r.positions = [], r.directions = [], r.indicesArray = [], r.counters = [], r.width = [], r.uvs = [], r.previous = [], r.next = [], r.vert = e || a, r.line(!0), r } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "line", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0],
                        t = this.vert;
                    this.positions.length = 2 * t.length, this.counters.length = 2 * t.length; var n = 0,
                        i = 0;
                    this.previous.length = this.positions.length, this.next.length = this.positions.length; for (var r = 0; r < t.length; r++) { if (e) { var o = r / t.length;
                            this.counters[i++] = [o], this.counters[i++] = [o] }
                        this.positions[n++] = t[r][0], this.positions[n++] = t[r][1], this.positions[n++] = t[r][2], this.positions[n++] = t[r][0], this.positions[n++] = t[r][1], this.positions[n++] = t[r][2] }
                    this.process(e) } }, { key: "process", value: function(e) { var t = this.positions.length / 6,
                        n = 0,
                        i = 0;
                    this.compareV3(0, t - 1) ? this.copyV3(t - 2) : this.copyV3(0), this.previous[n++] = _[0], this.previous[n++] = _[1], this.previous[n++] = _[2], this.previous[n++] = _[0], this.previous[n++] = _[1], this.previous[n++] = _[2]; for (var r = 0; t > r; r++) this.copyV3(r, _), r > 0 && (this.next[i++] = _[0], this.next[i++] = _[1], this.next[i++] = _[2], this.next[i++] = _[0], this.next[i++] = _[1], this.next[i++] = _[2], this.previous[n++] = g[0], this.previous[n++] = g[1], this.previous[n++] = g[2], this.previous[n++] = g[0], this.previous[n++] = g[1], this.previous[n++] = g[2]), g[0] = _[0], g[1] = _[1], g[2] = _[2]; if (this.compareV3(t - 1, 0) ? this.copyV3(1, _) : this.copyV3(t - 1, _), this.next[i++] = _[0], this.next[i++] = _[1], this.next[i++] = _[2], this.next[i++] = _[0], this.next[i++] = _[1], this.next[i++] = _[2], n = 0, this.bufferVertex(this.positions, !1, !0), this.bufferData(this.next, "aNext", 3, !1, !0), this.bufferData(this.previous, "aPrevious", 3, !1, !0), e) { n = 0, this.uvs = []; for (var o = void 0, a = 0; t > a; a++) o = this.widthCallback ? this.widthCallback(a / (t - 1)) : .1, this.width[n++] = o, this.width[n++] = o, this.uvs.push([a / (t - 1), 0]), this.uvs.push([a / (t - 1), 1]);
                        n = 0, this.indicesArray = []; for (var a = 0; t - 1 > a; a++) { var s = 2 * a;
                            this.indicesArray[n++] = s, this.indicesArray[n++] = s + 1, this.indicesArray[n++] = s + 2, this.indicesArray[n++] = s + 2, this.indicesArray[n++] = s + 1, this.indicesArray[n++] = s + 3 }
                        n = 0, this.directions = []; for (var r = 0; r < this.positions.length; r++) r % 2 === 0 ? this.directions[n++] = [1] : this.directions[n++] = [-1];
                        this.bufferIndex(this.indicesArray, !1), this.bufferData(this.width, "width", 1, !1, !0), this.bufferData(this.directions, "direction", 1, !1), this.bufferTexCoord(this.uvs, !1), this.bufferData(this.counters, "aCounters", 1, !1) } } }, { key: "render", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                    this.vert = e || this.vert, this.line(t) } }]), t }(p.default.Mesh);
    t.default = x, e.exports = t.default }, function(e, t, n) { var i;
    i = function(e, t, n) { var i = function() { this.updating = !1, this.iterationCount = 0, this.tweens = [] };
        i.prototype.killTweensOf = function(e) { for (var t = 0; t < this.tweens.length; t++) { var n = this.tweens[t];
                n.obj === e && n.obj.id === e.id && (n = null, this.tweens.splice(t, 1), t--) } }, i.prototype.returnVariable = function(e, t, n, i) { var r = { "delete": !1, currentIteration: 0, isArray: !1, obj: e, vars: n, delay: 60 * n.delay || 0, isDelayed: !!(n.delay && n.delay > 0), duration: 60 * t, ease: n.ease || this.easeLinear }; if (e instanceof Array) { r.isArray = !0; var o = []; for (var a in n)
                    if ("delay" !== a && "duration" !== a && !this.isFunction(n[a])) { for (var s = { "var": a, toValue: n[a] }, u = [], l = 0; l < e.length; l++) u.push(e[l]);
                        s.value = u, o.push(s) } } else { var o = []; for (var a in n)
                    if ("delay" !== a && "duration" !== a && !this.isFunction(n[a]) && "forceTween" !== a) { for (var l = 0; l < this.tweens.length; l++) { var c = this.tweens[l]; if (c.obj === e)
                                for (var f = 0; f < c.props.length; f++) { var h = c.props[f];
                                    h.var !== a || 0 !== r.delay && !r.vars.forceTween || (c.delete = !0, this.tweens.splice(l, 1), l--) } }
                        o.push({ "var": a, value: e[a], toValue: n[a] }) } } return r.props = o, r }, i.prototype.to = function(e, t, n, i) { var r = { "delete": !1, currentIteration: 0, isArray: !1, obj: e, vars: n, delay: 60 * n.delay || 0, isDelayed: !!(n.delay && n.delay > 0), duration: 60 * t, ease: n.ease || this.easeLinear }; if (e instanceof Array) { r.isArray = !0; var o = []; for (var a in n)
                    if ("delay" !== a && "duration" !== a && !this.isFunction(n[a])) { for (var s = { "var": a, toValue: n[a] }, u = [], l = 0; l < e.length; l++) u.push(e[l]);
                        s.value = u, o.push(s) } } else { var o = []; for (var a in n)
                    if ("delay" !== a && "duration" !== a && !this.isFunction(n[a]) && "forceTween" !== a) { for (var l = 0; l < this.tweens.length; l++) { var c = this.tweens[l]; if (c.obj === e)
                                for (var f = 0; f < c.props.length; f++) { var h = c.props[f];
                                    h.var !== a || 0 !== r.delay && !r.vars.forceTween || (c.delete = !0, this.tweens.splice(l, 1), l--) } }
                        o.push({ "var": a, value: e[a], toValue: n[a] }) } }
            r.props = o, this.tweens.push(r), this.updating || (this.updating = !0) }, i.prototype.isFunction = function(e) { return !!(e && e.constructor && e.call && e.apply) }, i.prototype.updateArray = function(e) { var t = e; if (t.delay > 0) t.delay--;
            else { for (var n = 0; n < t.obj.length; n++) { t.obj[n];
                    t.obj[n] = t.ease(t.currentIteration, t.props[0].value[n], t.props[0].toValue[n] - t.props[0].value[n], t.duration) }
                t.currentIteration++, t.currentIteration > t.duration && (t.vars.onComplete && t.vars.onComplete(), t.delete = !0) } }, i.prototype.update = function() { if (this.updating) { for (var e = 0; e < this.tweens.length; e++) { var t = this.tweens[e]; if (t.isArray) this.updateArray(t);
                    else if (t.isDelayed) { if (t.delay > 0) t.delay -= 1;
                        else if (t.delay <= 0) { t.isDelayed = !1; for (var n = 0; n < t.props.length; n++) { var i = t.props[n];
                                i.value = t.obj[i.var] } } } else { for (var n = 0; n < t.props.length; n++) { var i = t.props[n];
                            t.obj[i.var] = t.ease(t.currentIteration, i.value, i.toValue - i.value, t.duration) }
                        t.vars.onUpdate && t.vars.onUpdate.apply(this, t.vars.onUpdateParams), t.currentIteration += 1, t.currentIteration > t.duration && (t.vars.onComplete && t.vars.onComplete.apply(this, t.vars.onCompleteParams), t.delete = !0) } } for (var e = 0; e < this.tweens.length; e++) { var t = this.tweens[e];
                    t.delete && (t = null, this.tweens.splice(e, 1), e--) }
                0 === this.tweens.length && (this.updating = !1) } }, i.prototype.easeLinear = function(e, t, n, i) { return e /= i, n * e + t }, i.prototype.easeInSine = function(e, t, n, i) { return -n * Math.cos(e / i * (Math.PI / 2)) + n + t }, i.prototype.easeOutSine = function(e, t, n, i) { return n * Math.sin(e / i * (Math.PI / 2)) + t }, i.prototype.easeInExpo = function(e, t, n, i) { return n * Math.pow(2, 10 * (e / i - 1)) + t }, i.prototype.elasticOutSoft = function(e, t, n, i) { var r = 1.0158,
                o = 0,
                a = n; if (0 == e) return t; if (1 == (e /= i)) return t + n; if (o || (o = .3 * i), a < Math.abs(n)) { a = n; var r = o / 4 } else var r = o / (2 * Math.PI) * Math.asin(n / a); return a * Math.pow(2, -10 * e) * Math.sin((e * i - r) * (2 * Math.PI) / o) + n + t }, i.prototype.easeOutBack = function(e, t, n, i) { var r = 1.70158; return n * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t }, i.prototype.easeOutBackSoft = function(e, t, n, i) { var r = 1.30158; return n * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t }, i.prototype.elasticOut = function(e, t, n, i) { var r = 1.70158,
                o = 0,
                a = n; if (0 == e) return t; if (1 == (e /= i)) return t + n; if (o || (o = .3 * i), a < Math.abs(n)) { a = n; var r = o / 4 } else var r = o / (2 * Math.PI) * Math.asin(n / a); return a * Math.pow(2, -10 * e) * Math.sin((e * i - r) * (2 * Math.PI) / o) + n + t }, i.prototype.easeInCubic = function(e, t, n, i) { return e /= i, n * e * e * e + t }, i.prototype.easeOutCubic = function(e, t, n, i) { return e /= i, e--, n * (e * e * e + 1) + t }, i.prototype.easeInOutSine = function(e, t, n, i) { return -n / 2 * (Math.cos(Math.PI * e / i) - 1) + t }, i.prototype.easeInBack = function(e, t, n, i, r, o) { return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n }, i.prototype.easeInCirc = function(e, t, n, i, r) { return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n }, i.prototype.easeInOutExpo = function(e, t, n, i) { return e /= i / 2, 1 > e ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (-Math.pow(2, -10 * e) + 2) + t) }, i.prototype.easeInOutQuint = function(e, t, n, i) { return e /= i / 2, 1 > e ? n / 2 * e * e * e * e * e + t : (e -= 2, n / 2 * (e * e * e * e * e + 2) + t) }, i.prototype.easeInOutCirc = function(e, t, n, i) { return e /= i / 2, 1 > e ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : (e -= 2, n / 2 * (Math.sqrt(1 - e * e) + 1) + t) }, i.prototype.easeOutCirc = function(e, t, n, i) { return n * Math.sqrt(1 - (e = e / i - 1) * e) + t }, i.instance = new i, n.exports = i }.call(t, n, t, e), !(void 0 !== i && (e.exports = i)) }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = function() {
            function e(t) {
                (0, o.default)(this, e), this.c = [], this.point = 0, this.intPoint = 0, this.weight = 0, this.pa = 0, this.pb = 0, this.pc = 0, this.pd = 0, this.w2 = 0, this.w3 = 0, this.w4 = 0, this.v3 = [], this.points = t } return (0, s.default)(e, [{ key: "getPoint", value: function(e, t) { if (this.point = (this.points.length - 1) * e, this.intPoint = Math.floor(this.point), this.weight = this.point - this.intPoint, this.c[0] = 0 === this.intPoint ? this.intPoint : this.intPoint - 1, this.c[1] = this.intPoint, this.c[2] = this.intPoint > this.points.length - 2 ? this.intPoint : this.intPoint + 1, this.c[3] = this.intPoint > this.points.length - 3 ? this.intPoint : this.intPoint + 2, this.pa = this.points[this.c[0]], this.pb = this.points[this.c[1]], this.pc = this.points[this.c[2]], this.pd = this.points[this.c[3]], this.w2 = this.weight * this.weight, this.w3 = this.weight * this.w2, this.v3[0] = this.interpolate(this.pa[0], this.pb[0], this.pc[0], this.pd[0], this.weight, this.w2, this.w3), this.v3[1] = this.interpolate(this.pa[1], this.pb[1], this.pc[1], this.pd[1], this.weight, this.w2, this.w3), this.v3[2] = this.interpolate(this.pa[2], this.pb[2], this.pc[2], this.pd[2], this.weight, this.w2, this.w3), !t) return [this.v3[0], this.v3[1], this.v3[2]];
                    t.length;
                    t[t.length] = [this.v3[0], this.v3[1], this.v3[2]] } }, { key: "interpolate", value: function(e, t, n, i, r, o, a) { var s = .5 * (n - e),
                        u = .5 * (i - t); return (2 * (t - n) + s + u) * a + (-3 * (t - n) - 2 * s - u) * o + s * r + t } }]), e }();
    t.default = u, e.exports = t.default }, function(e, t, n) { var i = n(22),
        r = n(9),
        o = n(32);
    e.exports = function(e, t) { var n = (r.Object || {})[e] || Object[e],
            a = {};
        a[e] = t(n), i(i.S + i.F * o(function() { n(1) }), "Object", a) } }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) { var n = 0,
        i = Math.random();
    e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36)) } }, function(e, t) { e.exports = "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}" }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = {},
        i = function(e) { return e.length ? "vec" + e.length : "float" };
    n.addUniforms = function(e, t) { var n = ""; for (var r in t) { var o = t[r],
                a = i(o);
            n += "uniform " + a + " " + r + ";\n" } return e = e.replace("{{UNIFORMS}}", n) }, n.bindUniforms = function(e, t) { for (var n in t) { var r = t[n],
                o = i(r);
            e.uniform(n, o, r) } }, t.default = n, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = function() {
            function e() {
                (0, o.default)(this, e), this._matrix = l.default.mat4.create(), this._quat = l.default.quat.create(), this._orientation = l.default.mat4.create(), this._projection = l.default.mat4.create(), this.position = l.default.vec3.create() } return (0, s.default)(e, [{ key: "lookAt", value: function(e, t) { var n = arguments.length <= 2 || void 0 === arguments[2] ? [0, 1, 0] : arguments[2];
                    this._eye = vec3.clone(e), this._center = vec3.clone(t), l.default.vec3.copy(this.position, e), l.default.mat4.identity(this._matrix), l.default.mat4.lookAt(this._matrix, e, t, n) } }, { key: "setFromOrientation", value: function(e, t, n, i) { l.default.quat.set(this._quat, e, t, n, i), l.default.mat4.fromQuat(this._orientation, this._quat), l.default.mat4.translate(this._matrix, this._orientation, this.positionOffset) } }, { key: "setProjection", value: function(e) { this._projection = l.default.mat4.clone(e) } }, { key: "setView", value: function(e) { this._matrix = l.default.mat4.clone(e) } }, { key: "setFromViewProj", value: function(e, t) { this.setView(e), this.setProjection(t) } }, { key: "matrix", get: function() { return this._matrix } }, { key: "viewMatrix", get: function() { return this._matrix } }, { key: "projection", get: function() { return this._projection } }, { key: "projectionMatrix", get: function() { return this._projection } }, { key: "eye", get: function() { return this._eye } }, { key: "center", get: function() { return this._center } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(43),
        p = i(v),
        m = n(77),
        _ = i(m),
        g = n(8),
        x = i(g),
        y = x.default.mat4,
        b = x.default.vec3,
        M = y.create(),
        w = b.create(),
        E = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).apply(this, arguments)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "setPerspective", value: function(e, t, n, i) { this._fov = e, this._near = n, this._far = i, this._aspectRatio = t, x.default.mat4.perspective(this._projection, e, t, n, i) } }, { key: "setAspectRatio", value: function(e) { this._aspectRatio = e, x.default.mat4.perspective(this.projection, this._fov, e, this._near, this._far) } }, { key: "generateRay", value: function(e, t) { var n = this.projectionMatrix,
                        i = this.viewMatrix; return y.multiply(M, n, i), y.invert(M, M), b.transformMat4(w, e, M), b.sub(w, w, this.position), b.normalize(w, w), t ? (t.origin = this.position, t.direction = w) : t = new _.default(this.position, w), t } }]), t }(p.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = function() {
            function e() { var t = this,
                    n = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                (0, o.default)(this, e), this._req = new XMLHttpRequest, this._req.addEventListener("load", function(e) { return t._onLoaded(e) }), this._req.addEventListener("progress", function(e) { return t._onProgress(e) }), n && (this._req.responseType = "arraybuffer") } return (0, s.default)(e, [{ key: "load", value: function(e, t) { this._callback = t, this._req.open("GET", e), this._req.send() } }, { key: "_onLoaded", value: function() { this._callback(this._req.response) } }, { key: "_onProgress", value: function() {} }]), e }();
    t.default = u, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(29),
        l = i(u),
        c = function() {
            function e(t) { var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
                (0, o.default)(this, e), this.easing = i, this._value = t, this._targetValue = t, this._efIndex = l.default.addEF(function() { return n._update() }) } return (0, s.default)(e, [{ key: "_update", value: function() { var e = 1e-4;
                    this._checkLimit(), this._value += (this._targetValue - this._value) * this.easing, Math.abs(this._targetValue - this._value) < e && (this._value = this._targetValue) } }, { key: "setTo", value: function(e) { this._targetValue = this._value = e } }, { key: "add", value: function(e) { this._targetValue += e } }, { key: "limit", value: function(e, t) { return e > t ? void this.limit(t, e) : (this._min = e, this._max = t, void this._checkLimit()) } }, { key: "_checkLimit", value: function() { void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max) } }, { key: "destroy", value: function() { l.default.removeEF(this._efIndex) } }, { key: "value", set: function(e) { this._targetValue = e }, get: function() { return this._value } }, { key: "targetValue", get: function() { return this._targetValue } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    t.__esModule = !0; var r = n(83),
        o = i(r),
        a = n(82),
        s = i(a),
        u = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof s.default && "symbol" === u(o.default) ? function(e) { return "undefined" == typeof e ? "undefined" : u(e) } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : u(e) } }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t) { e.exports = {} }, function(e, t) { e.exports = !0 }, function(e, t, n) { var i = n(31),
        r = n(90),
        o = n(49),
        a = n(56)("IE_PROTO"),
        s = function() {},
        u = "prototype",
        l = function() { var e, t = n(86)("iframe"),
                i = o.length,
                r = ">"; for (t.style.display = "none", n(195).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script" + r), e.close(), l = e.F; i--;) delete l[u][o[i]]; return l() };
    e.exports = Object.create || function(e, t) { var n; return null !== e ? (s[u] = i(e), n = new s, s[u] = null, n[a] = e) : n = l(), void 0 === t ? n : r(n, t) } }, function(e, t, n) { var i = n(54),
        r = n(39),
        o = n(21),
        a = n(60),
        s = n(23),
        u = n(87),
        l = Object.getOwnPropertyDescriptor;
    t.f = n(19) ? l : function(e, t) { if (e = o(e), t = a(t, !0), u) try { return l(e, t) } catch (n) {}
        return s(e, t) ? r(!i.f.call(e, t), e[t]) : void 0 } }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) { var i = n(24).f,
        r = n(23),
        o = n(28)("toStringTag");
    e.exports = function(e, t, n) { e && !r(e = n ? e : e.prototype, o) && i(e, o, { configurable: !0, value: t }) } }, function(e, t, n) { var i = n(57)("keys"),
        r = n(40);
    e.exports = function(e) { return i[e] || (i[e] = r(e)) } }, function(e, t, n) { var i = n(20),
        r = "__core-js_shared__",
        o = i[r] || (i[r] = {});
    e.exports = function(e) { return o[e] || (o[e] = {}) } }, function(e, t) { var n = Math.ceil,
        i = Math.floor;
    e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e) } }, function(e, t, n) { var i = n(48);
    e.exports = function(e) { return Object(i(e)) } }, function(e, t, n) { var i = n(27);
    e.exports = function(e, t) { if (!i(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") } }, function(e, t, n) { var i = n(20),
        r = n(9),
        o = n(51),
        a = n(62),
        s = n(24).f;
    e.exports = function(e) { var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) }) } }, function(e, t, n) { t.f = n(28) }, function(e, t) { e.exports = "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}" }, function(e, t) { e.exports = "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}" }, function(e, t, n) { "use strict";

    function i() { r.call(this), this.setMaxListeners(20) } var r = n(224).EventEmitter;
    i.prototype = Object.create(r.prototype), i.prototype.constructor = i, i.prototype.off = function(e, t) { return t ? this.removeListener(e, t) : e ? this.removeAllListeners(e) : this.removeAllListeners() }, e.exports = i }, function(e, t) { "use strict";
    e.exports = { mbs: 0, secs: 0, update: function(e, t, n, i) { var r, o = e.getAllResponseHeaders(); if (o) { var a = o.match(/content-length: (\d+)/i);
                a && a.length && (r = a[1]) } if (r) { r = parseInt(r, 10); var s = r / 1024 / 1024,
                    u = (Date.now() - t) / 1e3;
                this.secs += u, this.mbs += s, i && this.log(n, s, u) } }, log: function(e, t, n) { if (e) { "File loaded: " + e.substr(e.lastIndexOf("/") + 1) + " size:" + t.toFixed(2) + "mb time:" + n.toFixed(2) + "s speed:" + (t / n).toFixed(2) + "mbps" } "Total loaded: " + this.mbs.toFixed(2) + "mb time:" + this.secs.toFixed(2) + "s speed:" + this.getMbps().toFixed(2) + "mbps" }, getMbps: function() { return this.mbs / this.secs } } }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = [{ x: -.029629629629629672, z: -.7388888888888889, tx: .028403525681627517, ty: 2.5, tz: .7169993381948501, rx: .3785571092543754, ry: -.055954737566457524 }, { x: -.031481481481481444, z: -.3129629629629629, tx: .010225824484212387, ty: 2.5, tz: .3075914821529213, rx: .2647819399864141, ry: -1.3232703102188987 }, { x: -.15555555555555545, z: -.16666666666666674, tx: .21950788939616195, ty: 1.5346703966465267, tz: .28439735401110355, rx: .38570473950291695, ry: 2.643978438953961 }, { x: -.1592592592592592, z: -.04814814814814805, tx: .19050965660335262, ty: 1.4031272197911102, tz: .06180395005645245, rx: .38570473950291695, ry: 1.9827703140918178 }, { x: -.3277777777777777, z: .1425925925925926, tx: .3685321856568131, ty: 1.7100612991204154, tz: -.20904194544385235, rx: .13775169267961318, ry: .5501527102238408 }, { x: .007407407407407418, z: .22777777777777775, tx: -.027347389113028697, ty: 1.4469749454095824, tz: -.2980843684393114, rx: .31682889316311036, ry: -.2763574458538387 }, { x: .30925925925925923, z: .27037037037037037, tx: -.36509761993038325, ty: 2.543168085871387, tz: -.27497199780048265, rx: .31682889316311036, ry: -1.488572341434435 }, { x: .19259259259259254, z: -.03703703703703698, tx: -.19259259259259254, ty: 1.4031272197911102, tz: .07844877789892735, rx: .31682889316311036, ry: -3.141592653589793 }, { x: .13703703703703707, z: -.14259259259259252, tx: -.2500533558634393, ty: 1.4469749454095824, tz: .17025775951529312, rx: .42703024730680095, ry: -1.9844784350810423 }];
    t.default = n, e.exports = t.default }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = {
        travel1: function(e) { e.targetPoint[0] += .1 * (e.position[0] - e.targetPoint[0]) * (vrPresenting ? .25 : 1), e.targetPoint[1] += .1 * (e.position[1] - e.targetPoint[1]) * (vrPresenting ? .25 : 1), e.targetPoint[2] += .1 * (e.position[2] - e.targetPoint[2]) * (vrPresenting ? .25 : 1) },
        travel2: function(e) { e.targetPoint[0] += .1 * (e.position[0] - e.targetPoint[0]) * (vrPresenting ? .25 : 1), e.targetPoint[1] += .1 * (e.position[1] - e.targetPoint[1]) * (vrPresenting ? .25 : 1), e.targetPoint[2] += .1 * (e.position[2] - e.targetPoint[2]) * (vrPresenting ? .25 : 1), e.targetPoint[0] += .08 * Math.cos(e.time / 10 + Math.PI / 4), e.targetPoint[1] += Math.abs(.04 * Math.sin(e.time / 10 + Math.PI / 4)) },
        travel3: function(e) {
            e.targetPoint[0] += .1 * (e.position[0] - e.targetPoint[0]) * (vrPresenting ? .25 : 1), e.targetPoint[1] += .1 * (e.position[1] - e.targetPoint[1]) * (vrPresenting ? .25 : 1), e.targetPoint[2] += .1 * (e.position[2] - e.targetPoint[2]) * (vrPresenting ? .25 : 1), e.targetPoint[1] += .1 * Math.sin(e.time / 10)
        },
        travelPair2: function(e) { e.targetPoint[0] = e.position[0], e.targetPoint[1] = e.position[1], e.targetPoint[2] = e.position[2]; var t = 10 * Math.sin(e.time / 10);
            10 * Math.cos(e.time / 10);
            e.targetPoint[0] -= .1 * t * (vrPresenting ? .25 : 1) },
        travelPair1: function(e) { e.targetPoint[0] = e.position[0], e.targetPoint[1] = e.position[1], e.targetPoint[2] = e.position[2]; var t = 10 * Math.sin(e.time / 10);
            10 * Math.sin(e.time / 20);
            e.targetPoint[0] += .1 * t * (vrPresenting ? .25 : 1) },
        basic: function(e) { e.targetPoint[0] = e.position[0] + Math.cos(e.time / 20 + e.startAngle) * e.radius, e.targetPoint[2] = e.position[2] + Math.sin(e.time / 20 + e.startAngle) * e.radius },
        circle: function(e) { e.targetPoint[0] = e.position[0] + Math.cos(e.time / 20 + e.startAngle) * e.radius, e.targetPoint[2] = e.position[2] + Math.sin(e.time / 20 + e.startAngle) * e.radius, e.xoff += .01 * (vrPresenting ? .25 : 1), e.yoff += .01 * (vrPresenting ? .25 : 1); var t = e.perlin.perlin2(e.xoff, e.yoff);
            e.targetPoint[1] += t / 20, e.targetPoint[1] += .01 * Math.sin(Math.tan(1.2 * Math.cos(e.time / 80 + e.startAngle))) },
        snake: function(e) { e.targetPoint[0] = e.position[0] + Math.cos(e.time / 40 + e.startAngle) * e.radius, e.targetPoint[2] = e.position[2] + Math.sin(e.time / 50 + e.startAngle) * e.radius * 1.2, e.targetPoint[1] = e.position[1] - Math.abs(4 * Math.sin(e.time / 100)) - 2, e.targetPoint[0] += .5 * Math.cos(Math.pow(8, Math.sin(e.time / 40 + e.startAngle))), e.targetPoint[1] += 1 * Math.sin(Math.pow(8, Math.sin(e.time / 20 + e.startAngle))) },
        end1: function(e) { e.targetPoint[0] = e.position[0] + Math.cos(e.time / 20 + e.startAngle) * e.radius, e.targetPoint[2] = e.position[2] + Math.sin(e.time / 20 + e.startAngle) * e.radius, e.targetPoint[1] = -1.5 - Math.abs(1 * Math.sin(e.time / 100)) },
        disappear1: function(e, t) { var n = function(e, t, n) { var i = e * Math.cos(t) * Math.sin(n),
                        r = e * Math.sin(t) * Math.sin(n),
                        o = e * Math.cos(n); return [i, r, o] },
                i = Math.random() * Math.PI * 2,
                r = Math.random() * Math.PI * 2,
                o = .2 * Math.random() + .1,
                a = n(o, i, r); return a },
        disappear2: function(e, t) { var n = function(e, t, n) { var i = e * Math.cos(t) * Math.sin(n),
                        r = e * Math.sin(t) * Math.sin(n),
                        o = e * Math.cos(n); return [i, r, o] },
                i = Math.cos(e.time / 10) * Math.PI * 2 + 2 * Math.PI * t,
                r = Math.cos(e.time / 20) * Math.PI / 2 + Math.PI + 2 * Math.PI * t,
                o = .1 * Math.random() + .01; return n(o, i, r) }
    };
    t.default = n, e.exports = t.default
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = 0,
        l = function() {
            function e() {
                (0, o.default)(this, e), this._vrDisplay, this._frameData, this.id = "ID" + u++, this._gamePads = [] } return (0, s.default)(e, [{ key: "init", value: function(e) { var t = this; return navigator.getVRDisplays ? void navigator.getVRDisplays().then(function(n) { if (n.length > 0) { var i = n[0];
                            t._vrDisplay = i, t._frameData = new VRFrameData, i.capabilities.canPresent, e(i) } else e(null) }) : void e(null) } }, { key: "present", value: function(e, t) { this._vrDisplay && this._vrDisplay.capabilities.canPresent && this._vrDisplay.requestPresent([{ source: e }]).then(function() { t && t() }, function() {}) } }, { key: "submitFrame", value: function() { this._vrDisplay.isPresenting && this._vrDisplay.submitFrame() } }, { key: "getFrameData", value: function() { return this._vrDisplay ? (this._vrDisplay.getFrameData(this._frameData), this._checkGamepads(), this._frameData) : void 0 } }, { key: "_checkGamepads", value: function() { var e = navigator.getGamepads(),
                        t = 0;
                    this._gamePads = []; for (var n = 0; n < e.length; n++) { var i = e[n]; if (i && i.pose) { if (!i.pose.position) continue; var r = { position: i.pose.position, orientation: i.pose.orientation, buttons: i.buttons };
                            this._gamePads.push(r), t++ } } } }, { key: "gamePads", get: function() { return this._gamePads } }, { key: "vrDisplay", get: function() { return this._vrDisplay } }]), e }(),
        c = void 0;
    void 0 === c && (c = new l), t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(37),
        l = i(u),
        c = function() {
            function e(t) {
                (0, o.default)(this, e), this.spline = new l.default([]), this.lines = [
                    [
                        [586, 446, 0],
                        [587, 413, 0],
                        [582, 395, 0],
                        [576, 390, 0],
                        [567, 397, 0],
                        [556, 410, 0],
                        [547, 423, 0],
                        [536, 425, 0],
                        [527, 413, 0],
                        [525, 397, 0],
                        [525, 379, 0],
                        [526, 370, 0],
                        [516, 378, 0],
                        [505, 382, 0],
                        [497, 380, 0],
                        [498, 371, 0],
                        [501, 373, 0],
                        [498, 365, 0],
                        [493, 363, 0],
                        [487, 364, 0],
                        [486, 368, 0],
                        [491, 374, 0],
                        [482, 370, 0],
                        [481, 362, 0],
                        [485, 361, 0],
                        [483, 353, 0],
                        [489, 349, 0],
                        [494, 349, 0],
                        [498, 353, 0],
                        [502, 351, 0],
                        [512, 363, 0],
                        [518, 363, 0],
                        [538, 354, 0],
                        [550, 354, 0],
                        [559, 360, 0],
                        [566, 360, 0],
                        [567, 365, 0],
                        [558, 372, 0],
                        [559, 358, 0],
                        [568, 358, 0],
                        [568, 367, 0],
                        [573, 368, 0],
                        [560, 375, 0],
                        [568, 367, 0],
                        [574, 370, 0],
                        [553, 389, 0],
                        [547, 390, 0],
                        [547, 385, 0],
                        [553, 377, 0],
                        [553, 388, 0],
                        [548, 388, 0],
                        [552, 378, 0],
                        [550, 368, 0],
                        [548, 373, 0],
                        [548, 360, 0],
                        [555, 353, 0],
                        [565, 358, 0],
                        [572, 358, 0],
                        [580, 325, 0],
                        [573, 293, 0],
                        [546, 236, 0]
                    ],
                    [
                        [525, 512, 0],
                        [510, 489, 0],
                        [502, 460, 0],
                        [504, 434, 0],
                        [512, 407, 0],
                        [528, 383, 0],
                        [526, 368, 0],
                        [516, 349, 0],
                        [507, 329, 0],
                        [501, 303, 0],
                        [499, 280, 0],
                        [499, 265, 0],
                        [503, 251, 0],
                        [510, 241, 0],
                        [519, 235, 0],
                        [531, 233, 0],
                        [543, 235, 0],
                        [554, 245, 0],
                        [559, 256, 0],
                        [559, 270, 0],
                        [554, 281, 0],
                        [543, 289, 0],
                        [533, 294, 0],
                        [520, 295, 0],
                        [507, 291, 0],
                        [498, 283, 0],
                        [490, 264, 0],
                        [487, 240, 0],
                        [479, 219, 0],
                        [465, 205, 0],
                        [413, 176, 0],
                        [364, 157, 0],
                        [336, 149, 0],
                        [330, 151, 0],
                        [335, 157, 0],
                        [338, 160, 0],
                        [324, 153, 0],
                        [318, 157, 0],
                        [331, 173, 0],
                        [326, 175, 0],
                        [324, 188, 0],
                        [337, 229, 0],
                        [356, 265, 0],
                        [384, 301, 0],
                        [417, 334, 0],
                        [448, 354, 0],
                        [480, 368, 0],
                        [516, 380, 0],
                        [579, 388, 0],
                        [610, 381, 0],
                        [634, 358, 0],
                        [641, 330, 0],
                        [639, 299, 0],
                        [629, 266, 0],
                        [612, 232, 0],
                        [593, 207, 0],
                        [570, 184, 0],
                        [546, 166, 0],
                        [527, 153, 0],
                        [514, 144, 0],
                        [511, 144, 0],
                        [513, 155, 0],
                        [525, 177, 0],
                        [516, 173, 0],
                        [514, 177, 0],
                        [525, 196, 0],
                        [523, 196, 0],
                        [528, 213, 0],
                        [547, 243, 0],
                        [569, 279, 0],
                        [589, 304, 0],
                        [608, 324, 0],
                        [628, 335, 0],
                        [640, 341, 0]
                    ],
                    [
                        [501, 208, 0],
                        [503, 201, 0],
                        [510, 199, 0],
                        [518, 210, 0],
                        [516, 219, 0],
                        [505, 234, 0],
                        [498, 247, 0],
                        [500, 253, 0],
                        [509, 262, 0],
                        [514, 270, 0],
                        [515, 276, 0],
                        [510, 275, 0],
                        [508, 269, 0],
                        [509, 261, 0],
                        [504, 257, 0],
                        [501, 261, 0],
                        [499, 272, 0],
                        [503, 285, 0],
                        [509, 290, 0],
                        [518, 294, 0],
                        [525, 288, 0],
                        [526, 285, 0],
                        [524, 278, 0],
                        [518, 278, 0],
                        [515, 282, 0],
                        [518, 291, 0],
                        [525, 285, 0],
                        [536, 280, 0],
                        [542, 273, 0],
                        [542, 264, 0],
                        [536, 258, 0],
                        [530, 261, 0],
                        [527, 267, 0],
                        [529, 274, 0],
                        [535, 276, 0],
                        [542, 271, 0],
                        [542, 263, 0],
                        [536, 257, 0],
                        [531, 261, 0],
                        [528, 265, 0],
                        [525, 275, 0],
                        [525, 259, 0],
                        [534, 251, 0],
                        [547, 246, 0],
                        [559, 231, 0],
                        [569, 226, 0],
                        [580, 231, 0],
                        [579, 244, 0]
                    ]
                ], this.eyes = [
                    [534, 270, 0],
                    [509, 271, 0]
                ], this.offsetEyes = [0, 0, -.2], this.remapVertices() } return (0, s.default)(e, [{ key: "remapVertices", value: function() { for (var e = 1e4, t = 0, n = 1e4, i = 0, r = 0; r < this.lines.length; r++)
                        for (var o = this.lines[r], a = 0; a < o.length; a++) { var s = o[a];
                            s[0] < e && (e = s[0]), s[0] > t && (t = s[0]), s[1] < n && (n = s[1]), s[1] > i && (i = s[1]) }
                    this.wX = t - e, this.wY = i - n; var u = Math.max(this.wX, this.wY);
                    this.tick = 0; for (var l = null, c = null, f = null, h = null, d = null, v = null, r = 0; r < this.eyes.length; r++) this.eyes[r][0] /= u / 3, this.eyes[r][1] /= u / 3, this.eyes[r][2] = this.offsetEyes[2]; for (var r = 0; r < this.lines.length; r++)
                        for (var p = this.lines[r], a = 0; a < p.length; a++) this.tick++, p[a][0] /= u / 3, p[a][1] /= u / 3, p[a][2] = .2 * Math.cos(this.tick / 6), (p[a][0] < l || null === l) && (l = p[a][0]), (p[a][0] > c || null === c) && (c = p[a][0]), (p[a][1] < f || null === f) && (f = p[a][1]), (p[a][1] > h || null === h) && (h = p[a][1]), (p[a][2] < d || null === d) && (d = p[a][2]), (p[a][2] > v || null === v) && (v = p[a][2]);
                    this.centerX = (c + l) / 2, this.centerY = (h + f) / 2, this.centerZ = (v + d) / 2; var m = [-.25, -2.4, 0];
                    this.translationAnchor = [-this.centerX, -this.centerY, -this.centerZ], this.m = mat4.create(), this.mTAnchor = mat4.create(), this.mT = mat4.create(), mat4.identity(this.mTAnchor, this.mTAnchor), mat4.translate(this.mTAnchor, this.mTAnchor, this.translationAnchor), mat4.translate(this.mT, this.mT, m), mat4.identity(this.m), mat4.multiply(this.m, this.m, this.mT), mat4.multiply(this.m, this.m, this.mTAnchor); for (var r = 0; r < this.lines.length; r++)
                        for (var _ = this.lines[r], a = 0; a < _.length; a++) { var g = [];
                            g[0] = _[a][0], g[1] = _[a][1], g[2] = _[a][2], vec3.transformMat4(_[a], _[a], this.m) }
                    for (var r = 0; r < this.eyes.length; r++) vec3.transformMat4(this.eyes[r], this.eyes[r], this.m);
                    this.finalLines = []; for (var r = 0; r < this.lines.length; r++) { var x = this.lines[r];
                        this.finalLines.push(this.getPoints(x)) } } }, { key: "getPoints", value: function(e) { this.spline.points = e, this.sub = 3; for (var t = void 0, n = [], i = 0; i < e.length * this.sub; i++) t = i / (e.length * this.sub), n.push(this.spline.getPoint(t)); return n } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(6),
        l = i(u),
        c = function() {
            function e(t) { var n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                    r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                (0, o.default)(this, e), this.shader = new l.default.GLShader(l.default.ShaderLibs.bigTriangleVert, t), this._width = n, this._height = i, this._uniforms = {}, this._hasOwnFbo = this._width > 0 && this._width > 0, this._textures = [], this._hasOwnFbo && (this._fbo = new u.FrameBuffer(this._width, this.height, r)) } return (0, s.default)(e, [{ key: "uniform", value: function(e, t, n) { this._uniforms[e] ? this._uniforms[e].value = n : this._uniforms[e] = { type: t, value: n } } }, { key: "bindTexture", value: function(e, t) { var n = { name: e, texture: t };
                    this._textures.push(n) } }, { key: "render", value: function(e) { this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), e.bind(0); for (var t in this._uniforms) { var n = this._uniforms[t];
                        this.shader.uniform(t, n.type, n.value) } for (var i = 0; i < this._textures.length; i++) { var r = this._textures[i];
                        this.shader.uniform(r.name, "uniform1i", i + 1), r.texture.bind(i + 1) } } }, { key: "width", get: function() { return this._width } }, { key: "height", get: function() { return this._height } }, { key: "fbo", get: function() { return this._fbo } }, { key: "hasFbo", get: function() { return this._hasOwnFbo } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { var i;
    i = function(e, t, n) { var i = function() { this.delayedCalls = [] };
        i.prototype.clear = function() { this.delayedCalls = [], this.updating = !1 }, i.prototype.add = function(e, t, n) { var i = { func: e, args: n, tick: 0, delay: t, "delete": !1 }; return this.delayedCalls.push(i), this.updating || (this.updating = !0), this.delayedCalls.length - 1 }, i.prototype.getRemainingTime = function(e) { var t = this.delayedCalls[e]; return t && t.delay ? 60 * t.delay - t.tick : 0 }, i.prototype.update = function() { if (this.updating) { for (var e = 0; e < this.delayedCalls.length; e++) { var t = this.delayedCalls[e];
                    t.tick++, t.tick > 60 * t.delay && (t.func(t.args), t.delete = !0) } for (var e = 0; e < this.delayedCalls.length; e++) { var t = this.delayedCalls[e];
                    t.delete && (this.delayedCalls.splice(e, 1), e--) }
                0 === this.delayedCalls.length && (this.updating = !1) } }, n.exports = i }.call(t, n, t, e), !(void 0 !== i && (e.exports = i)) }, function(e, t, n) { "use strict";! function(e) {
        function t(e) {
            function t(e, t, n) { this.x = e, this.y = t, this.z = n }
            t.prototype.dot2 = function(e, t) { return this.x * e + this.y * t }, t.prototype.dot3 = function(e, t, n) { return this.x * e + this.y * t + this.z * n }, this.grad3 = [new t(1, 1, 0), new t(-1, 1, 0), new t(1, -1, 0), new t(-1, -1, 0), new t(1, 0, 1), new t(-1, 0, 1), new t(1, 0, -1), new t(-1, 0, -1), new t(0, 1, 1), new t(0, -1, 1), new t(0, 1, -1), new t(0, -1, -1)], this.p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], this.perm = new Array(512), this.gradP = new Array(512), this.seed(e || 0) }

        function n(e) { return e * e * e * (e * (6 * e - 15) + 10) }

        function i(e, t, n) { return (1 - n) * e + n * t }
        t.prototype.seed = function(e) { e > 0 && 1 > e && (e *= 65536), e = Math.floor(e), 256 > e && (e |= e << 8); for (var t = this.p, n = 0; 256 > n; n++) { var i;
                i = 1 & n ? t[n] ^ 255 & e : t[n] ^ e >> 8 & 255; var r = this.perm,
                    o = this.gradP;
                r[n] = r[n + 256] = i, o[n] = o[n + 256] = this.grad3[i % 12] } }; var r = .5 * (Math.sqrt(3) - 1),
            o = (3 - Math.sqrt(3)) / 6,
            a = 1 / 3,
            s = 1 / 6;
        t.prototype.simplex2 = function(e, t) { var n, i, a, s, u, l = (e + t) * r,
                c = Math.floor(e + l),
                f = Math.floor(t + l),
                h = (c + f) * o,
                d = e - c + h,
                v = t - f + h;
            d > v ? (s = 1, u = 0) : (s = 0, u = 1); var p = d - s + o,
                m = v - u + o,
                _ = d - 1 + 2 * o,
                g = v - 1 + 2 * o;
            c &= 255, f &= 255; var x = this.perm,
                y = this.gradP,
                b = y[c + x[f]],
                M = y[c + s + x[f + u]],
                w = y[c + 1 + x[f + 1]],
                E = .5 - d * d - v * v;
            0 > E ? n = 0 : (E *= E, n = E * E * b.dot2(d, v)); var S = .5 - p * p - m * m;
            0 > S ? i = 0 : (S *= S, i = S * S * M.dot2(p, m)); var T = .5 - _ * _ - g * g; return 0 > T ? a = 0 : (T *= T, a = T * T * w.dot2(_, g)), 70 * (n + i + a) }, t.prototype.simplex3 = function(e, t, n) { var i, r, o, u, l, c, f, h, d, v, p = (e + t + n) * a,
                m = Math.floor(e + p),
                _ = Math.floor(t + p),
                g = Math.floor(n + p),
                x = (m + _ + g) * s,
                y = e - m + x,
                b = t - _ + x,
                M = n - g + x;
            y >= b ? b >= M ? (l = 1, c = 0, f = 0, h = 1, d = 1, v = 0) : y >= M ? (l = 1, c = 0, f = 0, h = 1, d = 0, v = 1) : (l = 0, c = 0, f = 1, h = 1, d = 0, v = 1) : M > b ? (l = 0, c = 0, f = 1, h = 0, d = 1, v = 1) : M > y ? (l = 0, c = 1, f = 0, h = 0, d = 1, v = 1) : (l = 0, c = 1, f = 0, h = 1, d = 1, v = 0); var w = y - l + s,
                E = b - c + s,
                S = M - f + s,
                T = y - h + 2 * s,
                P = b - d + 2 * s,
                A = M - v + 2 * s,
                C = y - 1 + 3 * s,
                I = b - 1 + 3 * s,
                D = M - 1 + 3 * s;
            m &= 255, _ &= 255, g &= 255; var F = this.perm,
                k = this.gradP,
                L = k[m + F[_ + F[g]]],
                R = k[m + l + F[_ + c + F[g + f]]],
                O = k[m + h + F[_ + d + F[g + v]]],
                N = k[m + 1 + F[_ + 1 + F[g + 1]]],
                V = .5 - y * y - b * b - M * M;
            0 > V ? i = 0 : (V *= V, i = V * V * L.dot3(y, b, M)); var z = .5 - w * w - E * E - S * S;
            0 > z ? r = 0 : (z *= z, r = z * z * R.dot3(w, E, S)); var B = .5 - T * T - P * P - A * A;
            0 > B ? o = 0 : (B *= B, o = B * B * O.dot3(T, P, A)); var G = .5 - C * C - I * I - D * D; return 0 > G ? u = 0 : (G *= G, u = G * G * N.dot3(C, I, D)), 32 * (i + r + o + u) }, t.prototype.perlin2 = function(e, t) { var r = Math.floor(e),
                o = Math.floor(t);
            e -= r, t -= o, r = 255 & r, o = 255 & o; var a = this.perm,
                s = this.gradP,
                u = s[r + a[o]].dot2(e, t),
                l = s[r + a[o + 1]].dot2(e, t - 1),
                c = s[r + 1 + a[o]].dot2(e - 1, t),
                f = s[r + 1 + a[o + 1]].dot2(e - 1, t - 1),
                h = n(e); return i(i(u, c, h), i(l, f, h), n(t)) }, t.prototype.perlin3 = function(e, t, r) { var o = Math.floor(e),
                a = Math.floor(t),
                s = Math.floor(r);
            e -= o, t -= a, r -= s, o = 255 & o, a = 255 & a, s = 255 & s; var u = this.perm,
                l = this.gradP,
                c = l[o + u[a + u[s]]].dot3(e, t, r),
                f = l[o + u[a + u[s + 1]]].dot3(e, t, r - 1),
                h = l[o + u[a + 1 + u[s]]].dot3(e, t - 1, r),
                d = l[o + u[a + 1 + u[s + 1]]].dot3(e, t - 1, r - 1),
                v = l[o + 1 + u[a + u[s]]].dot3(e - 1, t, r),
                p = l[o + 1 + u[a + u[s + 1]]].dot3(e - 1, t, r - 1),
                m = l[o + 1 + u[a + 1 + u[s]]].dot3(e - 1, t - 1, r),
                _ = l[o + 1 + u[a + 1 + u[s + 1]]].dot3(e - 1, t - 1, r - 1),
                g = n(e),
                x = n(t),
                y = n(r); return i(i(i(c, v, g), i(f, p, g), y), i(i(h, m, g), i(d, _, g), y), x) }, e.Noise = t }(e.exports) }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(10),
        l = i(u),
        c = n(233),
        f = i(c),
        h = void 0,
        d = function() {
            function e(t) { var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]; if ((0, o.default)(this, e), h = l.default.gl, i) return void(this.texture = t);
                this.texture = h.createTexture(), this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR_MIPMAP_LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture); var r = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z],
                    a = t.length > 6,
                    s = 0,
                    u = 0; if (a && (s = t.length / 6), a)
                    for (var c = 0; 6 > c; c++)
                        for (var f = 0; s > f; f++) h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), u = c * s + f, t[u].shape ? h.texImage2D(r[c], f, h.RGBA, t[u].shape[0], t[u].shape[1], 0, h.RGBA, h.FLOAT, t[u].data) : h.texImage2D(r[c], f, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, t[u]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
                else { for (var d = 0; 6 > d; d++) h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), t[d].shape ? h.texImage2D(r[d], 0, h.RGBA, t[d].shape[0], t[d].shape[1], 0, h.RGBA, h.FLOAT, t[d].data) : h.texImage2D(r[d], 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, t[d]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
                    h.generateMipmap(h.TEXTURE_CUBE_MAP) }
                h.bindTexture(h.TEXTURE_CUBE_MAP, null) } return (0, s.default)(e, [{ key: "bind", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    l.default.shader && (h.activeTexture(h.TEXTURE0 + e), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.uniform1i(l.default.shader.uniformTextures[e], e), this._bindIndex = e) } }, { key: "unbind", value: function() { h.bindTexture(h.TEXTURE_CUBE_MAP, null) } }]), e }();
    d.parseDDS = function(e) { var t = (0, f.default)(e),
            n = t.images.map(function(t) { var n = new Float32Array(e.slice(t.offset, t.offset + t.length)); return { data: n, shape: t.shape } }); return new d(n) }, t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }

    function r(e) { return 0 !== e && !(e & e - 1) }

    function o(e) { var t = e.width || e.videoWidth,
            n = e.height || e.videoHeight; return t && n ? r(t) && r(n) : !1 }
    Object.defineProperty(t, "__esModule", { value: !0 }); var a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(10),
        f = i(c),
        h = void 0,
        d = function() {
            function e(t) { var n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]; if ((0, s.default)(this, e), h = f.default.gl, n) this._texture = t;
                else { this._mSource = t, this._texture = h.createTexture(), this._isVideo = "VIDEO" === t.tagName, this.magFilter = i.magFilter || h.LINEAR, this.minFilter = i.minFilter || h.LINEAR_MIPMAP_NEAREST, this.wrapS = i.wrapS || h.MIRRORED_REPEAT, this.wrapT = i.wrapT || h.MIRRORED_REPEAT; var r = t.width || t.videoWidth;
                    r ? o(t) || (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)) : (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), t.exposure ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, t.shape[0], t.shape[1], 0, h.RGBA, h.FLOAT, t.data) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, t), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, this.wrapT); var a = f.default.getExtension("EXT_texture_filter_anisotropic"); if (a) { var u = h.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        h.texParameterf(h.TEXTURE_2D, a.TEXTURE_MAX_ANISOTROPY_EXT, u) }
                    this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D), h.bindTexture(h.TEXTURE_2D, null) } } return (0, l.default)(e, [{ key: "minFilter", value: function(e) { return e !== h.LINEAR && e !== h.NEAREST && e !== h.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = e, this) } }, { key: "magFilter", value: function(e) { return e !== h.LINEAR && e !== h.NEAREST && e !== h.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = e, this) } }, { key: "wrapS", value: function(e) { return e !== h.CLAMP_TO_EDGE && e !== h.REPEAT && e !== h.MIRRORED_REPEAT ? this : (this.wrapS = e, this) } }, { key: "wrapT", value: function(e) { return e !== h.CLAMP_TO_EDGE && e !== h.REPEAT && e !== h.MIRRORED_REPEAT ? this : (this.wrapT = e, this) } }, { key: "updateTexture", value: function(e) { e && (this._mSource = e), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, this._mSource), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D), h.bindTexture(h.TEXTURE_2D, null) } }, { key: "bind", value: function(e) { void 0 === e && (e = 0), f.default.shader && (h.activeTexture(h.TEXTURE0 + e), h.bindTexture(h.TEXTURE_2D, this._texture), this._bindIndex = e) } }, { key: "texture", get: function() { return this._texture } }]), e }(),
        v = void 0,
        p = void 0,
        m = void 0;
    d.whiteTexture = function() { if (void 0 === v) { var e = document.createElement("canvas");
            e.width = e.height = 4; var t = e.getContext("2d");
            t.fillStyle = "#fff", t.fillRect(0, 0, 4, 4), v = new d(e) } return v }, d.greyTexture = function() { if (void 0 === p) { var e = document.createElement("canvas");
            e.width = e.height = 4; var t = e.getContext("2d");
            t.fillStyle = "rgb(127, 127, 127)", t.fillRect(0, 0, 4, 4), p = new d(e) } return p }, d.blackTexture = function() { if (void 0 === m) { var e = document.createElement("canvas");
            e.width = e.height = 4; var t = e.getContext("2d");
            t.fillStyle = "rgb(127, 127, 127)", t.fillRect(0, 0, 4, 4), m = new d(e) } return m }, t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(43),
        p = i(v),
        m = n(8),
        _ = i(m),
        g = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this)),
                    n = _.default.vec3.clone([0, 0, 5]),
                    i = _.default.vec3.create(),
                    r = _.default.vec3.clone([0, -1, 0]); return e.lookAt(n, i, r), e.ortho(1, -1, 1, -1), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "setBoundary", value: function(e, t, n, i) { this.ortho(e, t, n, i) } }, { key: "ortho", value: function(e, t, n, i) { this.left = e, this.right = t, this.top = n, this.bottom = i, _.default.mat4.ortho(this._projection, e, t, n, i, 0, 1e4) } }]), t }(p.default);
    t.default = g, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = (l.default.mat4, l.default.vec3),
        f = c.create(),
        h = c.create(),
        d = c.create(),
        v = c.create(),
        p = c.create(),
        m = c.create(),
        _ = c.create(),
        g = c.create(),
        x = function() {
            function e(t, n) {
                (0, o.default)(this, e), this.origin = c.clone(t), this.direction = c.clone(n) } return (0, s.default)(e, [{ key: "at", value: function(e) { return c.copy(v, this.direction), c.scale(v, v, e), c.add(v, v, this.origin), v } }, { key: "lookAt", value: function(e) { c.sub(this.direction, e, this.origin), c.normalize(this.origin, this.origin) } }, { key: "closestPointToPoint", value: function(e) { var t = c.create();
                    c.sub(e, this.origin); var n = c.dot(t, this.direction); return 0 > n ? c.clone(this.origin) : (c.copy(t, this.direction), c.scale(t, t, n), c.add(t, t, this.origin), t) } }, { key: "distanceToPoint", value: function(e) { return Math.sqrt(this.distanceSqToPoint(e)) } }, { key: "distanceSqToPoint", value: function(e) { var t = c.create();
                    c.sub(t, e, this.origin); var n = c.dot(t, this.direction); return 0 > n ? c.squaredDistance(this.origin, e) : (c.copy(t, this.direction), c.scale(t, t, n), c.add(t, t, this.origin), c.squaredDistance(t, e)) } }, { key: "intersectsSphere", value: function(e, t) { return this.distanceToPoint(e) <= t } }, { key: "intersectSphere", value: function(e, t) { var n = c.create();
                    c.sub(n, e, this.origin); var i = c.dot(n, this.direction),
                        r = c.dot(n, n) - i * i,
                        o = t * t; if (r > o) return null; var a = Math.sqrt(o - r),
                        s = i - a,
                        u = i + a; return 0 > s && 0 > u ? null : 0 > s ? this.at(u) : this.at(s) } }, { key: "distanceToPlane", value: function(e, t) { c.dot(t, this.direction) } }, { key: "intersectTriangle", value: function(e, t, n) { var i = arguments.length <= 3 || void 0 === arguments[3] ? !0 : arguments[3];
                    c.copy(f, e), c.copy(h, t), c.copy(d, n), c.sub(p, h, f), c.sub(m, d, f), c.cross(_, p, m); var r = c.dot(this.direction, _),
                        o = void 0; if (r > 0) { if (i) return null;
                        o = 1 } else { if (!(0 > r)) return null;
                        o = -1, r = -r }
                    c.sub(g, this.origin, f), c.cross(m, g, m); var a = o * c.dot(this.direction, m); if (0 > a) return null;
                    c.cross(p, p, g); var s = o * c.dot(this.direction, p); if (0 > s) return null; if (a + s > r) return null; var u = -o * c.dot(g, _); return 0 > u ? null : this.at(u / r) } }]), e }();
    t.default = x, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(46),
        l = i(u),
        c = n(29),
        f = i(c),
        h = n(8),
        d = i(h),
        v = function(e, t) { var n = t || {}; return e.touches ? (n.x = e.touches[0].pageX, n.y = e.touches[0].pageY) : (n.x = e.clientX, n.y = e.clientY), n },
        p = function() {
            function e(t) { var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? 500 : arguments[2];
                (0, o.default)(this, e), this._target = t, this._listenerTarget = i, this._mouse = {}, this._preMouse = {}, this.center = d.default.vec3.create(), this._up = d.default.vec3.fromValues(0, 1, 0), this.radius = new l.default(r), this.position = d.default.vec3.fromValues(0, 0, this.radius.value), this.positionOffset = d.default.vec3.create(), this.rx = new l.default(0), this.rx.limit(-Math.PI / 2, Math.PI / 2), this.ry = new l.default(0), this._preRX = 0, this._preRY = 0, this._isLockZoom = !1, this._isLockRotation = !1, this._isInvert = !1, this.sensitivity = 1, this._listenerTarget.addEventListener("mousewheel", function(e) { return n._onWheel(e) }), this._listenerTarget.addEventListener("DOMMouseScroll", function(e) { return n._onWheel(e) }), this._listenerTarget.addEventListener("mousedown", function(e) { return n._onDown(e) }), this._listenerTarget.addEventListener("touchstart", function(e) { return n._onDown(e) }), this._listenerTarget.addEventListener("mousemove", function(e) { return n._onMove(e) }), this._listenerTarget.addEventListener("touchmove", function(e) { return n._onMove(e) }), window.addEventListener("touchend", function() { return n._onUp() }), window.addEventListener("mouseup", function() { return n._onUp() }), f.default.addEF(function() { return n._loop() }) } return (0, s.default)(e, [{ key: "lock", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isLockZoom = e, this._isLockRotation = e } }, { key: "lockZoom", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isLockZoom = e } }, { key: "lockRotation", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isLockRotation = e } }, { key: "inverseControl", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isInvert = e } }, { key: "_onDown", value: function(e) { this._isLockRotation || (this._isMouseDown = !0, v(e, this._mouse), v(e, this._preMouse), this._preRX = this.rx.targetValue, this._preRY = this.ry.targetValue) } }, { key: "_onMove", value: function(e) { if (!this._isLockRotation && (v(e, this._mouse), e.touches && e.preventDefault(), this._isMouseDown)) { var t = -(this._mouse.x - this._preMouse.x);
                        this._isInvert && (t *= -1), this.ry.value = this._preRY - .01 * t * this.sensitivity; var n = -(this._mouse.y - this._preMouse.y);
                        this._isInvert && (n *= -1), this.rx.value = this._preRX - .01 * n * this.sensitivity } } }, { key: "_onUp", value: function() { this._isLockRotation || (this._isMouseDown = !1) } }, { key: "_onWheel", value: function(e) { if (!this._isLockZoom) { var t = e.wheelDelta,
                            n = e.detail,
                            i = 0;
                        i = n ? t ? t / n / 40 * n > 0 ? 1 : -1 : -n / 3 : t / 120, this.radius.add(2 * -i) } } }, { key: "_loop", value: function() { this._updatePosition(), this._target && this._updateCamera() } }, { key: "_updatePosition", value: function() { this.position[1] = Math.sin(this.rx.value) * this.radius.value; var e = Math.cos(this.rx.value) * this.radius.value;
                    this.position[0] = Math.cos(this.ry.value + .5 * Math.PI) * e, this.position[2] = Math.sin(this.ry.value + .5 * Math.PI) * e, d.default.vec3.add(this.position, this.position, this.positionOffset) } }, { key: "_updateCamera", value: function() { this._target.lookAt(this.position, this.center, this._up) } }]), e }();
    t.default = p, e.exports = t.default }, function(e, t, n) {
    function i(e) { return e && e.__esModule ? e : { "default": e } }
    var r, o, a = n(81),
        s = i(a),
        u = n(83),
        l = i(u),
        c = n(82),
        f = i(c),
        h = n(80),
        d = i(h),
        v = n(177),
        p = i(v),
        m = n(175),
        _ = i(m),
        g = n(179),
        x = i(g),
        y = n(47),
        b = i(y);
    ! function(i, a) { "object" == (0, b.default)(t) && "undefined" != typeof e ? e.exports = a() : (r = a, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))) }(void 0, function() {
        "use strict";

        function e(e) { if ("string" != typeof e) return ""; if ("data:" === e.slice(0, 5)) { var t = e.match(/data:audio\/(ogg|mp3|opus|wav|m4a)/i); if (t && t.length > 1) return t[1].toLowerCase() }
            e = e.split("?")[0], e = e.slice(e.lastIndexOf("/") + 1); var n = e.split("."); return 1 === n.length || "" === n[0] && 2 === n.length ? "" : n.pop().toLowerCase() }

        function t(t) { var n = void 0; if (Array.isArray(t))
                for (var i = 0; i < t.length; i++) { n = t[i]; var r = e(n); if (le.indexOf(r) > -1) break } else "object" === ("undefined" == typeof t ? "undefined" : oe(t)) && (0, x.default)(t).some(function(i) { n = t[i]; var r = e(n); return le.indexOf(r) > -1 }); return n || t }

        function n(e) { return !!(e && window.AudioBuffer && e instanceof window.AudioBuffer) }

        function i(e) { return !!(e && window.ArrayBuffer && e instanceof window.ArrayBuffer) }

        function r(e) { return !!(e && window.HTMLMediaElement && e instanceof window.HTMLMediaElement) }

        function o(e) { return !!(e && "function" == typeof e.getAudioTracks && e.getAudioTracks().length && window.MediaStreamTrack && e.getAudioTracks()[0] instanceof window.MediaStreamTrack) }

        function a(e) { return !(!e || "string" != typeof e || "sine" !== e && "square" !== e && "sawtooth" !== e && "triangle" !== e) }

        function u(e) { return !!(e && "object" === ("undefined" == typeof e ? "undefined" : oe(e)) && e.bufferSize && e.channels && e.callback) }

        function c(e) { return !(!e || "string" != typeof e || !(e.indexOf(".") > -1 || "data:" === e.slice(0, 5))) }

        function h(e) { if (!e || r(e)) return !1; var t = e.src || e.url || e.data || e; return c(t) || i(t) || Array.isArray(t) && c(t[0]) }

        function v(e, t) {
            function n(e) { var t = 12 * (Math.log(e / 440) / Math.log(2)); return Math.round(t) + 69 }

            function i(e) { return 440 * Math.pow(2, (e - 69) / 12) }

            function r(e, t) { return Math.floor(1200 * Math.log(e / i(t)) / Math.log(2)) }

            function o(e, t) { return !e || s.fftSize !== u || !!(t && e instanceof Uint8Array) || !t && e instanceof Float32Array }

            function a(e, t) { return e ? new Float32Array(t) : new Uint8Array(t) }
            t = t || {};
            var s = e.createAnalyser(),
                u = t.fftSize || 512,
                l = !!t.float,
                c = !!t.float,
                f = void 0,
                h = void 0;
            s.fftSize = u, s.smoothingTimeConstant = t.smoothing || t.smoothingTimeConstant || s.smoothingTimeConstant, s.minDecibels = t.minDecibels || s.minDecibels, s.maxDecibels = t.maxDecibels || s.maxDecibels;
            var d = new Blob(["onmessage=function(e){var data=e.data;var f=new Float32Array(data.b);for(var i=0;i<f.length;i++){data.sum+=f[i]}data.sum/=f.length;postMessage(Math.max(1.0-(data.sum/data.numSamples*-1.0),0))};"]),
                v = new Blob(["onmessage=function(e){var data=e.data;var sampleRate=data.sampleRate;var buf=new Float32Array(data.b);var SIZE=buf.length;var MAX_SAMPLES=Math.floor(SIZE/2);var best_offset=-1;var best_correlation=0;var rms=0;var foundGoodCorrelation=false;var correlations=new Array(MAX_SAMPLES);for(var i=0;i<SIZE;i++){var val=buf[i];rms+=val*val}rms=Math.sqrt(rms/SIZE);if (rms<0.01){postMessage(-1)}else{var lastCorrelation=1;for(var offset=0;offset<MAX_SAMPLES;offset++){var correlation=0;for(var i=0;i<MAX_SAMPLES;i++){correlation+=Math.abs((buf[i])-(buf[i+offset]))}correlation=1-(correlation/MAX_SAMPLES);correlations[offset]=correlation;if ((correlation>0.9)&&(correlation>lastCorrelation)){foundGoodCorrelation=true;if (correlation>best_correlation){best_correlation=correlation;best_offset=offset}}else if (foundGoodCorrelation){var shift=(correlations[best_offset+1]-correlations[best_offset-1])/correlations[best_offset];postMessage(sampleRate/(best_offset+(8*shift)))}lastCorrelation=correlation}if (best_correlation>0.01){postMessage(sampleRate/best_offset)}else{postMessage(-1)}}};"]),
                p = URL.createObjectURL(d),
                m = new Worker(p),
                g = URL.createObjectURL(v),
                x = new Worker(g),
                y = null,
                b = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
                M = null,
                w = { hertz: null, note: null, noteIndex: null, detuneCents: null, detune: null };
            return m.onmessage = function(e) { y && y(e.data) }, x.onmessage = function(e) { if (M) { var t = e.data; if (-1 !== t) { var i = n(t),
                            o = r(t, i);
                        w.hertz = t, w.noteIndex = i % 12, w.note = b[i % 12], w.detuneCents = o, 0 === o ? w.detune = "" : 0 > o ? w.detune = "flat" : w.detune = "sharp" }
                    M(w) } }, s.getWaveform = function(e) { return arguments.length || (e = c), o(f, e) && (u = s.fftSize, c = e, f = a(e, u)), e && this.getFloatTimeDomainData ? this.getFloatTimeDomainData(f) : this.getByteTimeDomainData(f), f }, s.getPitch = function(t) { M = M || t; var n = new Float32Array(s.fftSize);
                n.set(s.getWaveform(!0)), x.postMessage({ sampleRate: e.sampleRate, b: n.buffer }, [n.buffer]) }, s.getFrequencies = function(e) { return arguments.length || (e = l), o(h, e) && (u = s.fftSize, l = e, h = a(e, s.frequencyBinCount)), e ? this.getFloatFrequencyData(h) : this.getByteFrequencyData(h), h }, s.getAmplitude = function(e) { y = y || e; var t = new Float32Array(s.fftSize);
                t.set(s.getFrequencies(!0)), m.postMessage({ sum: 0, length: t.byteLength, numSamples: s.fftSize / 2, b: t.buffer }, [t.buffer]) }, s.update = function() {
                s.getWaveform(), s.getFrequencies();
            }, (0, _.default)(s, { smoothing: { get: function() { return s.smoothingTimeConstant }, set: function(e) { s.smoothingTimeConstant = e } } }), s
        }

        function m(e, t) { return arguments.length < 2 && (t = 0), "number" != typeof e || isNaN(e) ? t : e }

        function g(e, t) { t = m(t, 1); var n = e.createWaveShaper(),
                i = new Float32Array(ve); return n.update = function(e) { if (t = e, 0 >= t) return t = 0, void(this.curve = null); for (var n = 100 * e, r = Math.PI / 180, o = void 0, a = 0; ve > a; a++) o = 2 * a / ve - 1, i[a] = (3 + n) * o * 20 * r / (Math.PI + n * Math.abs(o));
                this.curve = i }, (0, _.default)(n, { amount: { get: function() { return t }, set: function(e) { this.update(e) } } }), "undefined" != typeof t && n.update(t), n }

        function y(e, t) { t = t || {}; var n = e.createGain(),
                i = e.createDelay(),
                r = e.createGain(),
                o = e.createGain();
            i.delayTime.value = m(t.delayTime, .5), r.gain.value = m(t.feedback, .5), n.connect(i), n.connect(o), i.connect(r), r.connect(i), r.connect(o); var a = n; return a.name = "Echo", a._output = o, (0, _.default)(a, { delay: { get: function() { return i.delayTime.value }, set: function(e) { i.delayTime.value = e } }, feedback: { get: function() { return r.gain.value }, set: function(e) { r.gain.value = e } } }), a }

        function M() {
            function e() {}

            function t() { return { value: 1, defaultValue: 1, linearRampToValueAtTime: e, setValueAtTime: e, exponentialRampToValueAtTime: e, setTargetAtTime: e, setValueCurveAtTime: e, cancelScheduledValues: e } }

            function n() { return { connect: e, disconnect: e, frequencyBinCount: 0, smoothingTimeConstant: 0, fftSize: 0, minDecibels: 0, maxDecibels: 0, getByteTimeDomainData: e, getByteFrequencyData: e, getFloatTimeDomainData: e, getFloatFrequencyData: e, gain: t(), panningModel: 0, setPosition: e, setOrientation: e, setVelocity: e, distanceModel: 0, refDistance: 0, maxDistance: 0, rolloffFactor: 0, coneInnerAngle: 360, coneOuterAngle: 360, coneOuterGain: 0, type: 0, frequency: t(), Q: t(), detune: t(), delayTime: t(), buffer: 0, threshold: t(), knee: t(), ratio: t(), attack: t(), release: t(), reduction: t(), oversample: 0, curve: 0, sampleRate: 1, length: 0, duration: 0, numberOfChannels: 0, getChannelData: function() { return [] }, copyFromChannel: e, copyToChannel: e, dopplerFactor: 0, speedOfSound: 0, start: e } } var i = Date.now(); return window.Uint8Array || (window.Uint8Array = window.Float32Array = Array), { createAnalyser: n, createBuffer: n, createBiquadFilter: n, createChannelMerger: n, createChannelSplitter: n, createDynamicsCompressor: n, createConvolver: n, createDelay: n, createGain: n, createOscillator: n, createPanner: n, createScriptProcessor: n, createWaveShaper: n, listener: n(), get currentTime() { return (Date.now() - i) / 1e3 } } }

        function w(e) {
            function t(e) { var t = Math.log(r / i) / Math.LN2,
                    n = Math.pow(2, t * (e - 1)); return r * n } var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = 40,
                r = e.sampleRate / 2,
                o = e.createBiquadFilter(); return o.type = n.type, o.set = function(e, t, n) { return "undefined" != typeof e && "number" == typeof e && (o.frequency.value = e), "undefined" != typeof t && "number" == typeof t && (o.Q.value = t), "undefined" != typeof n && "number" == typeof n && (o.gain.value = n), o }, o.setByPercent = function(e, n, i) { return o.set(t(e), n, i) }, o.set(n.frequency, n.q, n.gain) }

        function E(e, t) { var n = e.createGain(),
                i = e.createDelay(),
                r = e.createGain(),
                o = e.createOscillator(),
                a = e.createGain(),
                s = e.createGain();
            i.delayTime.value = m(t.delay, .005), r.gain.value = m(t.feedback, .5), o.type = "sine", o.frequency.value = m(t.frequency, .002), a.gain.value = m(t.gain, .25), n.connect(s), n.connect(i), i.connect(s), i.connect(r), r.connect(n), o.connect(a), a.connect(i.delayTime), o.start(0); var u = n; return u.name = "Flanger", u._output = s, (0, _.default)(u, { delay: { get: function() { return i.delayTime.value }, set: function(e) { i.delayTime.value = e } }, lfoFrequency: { get: function() { return o.frequency.value }, set: function(e) { o.frequency.value = e } }, lfoGain: { get: function() { return a.gain.value }, set: function(e) { a.gain.value = e } }, feedback: { get: function() { return r.gain.value }, set: function(e) { r.gain.value = e } } }), u }

        function S(e, t) { var n = e.createGain(),
                i = e.createChannelSplitter(2),
                r = e.createChannelMerger(2),
                o = e.createGain(),
                a = e.createGain(),
                s = e.createOscillator(),
                u = e.createGain(),
                l = e.createGain(),
                c = e.createDelay(),
                f = e.createDelay(),
                h = e.createGain();
            o.gain.value = a.gain.value = m(t.feedback, .5), c.delayTime.value = f.delayTime.value = m(t.delay, .003), s.type = "sine", s.frequency.value = m(t.frequency, .5), u.gain.value = m(t.gain, .005), l.gain.value = 0 - u.gain.value, n.connect(i), i.connect(c, 0), i.connect(f, 1), c.connect(o), f.connect(a), o.connect(f), a.connect(c), c.connect(r, 0, 0), f.connect(r, 0, 1), r.connect(h), n.connect(h), s.connect(u), s.connect(l), u.connect(c.delayTime), l.connect(f.delayTime), s.start(0); var d = n; return d.name = "StereoFlanger", d._output = h, (0, _.default)(d, { delay: { get: function() { return c.delayTime.value }, set: function(e) { c.delayTime.value = f.delayTime.value = e } }, lfoFrequency: { get: function() { return s.frequency.value }, set: function(e) { s.frequency.value = e } }, lfoGain: { get: function() { return u.gain.value }, set: function(e) { u.gain.value = l.gain.value = e } }, feedback: { get: function() { return o.gain.value }, set: function(e) { o.gain.value = a.gain.value = e } } }), d }

        function T(e, t) { return t = t || {}, t.stereo ? new S(e, t) : new E(e, t) }

        function P(e) {
            function t(e, t) { var n = e.x,
                    i = e.y,
                    r = e.z,
                    o = t.x,
                    a = t.y,
                    s = t.z;
                e.x = i * s - r * a, e.y = r * o - n * s, e.z = n * a - i * o }

            function n(e) { if (0 === e.x && 0 === e.y && 0 === e.z) return e; var t = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z),
                    n = 1 / t; return e.x *= n, e.y *= n, e.z *= n, e }

            function i(e, i) { var r = a.get(i.x, i.y, i.z);
                t(r, s), t(r, i), n(r), n(i), e.setOrientation(i.x, i.y, i.z, r.x, r.y, r.z), a.dispose(i), a.dispose(r) }

            function r(e, t) { e.setPosition(t.x, t.y, t.z), a.dispose(t) } var o = e.createPanner();
            o.panningModel = P.defaults.panningModel, o.distanceModel = P.defaults.distanceModel, o.refDistance = P.defaults.refDistance, o.maxDistance = P.defaults.maxDistance, o.rolloffFactor = P.defaults.rolloffFactor, o.coneInnerAngle = P.defaults.coneInnerAngle, o.coneOuterAngle = P.defaults.coneOuterAngle, o.coneOuterGain = P.defaults.coneOuterGain, o.setPosition(0, 0, 1), o.setOrientation(0, 0, 0); var a = { pool: [], get: function(e, t, n) { var i = this.pool.length ? this.pool.pop() : { x: 0, y: 0, z: 0 }; return "undefined" != typeof e && isNaN(e) && "x" in e && "y" in e && "z" in e ? (i.x = m(e.x), i.y = m(e.y), i.z = m(e.z)) : (i.x = m(e), i.y = m(t), i.z = m(n)), i }, dispose: function(e) { this.pool.push(e) } },
                s = a.get(0, 1, 0),
                u = Math.PI / 4,
                l = Math.PI / 2; return o.set = function(e, t, n) { var i = a.get(e, t, n);
                1 === arguments.length && i.x && (e = i.x, e > 1 && (e = 1), -1 > e && (e = -1), e *= u, n = e + l, n > l && (n = Math.PI - n), i.x = Math.sin(e), i.z = Math.sin(n)), r(o, i) }, o.setSourcePosition = function(e, t, n) { r(o, a.get(e, t, n)) }, o.setSourceOrientation = function(e, t, n) { i(o, a.get(e, t, n)) }, o.setListenerPosition = function(t, n, i) { r(e.listener, a.get(t, n, i)) }, o.setListenerOrientation = function(t, n, r) { i(e.listener, a.get(t, n, r)) }, o.getDefaults = function() { return P.defaults }, o.setDefaults = function(e) {
                (0, x.default)(e).forEach(function(t) { P.defaults[t] = e[t] }) }, o }

        function A(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                n = m(t.stages, 8),
                i = [],
                r = void 0,
                o = e.createGain(),
                a = e.createGain(),
                s = e.createOscillator(),
                u = e.createGain(),
                l = e.createGain();
            a.gain.value = m(t.feedback, .5), s.type = "sine", s.frequency.value = m(t.frequency, .5), u.gain.value = m(t.gain, 300); for (var c = 0; n > c; c++) r = e.createBiquadFilter(), r.type = "allpass", r.frequency.value = 1e3 * c, c > 0 && i[c - 1].connect(r), u.connect(r.frequency), i.push(r); var f = i[0],
                h = i[i.length - 1];
            o.connect(f), o.connect(l), h.connect(l), h.connect(a), a.connect(f), s.connect(u), s.start(0); var d = o; return d.name = "Phaser", d._output = l, (0, _.default)(d, { lfoFrequency: { get: function() { return s.frequency.value }, set: function(e) { s.frequency.value = e } }, lfoGain: { get: function() { return u.gain.value }, set: function(e) { u.gain.value = e } }, feedback: { get: function() { return a.gain.value }, set: function(e) { a.gain.value = e } } }), d }

        function C(e, t) {
            function n(e, t) { for (var n = new Float32Array(t), i = 0, r = 0; r < e.length; r++) n.set(e[r], i), i += e[r].length; return n }

            function i() { if (!s.length) return e.createBuffer(2, a, e.sampleRate); var t = s.length * a,
                    i = e.createBuffer(2, t, e.sampleRate); return i.getChannelData(0).set(n(s, t)), i.getChannelData(1).set(n(u, t)), i }

            function r() { d && (d.onaudioprocess = null, f.disconnect(), d.disconnect()) }

            function o() { r(), d = e.createScriptProcessor(a, 2, 2), f.connect(d), d.connect(e.destination), d.connect(h), d.onaudioprocess = function(e) { var n = e.inputBuffer.getChannelData(0),
                        i = e.inputBuffer.getChannelData(1); if (t) { var r = e.outputBuffer.getChannelData(0),
                            o = e.outputBuffer.getChannelData(1);
                        r.set(n), o.set(i) }
                    v.isRecording && (s.push(new Float32Array(n)), u.push(new Float32Array(i))) } } var a = 4096,
                s = [],
                u = [],
                l = 0,
                c = 0,
                f = e.createGain(),
                h = e.createGain(),
                d = void 0,
                v = f; return v.name = "Recorder", v._output = h, v.isRecording = !1, v.start = function() { o(), s.length = 0, u.length = 0, l = e.currentTime, c = 0, this.isRecording = !0 }, v.stop = function() { return c = e.currentTime, this.isRecording = !1, r(), i() }, v.getDuration = function() { return this.isRecording ? e.currentTime - l : c - l }, v }

        function I(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                n = e.sampleRate,
                i = m(t.time, 1),
                r = m(t.decay, 5),
                o = !!t.reverse,
                a = void 0,
                s = void 0,
                u = e.createGain(),
                l = e.createConvolver(),
                c = e.createGain();
            u.connect(l), u.connect(c), l.connect(c); var f = u; return f.name = "Reverb", f._output = c, f.update = function(t) { if ("undefined" != typeof t.time && (i = t.time, a = Math.floor(n * i), s = a ? e.createBuffer(2, a, n) : null), "undefined" != typeof t.decay && (r = t.decay), "undefined" != typeof t.reverse && (o = t.reverse), !s) return void(l.buffer = null); for (var u = s.getChannelData(0), c = s.getChannelData(1), f = void 0, h = void 0, d = 0; a > d; d++) f = o ? a - d : d, h = Math.pow(1 - f / a, r), u[d] = (2 * Math.random() - 1) * h, c[d] = (2 * Math.random() - 1) * h;
                l.buffer = s }, f.update({ time: i, decay: r, reverse: o }), (0, _.default)(f, { time: { get: function() { return i }, set: function(e) { e !== i && this.update({ time: e }) } }, decay: { get: function() { return r }, set: function(e) { e !== r && this.update({ decay: e }) } }, reverse: { get: function() { return o }, set: function(e) { e !== o && this.update({ reverse: !!e }) } } }), f }

        function D(e) {
            function t(e, t) { var n = e._output || e;
                n.disconnect(), n.connect(t) }

            function n(e) { var n = W.length,
                    i = n ? W[n - 1] : K;
                i && t(i, e), H = e }

            function i() { if (K) { for (var e = void 0, i = void 0, r = 0; r < W.length; r++) e = W[r], i = 0 === r ? K : W[r - 1], t(i, e);
                    H && n(H) } }

            function r(e) { return !!e && W.indexOf(e) > -1 }

            function o(e) { return e ? r(e) ? e : (W.push(e), i(), e) : null }

            function a(e) { if (!e) return null; if (!r(e)) return e; for (var t = W.length, n = 0; t > n; n++)
                    if (e === W[n]) { W.splice(n, 1); break }
                var o = e._output || e; return o.disconnect(), i(), e }

            function s(e, t) { t = !!t; var n = r(e); return arguments.length > 1 && n === t ? Y : (n ? a(e) : o(e), Y) }

            function u() { for (; W.length;) W.pop().disconnect(); return i(), Y }

            function l() { u(), e = null, H = null, W = [], K && K.disconnect(), K = null }

            function c(t) { return o(new v(e, t)) }

            function f(t) { var n = e.createDynamicsCompressor(); return n.update = function(e) { n.threshold.value = "undefined" != typeof e.threshold ? e.threshold : -24, n.knee.value = "undefined" != typeof e.knee ? e.knee : 30, n.ratio.value = "undefined" != typeof e.ratio ? e.ratio : 12, n.attack.value = "undefined" != typeof e.attack ? e.attack : 3e-4, n.release.value = "undefined" != typeof e.release ? e.release : .25 }, n.update(t || {}), o(n) }

            function h(t) { var n = e.createConvolver(); return n.buffer = t, o(n) }

            function d(t) { var n = e.createDelay(); return "undefined" != typeof t && (n.delayTime.value = t), o(n) }

            function m(t) { return o(new y(e, t)) }

            function _(t) { return o(new g(e, t)) }

            function x(t, n, i, r) { return o(new w(e, { type: t, frequency: n, q: i, gain: r })) }

            function b(e, t) { return x("lowpass", { frequency: e, q: t }) }

            function E(e, t) { return x("highpass", { frequency: e, q: t }) }

            function S(e, t) { return x("bandpass", { frequency: e, q: t }) }

            function D(e, t) { return x("lowshelf", { frequency: e, q: 0, gain: t }) }

            function F(e, t) { return x("highshelf", { frequency: e, q: 0, gain: t }) }

            function k(e, t, n) { return x("peaking", { frequency: e, q: t, gain: n }) }

            function L(e, t, n) { return x("notch", { frequency: e, q: t, gain: n }) }

            function R(e, t) { return x("allpass", { frequency: e, q: t }) }

            function O(t) { return o(new T(e, t)) }

            function N(t) { var n = e.createGain(); return "undefined" != typeof t && (n.gain.value = t), n }

            function V() { return o(new P(e)) }

            function z(t) { return o(new A(e, t)) }

            function B(t) { return o(new C(e, t)) }

            function G(t, n, i) { return o(new I(e, t, n, i)) }

            function U() { var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    n = t.bufferSize || 1024,
                    i = "undefined" == typeof t.inputChannels ? 0 : t.inputChannels,
                    r = "undefined" == typeof t.outputChannels ? 1 : t.outputChannels,
                    a = e.createScriptProcessor(n, i, r),
                    s = t.thisArg || t.context || a,
                    u = t.callback || function() {}; return a.onaudioprocess = u.bind(s), o(a) }

            function j(e) { return K = e, i(), e }

            function X(e) { return n(e), e }
            e = e || new M; var q = new P(e),
                Y = null,
                H = void 0,
                W = [],
                K = void 0; return Y = { context: e, nodeList: W, panning: q, has: r, add: o, remove: a, toggle: s, removeAll: u, destroy: l, setSource: j, setDestination: X, analyser: c, compressor: f, convolver: h, delay: d, echo: m, distortion: _, filter: x, lowpass: b, highpass: E, bandpass: S, lowshelf: D, highshelf: F, peaking: k, notch: L, allpass: R, flanger: O, gain: N, panner: V, phaser: z, recorder: B, reverb: G, script: U }, (0, p.default)(Y) }

        function F(e, t) {
            function n(e, t) { var n = void 0; return e || 0 === e ? (p.some(function(t) { return (t === e || t.id === e) && (n = t, !0) }), n && t ? t(n) : n) : n }

            function i(e) { return n(e, function(e) { return p.splice(p.indexOf(e), 1) }), y }

            function r(e) { return e.gain.disconnect(), e.gain.connect(g), p.push(e), e.once("destroy", i), y }

            function o(e, t) { return p.forEach(function(n) { return n.play(e, t) }), y }

            function a() { return p.forEach(function(e) { e.playing && e.pause() }), y }

            function s() { return p.forEach(function(e) { e.paused && e.play() }), y }

            function u() { return p.forEach(function(e) { return e.stop() }), y }

            function l(e) { return p.forEach(function(t) { return t.seek(e) }), y }

            function c() { return x = y.volume, y.volume = 0, y }

            function f() { return y.volume = x || 1, y }

            function h(e) { return y.volume = e, y }

            function d(t, n) { if (e) { var i = g.gain,
                        r = e.currentTime;
                    i.cancelScheduledValues(r), i.setValueAtTime(i.value, r), i.linearRampToValueAtTime(t, r + n) } else p.forEach(function(e) { e.fade(t, n) }); return y }

            function v() { for (; p.length;) p.pop().destroy() } var p = [],
                m = new D(e),
                g = m.gain(),
                x = 1,
                y = null; return e && (m.setSource(g), m.setDestination(t || e.destination)), y = { add: r, find: n, remove: i, play: o, pause: a, resume: s, stop: u, seek: l, setVolume: h, mute: c, unMute: f, fade: d, destroy: v }, (0, _.default)(y, { effect: { value: m }, gain: { value: g }, sounds: { value: p }, volume: { get: function() { return g.gain.value }, set: function(t) { isNaN(t) || (e ? (g.gain.cancelScheduledValues(e.currentTime), g.gain.value = t, g.gain.setValueAtTime(t, e.currentTime)) : g.gain.value = t, p.forEach(function(e) { e.context || (e.groupVolume = t) })) } } }), y }

        function k() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

        function L(e) { return "function" == typeof e }

        function R(e) { return "number" == typeof e }

        function O(e) { return "object" == ("undefined" == typeof e ? "undefined" : (0, b.default)(e)) && null !== e }

        function N(e) { return void 0 === e }

        function V(e) {
            function t() { m.off("error"), m.off("progress"), m.off("complete"), m.off("loaded"), w && "function" == typeof w.removeEventListener && (w.removeEventListener("canplaythrough", s), w.removeEventListener("error", r)), b && (b.removeEventListener("progress", i), b.removeEventListener("load", a), b.removeEventListener("error", r)) }

            function n(e) { m.emit("progress", 1), m.emit("loaded", e), m.emit("complete", e), t() }

            function i(e) { e.lengthComputable && (g = e.loaded / e.total, m.emit("progress", g)) }

            function r(n) { window.clearTimeout(M); var i = n;
                w && w.error && (i = "Media Error: " + v[w.error.code] + " " + e), b && (i = "XHR Error: " + b.status + " " + b.statusText + " " + e), m.emit("error", i), t() }

            function o(e) { x.decodeAudioData(e, function(e) { w = e, b = null, g = 1, n(e) }, r) }

            function a() { o(b.response) }

            function s() { window.clearTimeout(M), w && (g = 1, n(w)) }

            function u() { t(), b && 4 !== b.readyState && b.abort(), b = null, window.clearTimeout(M) }

            function l() { u(), b = null, w = null, x = null }

            function c() { return e instanceof window.ArrayBuffer ? void o(e) : (b = new XMLHttpRequest, b.open("GET", e, !0), b.responseType = "arraybuffer", b.addEventListener("progress", i), b.addEventListener("load", a), b.addEventListener("error", r), void b.send()) }

            function f() { w && w.tagName || (w = document.createElement("audio")), y || (window.clearTimeout(M), M = window.setTimeout(s, 2e3), w.addEventListener("canplaythrough", s, !1)), w.addEventListener("error", r, !1), w.preload = "auto", w.src = e, w.load(), y && n(w) }

            function h() { x ? c() : f() }

            function d(t) { e = t, h() } var v = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"],
                m = new _e,
                g = 0,
                x = void 0,
                y = void 0,
                b = void 0,
                M = void 0,
                w = void 0,
                E = { on: m.on.bind(m), once: m.once.bind(m), off: m.off.bind(m), load: d, start: h, cancel: u, destroy: l }; return (0, _.default)(E, { data: { get: function() { return w } }, progress: { get: function() { return g } }, audioContext: { set: function(e) { x = e } }, isTouchLocked: { set: function(e) { y = e } } }), (0, p.default)(E) }

        function z(e, t, n) {
            function i() { return !x && t && (x = t.createBufferSource(), x.buffer = e), x }

            function r() { if (x) { x.onended = null; try { x.disconnect(), x.stop(0) } catch (e) {}
                    x = null }
                d = !1, v = 0, g = !1, y = 0 }

            function o() { var e = t.currentTime - y;
                r(), v = e, g = !1, d = !0 }

            function a() { r(), c = !0, "function" == typeof f && f(l) }

            function s(e) { var n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1]; if (!g) { for (e = e ? t.currentTime + e : 0, n && (v = 0), v && (n = v); n > l.duration;) n %= l.duration;
                    i(), x.onended = a, x.start(e, n), x.loop = h, x.playbackRate.value = m, y = t.currentTime - n, c = !1, d = !1, v = 0, g = !0 } }

            function u() { r(), e = null, t = null, f = null, x = null } var l = {},
                c = !1,
                f = n,
                h = !1,
                d = !1,
                v = 0,
                m = 1,
                g = !1,
                x = null,
                y = 0; return (0, _.default)(l, { play: { value: s }, pause: { value: o }, stop: { value: r }, destroy: { value: u }, currentTime: { get: function() { if (v) return v; if (y) { var e = t.currentTime - y; return e > l.duration && (e %= l.duration), e } return 0 } }, duration: { get: function() { return e ? e.duration : 0 } }, ended: { get: function() { return c } }, loop: { get: function() { return h }, set: function(e) { h = !!e, x && (x.loop = h) } }, paused: { get: function() { return d } }, playbackRate: { get: function() { return m }, set: function(e) { m = e, x && (x.playbackRate.value = m) } }, playing: { get: function() { return g } }, progress: { get: function() { return l.duration ? l.currentTime / l.duration : 0 } }, sourceNode: { get: function() { return i() } } }), (0, p.default)(l) }

        function B(e, t, n) {
            function i() { return !w && t && (w = t.createMediaElementSource(e)), w }

            function r(t) { e.src = t, e.load(), d = !1, y = !1, M = !1 }

            function o() { e.removeEventListener("canplaythrough", o), M && e.play() }

            function a() { return x ? (e.currentTime = 0, e.currentTime > 0 && e.load(), void e.play()) : (d = !0, y = !1, M = !1, void("function" == typeof v && v(h))) }

            function s(t, n) { clearTimeout(m), e.volume = S * E, e.playbackRate = b, n && (e.currentTime = n), t ? m = setTimeout(s, t) : e.play(), d = !1, y = !1, M = !0, e.removeEventListener("ended", a), e.addEventListener("ended", a, !1), e.readyState < 1 && (e.removeEventListener("canplaythrough", o), e.addEventListener("canplaythrough", o, !1), e.load(), e.play()) }

            function u() { clearTimeout(m), e && (e.pause(), M = !1, y = !0) }

            function l() { if (clearTimeout(m), e) { e.pause(); try { e.currentTime = 0, e.currentTime > 0 && e.load() } catch (e) {}
                    M = !1, y = !1 } }

            function c(e, n) {
                function i(e, t) { g = window.setTimeout(function() { return h.volume = h.volume + .2 * (e - h.volume), Math.abs(h.volume - e) > .05 ? void i(e, t) : void(h.volume = e) }, 1e3 * t) } return t ? h : (window.clearTimeout(g), i(e, n / 10), h) }

            function f() { e.removeEventListener("ended", a), e.removeEventListener("canplaythrough", o), l(), e = null, t = null, v = null, w = null } var h = {},
                d = !1,
                v = n,
                m = void 0,
                g = void 0,
                x = !1,
                y = !1,
                b = 1,
                M = !1,
                w = null,
                E = 1,
                S = 1; return (0, _.default)(h, { play: { value: s }, pause: { value: u }, stop: { value: l }, load: { value: r }, fade: { value: c }, destroy: { value: f }, currentTime: { get: function() { return e ? e.currentTime : 0 } }, duration: { get: function() { return e ? e.duration : 0 } }, ended: { get: function() { return d } }, loop: { get: function() { return x }, set: function(e) { x = !!e } }, paused: { get: function() { return y } }, playbackRate: { get: function() { return b }, set: function(t) { b = t, e && (e.playbackRate = b) } }, playing: { get: function() { return M } }, progress: { get: function() { return e && e.duration ? e.currentTime / e.duration : 0 } }, sourceNode: { get: function() { return i() } }, volume: { get: function() { return S }, set: function(t) { window.clearTimeout(g), S = t, e && (e.volume = S * E) } }, groupVolume: { get: function() { return E }, set: function(t) { E = t, e && (e.volume = S * E) } } }), (0, p.default)(h) }

        function G(e, t) {
            function n() { return !f && t && (f = t.createMediaStreamSource(e), navigator.mozGetUserMedia && (window.mozHack = f)), f }

            function i(e) { e = e ? t.currentTime + e : 0, n(), f.start(e), h = t.currentTime - l, s = !1, c = !0, u = !1, l = 0 }

            function r() { if (f) { try { f.stop(0) } catch (e) {}
                    f = null }
                s = !0, u = !1, l = 0, c = !1, h = 0 }

            function o() { var e = t.currentTime - h;
                r(), l = e, c = !1, u = !0 }

            function a() { r(), t = null, f = null, e = null, window.mozHack = null } var s = !1,
                u = !1,
                l = 0,
                c = !1,
                f = null,
                h = 0,
                d = { play: i, pause: o, stop: r, destroy: a, duration: 0, progress: 0 }; return (0, _.default)(d, { currentTime: { get: function() { return l ? l : h ? t.currentTime - h : 0 } }, ended: { get: function() { return s } }, paused: { get: function() { return u } }, playing: { get: function() { return c } }, sourceNode: { get: function() { return n() } } }), (0, p.default)(d) }

        function U(e, t) {
            function n() { return !f && t && (f = t.createOscillator(), f.type = e, f.frequency.value = d), f }

            function i(e) { e = e || 0, e && (e = t.currentTime + e), n(), f.start(e), h = l ? t.currentTime - l : t.currentTime, s = !1, c = !0, u = !1, l = 0 }

            function r() { if (f) { try { f.stop(0) } catch (e) {}
                    f = null }
                s = !0, u = !1, l = 0, c = !1, h = 0 }

            function o() { var e = t.currentTime - h;
                r(), l = e, c = !1, u = !0 }

            function a() { r(), t = null, f = null } var s = !1,
                u = !1,
                l = 0,
                c = !1,
                f = null,
                h = 0,
                d = 200,
                v = null; return v = { play: i, pause: o, stop: r, destroy: a }, (0, _.default)(v, { currentTime: { get: function() { return l ? l : h ? t.currentTime - h : 0 } }, duration: { value: 0 }, ended: { get: function() { return s } }, frequency: { get: function() { return d }, set: function(e) { d = e, f && (f.frequency.value = e) } }, paused: { get: function() { return u } }, playing: { get: function() { return c } }, progress: { value: 0 }, sourceNode: { get: function() { return n() } } }), (0, p.default)(v) }

        function j(e, t) {
            function n() { return !m && t && (m = t.createScriptProcessor(u, 0, l)), m }

            function i() { n(), m.onaudioprocess = f, g = t.currentTime - d, c = !1, h = !1, d = 0, v = !0 }

            function r(e) { for (var t = e.outputBuffer, n = 0; n < t.numberOfChannels; n++)
                    for (var i = t.getChannelData(n), r = 0; r < i.length; r++) i[r] = 0 }

            function o() { m && (m.onaudioprocess = r), c = !0, h = !1, d = 0, v = !1, g = 0 }

            function a() { var e = t.currentTime - g;
                o(), d = e, v = !1, h = !0 }

            function s() { o(), t = null, f = null, m = null } var u = e.bufferSize || 1024,
                l = e.channels || 1,
                c = !1,
                f = e.callback.bind(e.thisArg || this),
                h = !1,
                d = 0,
                v = !1,
                m = null,
                g = 0,
                x = null; return x = { play: i, pause: a, stop: o, destroy: s, duration: 0, progress: 0 }, (0, _.default)(x, { currentTime: { get: function() { return d ? d : g ? t.currentTime - g : 0 } }, ended: { get: function() { return c } }, paused: { get: function() { return h } }, playing: { get: function() { return v } }, sourceNode: { get: function() { return n() } } }), (0, p.default)(x) }

        function X() { var e = void 0,
                t = void 0; return function(n, i) { if (!window.Float32Array || !window.AudioBuffer) return []; var r = e === n,
                    o = t && t.length === i; if (r && o) return t; if (t && t.length === i || (t = new Float32Array(i)), !n) return t;
                e = n; for (var a = Math.floor(e.length / i), s = 5, u = Math.max(Math.floor(a / s), 1), l = 0, c = 0; c < e.numberOfChannels; c++)
                    for (var f = e.getChannelData(c), h = 0; i > h; h++)
                        for (var d = h * a, v = d + a; v > d; d += u) { var p = f[d];
                            0 > p && (p = -p), p > t[h] && (t[h] = p), p > l && (l = p) }
                for (var m = 1 / l, _ = 0; _ < t.length; _++) t[_] *= m; return t } }

        function q(e, t) {
            function n(t) { if (f = t, de.isAudioBuffer(f)) M = new z(f, e, function() { return w.emit("ended", w) });
                else if (de.isMediaElement(f)) M = new B(f, e, function() { return w.emit("ended", w) });
                else if (de.isMediaStream(f)) M = new G(f, e);
                else if (de.isOscillatorType(f && f.type || f)) M = new U(f.type || f, e);
                else { if (!de.isScriptConfig(f)) throw new Error("Cannot detect data type: " + f);
                    M = new j(f, e) }
                h.setSource(M.sourceNode), w.emit("ready", w), b && b() }

            function i(t) { var i = de.getSupportedFile(t.src || t.url || t.data || t); return M && f && f.tagName ? M.load(i) : (g = g || new V(i), g.audioContext = t.asMediaElement ? null : e, g.isTouchLocked = _, g.once("loaded", function(e) { n(e), w.emit("loaded", w) })), w }

            function r(t, n) { return !M || _ ? (b = function() { M && r(t, n) }, w) : (b = null, h.setSource(M.sourceNode), e || (w.volume = v.gain.value), M.play(t, n), M.hasOwnProperty("loop") && (M.loop = x), w.emit("play", w), w) }

            function o() { return M && M.pause(), w.emit("pause", w), w }

            function a(e) { return M && M.stop(e || 0), w.emit("stop", w), w }

            function s(e) { return M && (M.stop(), r(0, M.duration * e)), w }

            function u(t, n) { if (!M) return w; var i = v.gain; if (e) { var r = e.currentTime;
                    i.cancelScheduledValues(r), i.setValueAtTime(i.value, r), i.linearRampToValueAtTime(t, r + n) } else "function" == typeof M.fade && (M.fade(t, n), i.value = t); return w }

            function l() { M && M.destroy(), h && h.destroy(), v && v.disconnect(), g && g.destroy(), w.off("loaded"), w.off("ended"), v = null, e = null, f = null, b = null, M = null, h = null, g = null, m = null, w.emit("destroy", w), w.off("destroy") } var c = void 0,
                f = void 0,
                h = new D(e),
                v = h.gain(),
                m = X(),
                _ = !1,
                g = void 0,
                x = !1,
                y = 1,
                b = void 0,
                M = void 0,
                w = null; return e && (h.setDestination(v), v.connect(t || e.destination)), w = (0, d.default)(_e.prototype, { _events: { value: {} }, constructor: { value: q }, play: { value: r }, pause: { value: o }, load: { value: i }, seek: { value: s }, stop: { value: a }, fade: { value: u }, destroy: { value: l }, context: { value: e }, currentTime: { get: function() { return M ? M.currentTime : 0 }, set: function(e) { M && M.stop(), r(0, e) } }, data: { get: function() { return f }, set: function(e) { e && n(e) } }, duration: { get: function() { return M ? M.duration : 0 } }, effect: { value: h }, ended: { get: function() { return !!M && M.ended } }, frequency: { get: function() { return M ? M.frequency : 0 }, set: function(e) { M && M.hasOwnProperty("frequency") && (M.frequency = e) } }, gain: { value: v }, id: { get: function() { return c }, set: function(e) { c = e } }, isTouchLocked: { set: function(e) { _ = e, g && (g.isTouchLocked = e), !e && b && b() } }, loader: { get: function() { return g } }, loop: { get: function() { return x }, set: function(e) { x = !!e, M && M.hasOwnProperty("loop") && M.loop !== x && (M.loop = x) } }, paused: { get: function() { return !!M && M.paused } }, playing: { get: function() { return !!M && M.playing } }, playbackRate: { get: function() { return y }, set: function(e) { y = e, M && (M.playbackRate = y) } }, progress: { get: function() { return M ? M.progress : 0 } }, sourceNode: { get: function() { return M ? M.sourceNode : null } }, volume: { get: function() { return e ? v.gain.value : M && M.hasOwnProperty("volume") ? M.volume : 1 }, set: function(t) { if (!isNaN(t)) { var n = v.gain; if (e) { var i = e.currentTime;
                                n.cancelScheduledValues(i), n.value = t, n.setValueAtTime(t, i) } else n.value = t, M && M.hasOwnProperty("volume") && (M.volume = t) } } }, groupVolume: { get: function() { return M.groupVolume }, set: function(e) { M && M.hasOwnProperty("groupVolume") && (M.groupVolume = e) } }, waveform: { value: function(e) { return f || w.once("ready", function() { return m(f, e) }), m(f, e) } }, userData: { value: {} } }), (0, p.default)(w) }

        function Y(e, t) {
            function n() { r.length && (s = r.slice(0).sort(function(e, t) { return t.duration - e.duration })[0]) } var i = new F(e, t),
                r = i.sounds,
                o = 1,
                a = !1,
                s = void 0,
                u = i.add;
            i.add = function(e) { return u(e), n(), i }; var l = i.rmeove; return i.remove = function(e) { return l(e), n(), i }, (0, _.default)(i, { currentTime: { get: function() { return s ? s.currentTime : 0 }, set: function(e) { this.stop(), this.play(0, e) } }, duration: { get: function() { return s ? s.duration : 0 } }, loop: { get: function() { return a }, set: function(e) { a = !!e, r.forEach(function(e) { e.loop = a }) } }, paused: { get: function() { return !!s && s.paused } }, progress: { get: function() { return s ? s.progress : 0 } }, playbackRate: { get: function() { return o }, set: function(e) { o = e, r.forEach(function(e) { e.playbackRate = o }) } }, playing: { get: function() { return !!s && s.playing } } }), i }

        function H(e, t, n) {
            function i() { return o ? (navigator.getUserMedia({ audio: !0 }, function(t) { s = t, e(s) }, function(e) { t && "PermissionDeniedError" === e.name || "PERMISSION_DENIED" === e ? t() : n(e.message || e) }), a) : a }

            function r() { return s && (s.stop(), s = null), a }
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, n = n || function() {}; var o = !!navigator.getUserMedia,
                a = {},
                s = null; return (0, _.default)(a, { connect: { value: i }, disconnect: { value: r }, isSupported: { value: o }, stream: { get: function() { return s } } }), (0, p.default)(a) }

        function W(e) {
            function t() { l ? (g.fillStyle = l, g.fillRect(h, d, m, _)) : g.clearRect(h, d, m, _), g.lineWidth = c, x = null, "function" != typeof u && (g.strokeStyle = u, g.beginPath()) }

            function n(e, t, n) { if ("function" == typeof u) { var i = u(e, t, n);
                    i !== x && (x = i, g.stroke(), g.strokeStyle = x, g.beginPath()) } }

            function i(e, t, n) { return "function" == typeof v ? v(e, t, n) : e }

            function r(t, n) { return t && "function" == typeof t.waveform ? t.waveform(n) : t ? t : e.waveform ? e.waveform : e.sound ? e.sound.waveform(n) : null }

            function o(e) { if (t(), "circular" === s) { var o = r(e, 360),
                        u = Math.floor(o.length * f),
                        l = xe / u,
                        v = void 0,
                        p = void 0,
                        x = void 0,
                        P = void 0; for (y = 0; u > y; y++) { var A = i(o[y], y, u);
                        n(y, u, A), v = y * l - ge, P = Math.cos(v), x = Math.sin(v), "fill" === a && (b = S + E * P, M = T + E * x, g.moveTo(b, M)), p = E + (w - E) * A, b = S + p * P, M = T + p * x, "line" === a && 0 === y && g.moveTo(b, M), g.lineTo(b, M) } "line" === a && g.closePath() } else { var C = r(e, m),
                        I = Math.min(C.length, m - c / 2); for (I = Math.floor(I * f), y = 0; I > y; y++) { var D = i(C[y], y, I);
                        n(y, I, D), "line" === a && y > 0 && g.lineTo(b, M), b = h + y, M = d + _ - Math.round(_ * D), M = Math.floor(Math.min(M, d + _ - c / 2)), "fill" === a ? (g.moveTo(b, M), g.lineTo(b, d + _)) : g.lineTo(b, M) } }
                g.stroke() } var a = e.style || "fill",
                s = e.shape || "linear",
                u = e.color || 0,
                l = e.bgColor,
                c = e.lineWidth || 1,
                f = e.percent || 1,
                h = e.x || 0,
                d = e.y || 0,
                v = e.transform,
                p = e.canvas,
                m = e.width || p && p.width,
                _ = e.height || p && p.height,
                g = null,
                x = void 0,
                y = void 0,
                b = void 0,
                M = void 0,
                w = void 0,
                E = void 0,
                S = void 0,
                T = void 0; return p || e.context || (p = document.createElement("canvas"), m = m || p.width, _ = _ || p.height, p.width = _, p.height = _), "circular" === s && (w = e.radius || Math.min(_ / 2, m / 2), E = e.innerRadius || w / 2, S = h + m / 2, T = d + _ / 2), g = e.context || p.getContext("2d"), o.canvas = p, (e.waveform || e.sound) && o(), o }

        function K() { if (ye) return ye; var e = window.AudioContext || window.webkitAudioContext;
            ye = e ? new e : null; var t = ye && "suspended" === ye.state; return t && "function" == typeof ye.resume && window.setTimeout(function() { ye.resume() }, 1e3), ye }

        function Z(e, t, n) { if (be) return be;
            e = e || 2, n = n || 44100, t = n || e; var i = window.OfflineAudioContext || window.webkitOfflineAudioContext; return be = i ? new i(e, t, n) : null }

        function Q(e) { if (!ye) return e; for (var t = e.numberOfChannels, n = ye.createBuffer(t, e.length, e.sampleRate), i = 0; t > i; i++) n.getChannelData(i).set(e.getChannelData(i)); return n }

        function J(e) { for (var t = e.numberOfChannels, n = 0; t > n; n++) Array.prototype.reverse.call(e.getChannelData(n)); return e }

        function $(e, t, n, i, r) { ye && (e.setValueAtTime(t, ye.currentTime), r ? e.linearRampToValueAtTime(n, ye.currentTime + i) : e.exponentialRampToValueAtTime(n, ye.currentTime + i)) }

        function ee(e) { if (!ye) return 0; var t = 40,
                n = ye.sampleRate / 2,
                i = Math.log(n / t) / Math.LN2,
                r = Math.pow(2, i * (e - 1)); return n * r }

        function te(e, t, n) { return new H(e, t, n) }

        function ne(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? ":" : arguments[1],
                n = Math.floor(e / 60),
                i = Math.floor(e % 3600 % 60),
                r = (10 > n ? "0" + n : n) + t,
                o = 10 > i ? "0" + i : i; return r + o }

        function ie() {
            function e(e) { return w.find(e) }

            function t(e) { var t = new Y(b, w.gain); return e && e.forEach(function(e) { return t.add(e) }), t }

            function n(e) { var t = e && e.webAudio === !1 ? null : b,
                    n = new q(t, w.gain); return n.isTouchLocked = S, e && (n.id = e.id || e.name || "", n.loop = !!e.loop, n.volume = e.volume), w.add(n), n }

            function i(e, t) { var i = n(e).load(e); return t && t.add(i.loader), i }

            function r(e) { var t = e.src || e.url || e.data || e,
                    n = void 0,
                    r = void 0; if (de.containsURL(t)) n = i(e), r = n.loader;
                else { if (!Array.isArray(t) || !de.containsURL(t[0].src || t[0].url)) { var o = "sono.load: No audio file URLs found in config."; if (!e.onError) throw new Error(o); return e.onError("[ERROR] " + o), null }
                    n = [], r = new V.Group, t.forEach(function(e) { return n.push(i(e, r)) }) } return e.onProgress && r.on("progress", function(t) { return e.onProgress(t) }), e.onComplete && r.once("complete", function() { r.off("progress"), e.onComplete(n) }), r.once("error", function(t) { r.off("error"), e.onError ? e.onError(t) : void 0 }), r.start(), n }

            function o(e) { if (de.containsURL(e)) return r(e); var t = n(e); return t.data = e.data || e, t }

            function a(e) { return w.find(e, function(e) { return e.destroy() }), E }

            function s() { return w.destroy(), E }

            function u() { return w.mute(), E }

            function l() { return w.unMute(), E }

            function c(e, t) { return w.fade(e, t), E }

            function f() { return w.pause(), E }

            function h() { return w.resume(), E }

            function d() { return w.stop(), E }

            function v(e, t, n) { return w.find(e, function(e) { return e.play(t, n) }), E }

            function m(e) { return w.find(e, function(e) { return e.pause() }), E }

            function g(e) { return w.find(e, function(e) { return e.stop() }), E }

            function x() { "Supported:" + E.isSupported + " WebAudioAPI:" + E.hasWebAudio + " TouchLocked:" + S + " State:" + (b && b.state) + " Extensions:" + de.extensions; if (navigator.userAgent.indexOf("Chrome") > -1);
                else window.console && window.console.log.call && void 0 }
            var y = "0.1.8",
                b = Me.getContext(),
                M = b ? b.destination : null,
                w = new F(b, M),
                E = null,
                S = !1;
            return S = re.handleTouchLock(b, function() { S = !1, w.sounds.forEach(function(e) { return e.isTouchLocked = !1 }) }),
                function() {
                    function e() { w.sounds.forEach(function(e) { e.playing && (e.pause(), n.push(e)) }) }

                    function t() { for (; n.length;) n.pop().play() } var n = [];
                    re.handlePageVisibility(e, t) }(), E = {
                    createSound: o,
                    destroySound: a,
                    destroyAll: s,
                    getSound: e,
                    createGroup: t,
                    file: de,
                    load: r,
                    mute: u,
                    unMute: l,
                    fade: c,
                    pauseAll: f,
                    resumeAll: h,
                    stopAll: d,
                    play: v,
                    pause: m,
                    stop: g,
                    log: x,
                    canPlay: de.canPlay,
                    context: b,
                    getOfflineContext: Me.getOfflineContext,
                    effect: w.effect,
                    extensions: de.extensions,
                    hasWebAudio: !!b,
                    isSupported: de.extensions.length > 0,
                    gain: w.gain,
                    utils: Me,
                    VERSION: y,
                    Sound: q,
                    Group: F
                }, (0, _.default)(E, { isTouchLocked: { get: function() { return S } }, sounds: { get: function() { return w.sounds.slice(0) } }, volume: { get: function() { return w.volume }, set: function(e) { w.volume = e } } }), (0, p.default)(E)
        }
        var re = {};
        re.handlePageVisibility = function(e, t) {
            function n() { document[i] ? e() : t() } var i = void 0,
                r = void 0; "undefined" != typeof document.hidden ? (i = "hidden", r = "visibilitychange") : "undefined" != typeof document.mozHidden ? (i = "mozHidden", r = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (i = "msHidden", r = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (i = "webkitHidden", r = "webkitvisibilitychange"), "undefined" != typeof r && document.addEventListener(r, n, !1) }, re.handleTouchLock = function(e, t) {
            function n() { e && "suspended" === e.state ? e.resume().then(function() { var i = e.createBuffer(1, 1, 22050),
                        r = e.createBufferSource();
                    r.buffer = i, r.connect(e.destination), r.start(0), r.stop(0), r.disconnect(), document.body.removeEventListener("touchend", n), t() }) : (document.body.removeEventListener("touchend", n), t()) } var i = navigator.userAgent,
                r = !!i.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|SymbianOS/i); return r && document.body.addEventListener("touchend", n, !1), r };
        var oe = "function" == typeof f.default && "symbol" == (0, b.default)(l.default) ? function(e) { return "undefined" == typeof e ? "undefined" : (0, b.default)(e) } : function(e) { return e && "function" == typeof f.default && e.constructor === f.default ? "symbol" : "undefined" == typeof e ? "undefined" : (0, b.default)(e) },
            ae = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
            se = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, b.default)(t)));
                e.prototype = (0, d.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (s.default ? (0, s.default)(e, t) : e.__proto__ = t) },
            ue = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != ("undefined" == typeof t ? "undefined" : (0, b.default)(t)) && "function" != typeof t ? e : t },
            le = [],
            ce = {},
            fe = [{ ext: "ogg", type: 'audio/ogg; codecs="vorbis"' }, { ext: "mp3", type: "audio/mpeg;" }, { ext: "opus", type: 'audio/ogg; codecs="opus"' }, { ext: "wav", type: 'audio/wav; codecs="1"' }, { ext: "m4a", type: "audio/x-m4a;" }, { ext: "m4a", type: "audio/aac;" }],
            he = document.createElement("audio");
        he && (fe.forEach(function(e) { var t = !!he.canPlayType(e.type);
            t && -1 === le.indexOf(e.ext) && le.push(e.ext), ce[e.ext] = t }), he = null);
        var de = { canPlay: ce, containsURL: h, extensions: le, getFileExtension: e, getSupportedFile: t, isAudioBuffer: n, isMediaElement: r, isMediaStream: o, isOscillatorType: a, isScriptConfig: u, isURL: c },
            ve = 22050;
        P.defaults = { panningModel: "HRTF", distanceModel: "linear", refDistance: 1, maxDistance: 1e3, rolloffFactor: 1, coneInnerAngle: 360, coneOuterAngle: 0, coneOuterGain: 0 }, F.Effect = D;
        var pe = k;
        k.EventEmitter = k, k.prototype._events = void 0, k.prototype._maxListeners = void 0, k.defaultMaxListeners = 10, k.prototype.setMaxListeners = function(e) { if (!R(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, k.prototype.emit = function(e) { var t, n, i, r, o, a; if (this._events || (this._events = {}), "error" === e && (!this._events.error || O(this._events.error) && !this._events.error.length)) { if (t = arguments[1], t instanceof Error) throw t; var s = new Error('Uncaught, unspecified "error" event. (' + t + ")"); throw s.context = t, s } if (n = this._events[e], N(n)) return !1; if (L(n)) switch (arguments.length) {
                case 1:
                    n.call(this); break;
                case 2:
                    n.call(this, arguments[1]); break;
                case 3:
                    n.call(this, arguments[1], arguments[2]); break;
                default:
                    r = Array.prototype.slice.call(arguments, 1), n.apply(this, r) } else if (O(n))
                for (r = Array.prototype.slice.call(arguments, 1), a = n.slice(), i = a.length, o = 0; i > o; o++) a[o].apply(this, r);
            return !0 }, k.prototype.addListener = function(e, t) { var n; if (!L(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, L(t.listener) ? t.listener : t), this._events[e] ? O(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, O(this._events[e]) && !this._events[e].warned && (n = N(this._maxListeners) ? k.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, "function" == typeof console.trace)), this }, k.prototype.on = k.prototype.addListener, k.prototype.once = function(e, t) {
            function n() { this.removeListener(e, n), i || (i = !0, t.apply(this, arguments)) } if (!L(t)) throw TypeError("listener must be a function"); var i = !1; return n.listener = t, this.on(e, n), this }, k.prototype.removeListener = function(e, t) { var n, i, r, o; if (!L(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (n = this._events[e], r = n.length, i = -1, n === t || L(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (O(n)) { for (o = r; o-- > 0;)
                    if (n[o] === t || n[o].listener && n[o].listener === t) { i = o; break }
                if (0 > i) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, k.prototype.removeAllListeners = function(e) { var t, n; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n = this._events[e], L(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]); return delete this._events[e], this }, k.prototype.listeners = function(e) { var t; return t = this._events && this._events[e] ? L(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, k.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (L(t)) return 1; if (t) return t.length } return 0 }, k.listenerCount = function(e, t) { return e.listenerCount(t) };
        var me = pe.EventEmitter,
            _e = function(e) {
                function t() { return ae(this, t), ue(this, e.call(this)) } return se(t, e), t.prototype.off = function(e, t) { return t ? this.removeListener(e, t) : e ? this.removeAllListeners(e) : this.removeAllListeners() }, t }(me);
        V.Group = function() {
            function e(e) { var t = l + e;
                s.emit("progress", t / c) }

            function t() { l++, r(), s.emit("progress", l / c), i() }

            function n(e) { r(), s.emit("error", e), i() }

            function i() { return 0 === u.length ? (f = null, void s.emit("complete")) : (f = u.pop(), f.on("progress", e), f.once("loaded", t), f.once("error", n), void f.start()) }

            function r() { f.off("progress", e), f.off("loaded", t), f.off("error", n) }

            function o(e) { return u.push(e), c++, e }

            function a() { c = u.length, i() } var s = new _e,
                u = [],
                l = 0,
                c = 0,
                f = void 0; return (0, p.default)({ on: s.on.bind(s), once: s.once.bind(s), off: s.off.bind(s), add: o, start: a }) }, q.__source = { BufferSource: z, MediaSource: B, MicrophoneSource: G, OscillatorSource: U, ScriptSource: j };
        var ge = Math.PI / 2,
            xe = 2 * Math.PI,
            ye = void 0,
            be = void 0,
            Me = (0, p.default)({ getContext: K, getOfflineContext: Z, cloneBuffer: Q, reverseBuffer: J, ramp: $, getFrequency: ee, microphone: te, timeCode: ne, waveformer: W }),
            we = new ie;
        return we
    })
}, function(e, t, n) { e.exports = { "default": n(181), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(188), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(189), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(190), __esModule: !0 } }, function(e, t) { var n = {}.toString;
    e.exports = function(e) { return n.call(e).slice(8, -1) } }, function(e, t, n) { var i = n(191);
    e.exports = function(e, t, n) { if (i(e), void 0 === t) return e; switch (n) {
            case 1:
                return function(n) { return e.call(t, n) };
            case 2:
                return function(n, i) { return e.call(t, n, i) };
            case 3:
                return function(n, i, r) { return e.call(t, n, i, r) } } return function() { return e.apply(t, arguments) } } }, function(e, t, n) { var i = n(27),
        r = n(20).document,
        o = i(r) && i(r.createElement);
    e.exports = function(e) { return o ? r.createElement(e) : {} } }, function(e, t, n) { e.exports = !n(19) && !n(32)(function() { return 7 != Object.defineProperty(n(86)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { "use strict"; var i = n(51),
        r = n(22),
        o = n(95),
        a = n(26),
        s = n(23),
        u = n(50),
        l = n(198),
        c = n(55),
        f = n(93),
        h = n(28)("iterator"),
        d = !([].keys && "next" in [].keys()),
        v = "@@iterator",
        p = "keys",
        m = "values",
        _ = function() { return this };
    e.exports = function(e, t, n, g, x, y, b) { l(n, t, g); var M, w, E, S = function(e) { if (!d && e in C) return C[e]; switch (e) {
                    case p:
                        return function() { return new n(this, e) };
                    case m:
                        return function() { return new n(this, e) } } return function() { return new n(this, e) } },
            T = t + " Iterator",
            P = x == m,
            A = !1,
            C = e.prototype,
            I = C[h] || C[v] || x && C[x],
            D = I || S(x),
            F = x ? P ? S("entries") : D : void 0,
            k = "Array" == t ? C.entries || I : I; if (k && (E = f(k.call(new e)), E !== Object.prototype && (c(E, T, !0), i || s(E, h) || a(E, h, _))), P && I && I.name !== m && (A = !0, D = function() { return I.call(this) }), i && !b || !d && !A && C[h] || a(C, h, D), u[t] = D, u[T] = _, x)
            if (M = { values: P ? D : S(m), keys: y ? D : S(p), entries: F }, b)
                for (w in M) w in C || o(C, w, M[w]);
            else r(r.P + r.F * (d || A), t, M);
        return M } }, function(e, t, n) { var i = n(40)("meta"),
        r = n(27),
        o = n(23),
        a = n(24).f,
        s = 0,
        u = Object.isExtensible || function() { return !0 },
        l = !n(32)(function() { return u(Object.preventExtensions({})) }),
        c = function(e) { a(e, i, { value: { i: "O" + ++s, w: {} } }) },
        f = function(e, t) { if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!o(e, i)) { if (!u(e)) return "F"; if (!t) return "E";
                c(e) } return e[i].i },
        h = function(e, t) { if (!o(e, i)) { if (!u(e)) return !0; if (!t) return !1;
                c(e) } return e[i].w },
        d = function(e) { return l && v.NEED && u(e) && !o(e, i) && c(e), e },
        v = e.exports = { KEY: i, NEED: !1, fastKey: f, getWeak: h, onFreeze: d } }, function(e, t, n) { var i = n(24),
        r = n(31),
        o = n(33);
    e.exports = n(19) ? Object.defineProperties : function(e, t) { r(e); for (var n, a = o(t), s = a.length, u = 0; s > u;) i.f(e, n = a[u++], t[n]); return e } }, function(e, t, n) { var i = n(94),
        r = n(49).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) { return i(e, r) } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) { var i = n(23),
        r = n(59),
        o = n(56)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) { return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function(e, t, n) { var i = n(23),
        r = n(21),
        o = n(193)(!1),
        a = n(56)("IE_PROTO");
    e.exports = function(e, t) { var n, s = r(e),
            u = 0,
            l = []; for (n in s) n != a && i(s, n) && l.push(n); for (; t.length > u;) i(s, n = t[u++]) && (~o(l, n) || l.push(n)); return l } }, function(e, t, n) { e.exports = n(26) }, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(9); return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e }, r.fromMat4 = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(9); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e }, r.fromValues = function(e, t, n, r, o, a, s, u, l) { var c = new i.ARRAY_TYPE(9); return c[0] = e, c[1] = t, c[2] = n, c[3] = r, c[4] = o, c[5] = a, c[6] = s, c[7] = u, c[8] = l, c }, r.set = function(e, t, n, i, r, o, a, s, u, l) { return e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = o, e[5] = a, e[6] = s, e[7] = u, e[8] = l, e }, r.identity = function(e) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e }, r.transpose = function(e, t) { if (e === t) { var n = t[1],
                i = t[2],
                r = t[5];
            e[1] = t[3], e[2] = t[6], e[3] = n, e[5] = t[7], e[6] = i, e[7] = r } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8]; return e }, r.invert = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            f = c * a - s * l,
            h = -c * o + s * u,
            d = l * o - a * u,
            v = n * f + i * h + r * d; return v ? (v = 1 / v, e[0] = f * v, e[1] = (-c * i + r * l) * v, e[2] = (s * i - r * a) * v, e[3] = h * v, e[4] = (c * n - r * u) * v, e[5] = (-s * n + r * o) * v, e[6] = d * v, e[7] = (-l * n + i * u) * v, e[8] = (a * n - i * o) * v, e) : null }, r.adjoint = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = t[6],
            l = t[7],
            c = t[8]; return e[0] = a * c - s * l, e[1] = r * l - i * c, e[2] = i * s - r * a, e[3] = s * u - o * c, e[4] = n * c - r * u, e[5] = r * o - n * s, e[6] = o * l - a * u, e[7] = i * u - n * l, e[8] = n * a - i * o, e }, r.determinant = function(e) { var t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            o = e[4],
            a = e[5],
            s = e[6],
            u = e[7],
            l = e[8]; return t * (l * o - a * u) + n * (-l * r + a * s) + i * (u * r - o * s) }, r.multiply = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = n[0],
            d = n[1],
            v = n[2],
            p = n[3],
            m = n[4],
            _ = n[5],
            g = n[6],
            x = n[7],
            y = n[8]; return e[0] = h * i + d * a + v * l, e[1] = h * r + d * s + v * c, e[2] = h * o + d * u + v * f, e[3] = p * i + m * a + _ * l, e[4] = p * r + m * s + _ * c, e[5] = p * o + m * u + _ * f, e[6] = g * i + x * a + y * l, e[7] = g * r + x * s + y * c, e[8] = g * o + x * u + y * f, e }, r.mul = r.multiply, r.translate = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = n[0],
            d = n[1]; return e[0] = i, e[1] = r, e[2] = o, e[3] = a, e[4] = s, e[5] = u, e[6] = h * i + d * a + l, e[7] = h * r + d * s + c, e[8] = h * o + d * u + f, e }, r.rotate = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = Math.sin(n),
            d = Math.cos(n); return e[0] = d * i + h * a, e[1] = d * r + h * s, e[2] = d * o + h * u, e[3] = d * a - h * i, e[4] = d * s - h * r, e[5] = d * u - h * o, e[6] = l, e[7] = c, e[8] = f, e }, r.scale = function(e, t, n) { var i = n[0],
            r = n[1]; return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = r * t[3], e[4] = r * t[4], e[5] = r * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e }, r.fromTranslation = function(e, t) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e }, r.fromRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = i, e[1] = n, e[2] = 0, e[3] = -n, e[4] = i, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e }, r.fromScaling = function(e, t) { return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e }, r.fromMat2d = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e }, r.fromQuat = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = n + n,
            s = i + i,
            u = r + r,
            l = n * a,
            c = i * a,
            f = i * s,
            h = r * a,
            d = r * s,
            v = r * u,
            p = o * a,
            m = o * s,
            _ = o * u; return e[0] = 1 - f - v, e[3] = c - _, e[6] = h + m, e[1] = c + _, e[4] = 1 - l - v, e[7] = d - p, e[2] = h - m, e[5] = d + p, e[8] = 1 - l - f, e }, r.normalFromMat4 = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            f = t[9],
            h = t[10],
            d = t[11],
            v = t[12],
            p = t[13],
            m = t[14],
            _ = t[15],
            g = n * s - i * a,
            x = n * u - r * a,
            y = n * l - o * a,
            b = i * u - r * s,
            M = i * l - o * s,
            w = r * l - o * u,
            E = c * p - f * v,
            S = c * m - h * v,
            T = c * _ - d * v,
            P = f * m - h * p,
            A = f * _ - d * p,
            C = h * _ - d * m,
            I = g * C - x * A + y * P + b * T - M * S + w * E; return I ? (I = 1 / I, e[0] = (s * C - u * A + l * P) * I, e[1] = (u * T - a * C - l * S) * I, e[2] = (a * A - s * T + l * E) * I, e[3] = (r * A - i * C - o * P) * I, e[4] = (n * C - r * T + o * S) * I, e[5] = (i * T - n * A - o * E) * I, e[6] = (p * w - m * M + _ * b) * I, e[7] = (m * y - v * w - _ * x) * I, e[8] = (v * M - p * y + _ * g) * I, e) : null }, r.str = function(e) { return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")" }, r.frob = function(e) { return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2)) }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e }, r.sub = r.subtract, r.multiplyScalar = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e }, r.multiplyScalarAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e[6] = t[6] + n[6] * i, e[7] = t[7] + n[7] * i, e[8] = t[8] + n[8] * i, e }, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = t[0],
            d = t[1],
            v = t[2],
            p = t[3],
            m = t[4],
            _ = t[5],
            g = e[6],
            x = t[7],
            y = t[8]; return Math.abs(n - h) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(r - d) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(o - v) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(a - p) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(s - m) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(u - _) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(_)) && Math.abs(l - g) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(c - x) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(f - y) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(y)) }, e.exports = r }, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(3); return e[0] = 0, e[1] = 0, e[2] = 0, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(3); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t }, r.fromValues = function(e, t, n) { var r = new i.ARRAY_TYPE(3); return r[0] = e, r[1] = t, r[2] = n, r }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e }, r.set = function(e, t, n, i) { return e[0] = t, e[1] = n, e[2] = i, e }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e }, r.sub = r.subtract, r.multiply = function(e, t, n) { return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e }, r.mul = r.multiply, r.divide = function(e, t, n) { return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e }, r.div = r.divide, r.ceil = function(e, t) { return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e }, r.floor = function(e, t) { return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e }, r.min = function(e, t, n) { return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e }, r.max = function(e, t, n) { return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e }, r.round = function(e, t) { return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e }, r.scale = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e }, r.scaleAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e }, r.distance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1],
            r = t[2] - e[2]; return Math.sqrt(n * n + i * i + r * r) }, r.dist = r.distance, r.squaredDistance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1],
            r = t[2] - e[2]; return n * n + i * i + r * r }, r.sqrDist = r.squaredDistance, r.length = function(e) { var t = e[0],
            n = e[1],
            i = e[2]; return Math.sqrt(t * t + n * n + i * i) }, r.len = r.length, r.squaredLength = function(e) { var t = e[0],
            n = e[1],
            i = e[2]; return t * t + n * n + i * i }, r.sqrLen = r.squaredLength, r.negate = function(e, t) { return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e }, r.inverse = function(e, t) { return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e }, r.normalize = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = n * n + i * i + r * r; return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o), e }, r.dot = function(e, t) { return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] }, r.cross = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = n[0],
            s = n[1],
            u = n[2]; return e[0] = r * u - o * s, e[1] = o * a - i * u, e[2] = i * s - r * a, e }, r.lerp = function(e, t, n, i) { var r = t[0],
            o = t[1],
            a = t[2]; return e[0] = r + i * (n[0] - r), e[1] = o + i * (n[1] - o), e[2] = a + i * (n[2] - a), e }, r.hermite = function(e, t, n, i, r, o) { var a = o * o,
            s = a * (2 * o - 3) + 1,
            u = a * (o - 2) + o,
            l = a * (o - 1),
            c = a * (3 - 2 * o); return e[0] = t[0] * s + n[0] * u + i[0] * l + r[0] * c, e[1] = t[1] * s + n[1] * u + i[1] * l + r[1] * c, e[2] = t[2] * s + n[2] * u + i[2] * l + r[2] * c, e }, r.bezier = function(e, t, n, i, r, o) { var a = 1 - o,
            s = a * a,
            u = o * o,
            l = s * a,
            c = 3 * o * s,
            f = 3 * u * a,
            h = u * o; return e[0] = t[0] * l + n[0] * c + i[0] * f + r[0] * h, e[1] = t[1] * l + n[1] * c + i[1] * f + r[1] * h, e[2] = t[2] * l + n[2] * c + i[2] * f + r[2] * h, e }, r.random = function(e, t) { t = t || 1; var n = 2 * i.RANDOM() * Math.PI,
            r = 2 * i.RANDOM() - 1,
            o = Math.sqrt(1 - r * r) * t; return e[0] = Math.cos(n) * o, e[1] = Math.sin(n) * o, e[2] = r * t, e }, r.transformMat4 = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = n[3] * i + n[7] * r + n[11] * o + n[15]; return a = a || 1, e[0] = (n[0] * i + n[4] * r + n[8] * o + n[12]) / a, e[1] = (n[1] * i + n[5] * r + n[9] * o + n[13]) / a, e[2] = (n[2] * i + n[6] * r + n[10] * o + n[14]) / a, e }, r.transformMat3 = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2]; return e[0] = i * n[0] + r * n[3] + o * n[6], e[1] = i * n[1] + r * n[4] + o * n[7], e[2] = i * n[2] + r * n[5] + o * n[8], e }, r.transformQuat = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = n[0],
            s = n[1],
            u = n[2],
            l = n[3],
            c = l * i + s * o - u * r,
            f = l * r + u * i - a * o,
            h = l * o + a * r - s * i,
            d = -a * i - s * r - u * o; return e[0] = c * l + d * -a + f * -u - h * -s, e[1] = f * l + d * -s + h * -a - c * -u, e[2] = h * l + d * -u + c * -s - f * -a, e }, r.rotateX = function(e, t, n, i) { var r = [],
            o = []; return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], o[0] = r[0], o[1] = r[1] * Math.cos(i) - r[2] * Math.sin(i), o[2] = r[1] * Math.sin(i) + r[2] * Math.cos(i), e[0] = o[0] + n[0], e[1] = o[1] + n[1], e[2] = o[2] + n[2], e }, r.rotateY = function(e, t, n, i) { var r = [],
            o = []; return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], o[0] = r[2] * Math.sin(i) + r[0] * Math.cos(i), o[1] = r[1], o[2] = r[2] * Math.cos(i) - r[0] * Math.sin(i), e[0] = o[0] + n[0], e[1] = o[1] + n[1], e[2] = o[2] + n[2], e }, r.rotateZ = function(e, t, n, i) { var r = [],
            o = []; return r[0] = t[0] - n[0], r[1] = t[1] - n[1], r[2] = t[2] - n[2], o[0] = r[0] * Math.cos(i) - r[1] * Math.sin(i), o[1] = r[0] * Math.sin(i) + r[1] * Math.cos(i), o[2] = r[2], e[0] = o[0] + n[0], e[1] = o[1] + n[1], e[2] = o[2] + n[2], e }, r.forEach = function() { var e = r.create(); return function(t, n, i, r, o, a) { var s, u; for (n || (n = 3), i || (i = 0), u = r ? Math.min(r * n + i, t.length) : t.length, s = i; u > s; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], o(e, e, a), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2]; return t } }(), r.angle = function(e, t) { var n = r.fromValues(e[0], e[1], e[2]),
            i = r.fromValues(t[0], t[1], t[2]);
        r.normalize(n, n), r.normalize(i, i); var o = r.dot(n, i); return o > 1 ? 0 : Math.acos(o) }, r.str = function(e) { return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")" }, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = t[0],
            s = t[1],
            u = t[2]; return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - s) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(o - u) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) }, e.exports = r }, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(4); return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(4); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t }, r.fromValues = function(e, t, n, r) { var o = new i.ARRAY_TYPE(4); return o[0] = e, o[1] = t, o[2] = n, o[3] = r, o }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e }, r.set = function(e, t, n, i, r) { return e[0] = t, e[1] = n, e[2] = i, e[3] = r, e }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e }, r.sub = r.subtract, r.multiply = function(e, t, n) { return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e }, r.mul = r.multiply, r.divide = function(e, t, n) { return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e }, r.div = r.divide, r.ceil = function(e, t) { return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e }, r.floor = function(e, t) { return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e }, r.min = function(e, t, n) { return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e }, r.max = function(e, t, n) { return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e }, r.round = function(e, t) { return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e }, r.scale = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e }, r.scaleAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e }, r.distance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1],
            r = t[2] - e[2],
            o = t[3] - e[3]; return Math.sqrt(n * n + i * i + r * r + o * o) }, r.dist = r.distance, r.squaredDistance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1],
            r = t[2] - e[2],
            o = t[3] - e[3]; return n * n + i * i + r * r + o * o }, r.sqrDist = r.squaredDistance, r.length = function(e) { var t = e[0],
            n = e[1],
            i = e[2],
            r = e[3]; return Math.sqrt(t * t + n * n + i * i + r * r) }, r.len = r.length, r.squaredLength = function(e) { var t = e[0],
            n = e[1],
            i = e[2],
            r = e[3]; return t * t + n * n + i * i + r * r }, r.sqrLen = r.squaredLength, r.negate = function(e, t) { return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e }, r.inverse = function(e, t) { return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e }, r.normalize = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = n * n + i * i + r * r + o * o; return a > 0 && (a = 1 / Math.sqrt(a), e[0] = n * a, e[1] = i * a, e[2] = r * a, e[3] = o * a), e }, r.dot = function(e, t) { return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3] }, r.lerp = function(e, t, n, i) { var r = t[0],
            o = t[1],
            a = t[2],
            s = t[3]; return e[0] = r + i * (n[0] - r), e[1] = o + i * (n[1] - o), e[2] = a + i * (n[2] - a), e[3] = s + i * (n[3] - s), e }, r.random = function(e, t) { return t = t || 1, e[0] = i.RANDOM(), e[1] = i.RANDOM(), e[2] = i.RANDOM(), e[3] = i.RANDOM(), r.normalize(e, e), r.scale(e, e, t), e }, r.transformMat4 = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3]; return e[0] = n[0] * i + n[4] * r + n[8] * o + n[12] * a, e[1] = n[1] * i + n[5] * r + n[9] * o + n[13] * a, e[2] = n[2] * i + n[6] * r + n[10] * o + n[14] * a, e[3] = n[3] * i + n[7] * r + n[11] * o + n[15] * a, e }, r.transformQuat = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = n[0],
            s = n[1],
            u = n[2],
            l = n[3],
            c = l * i + s * o - u * r,
            f = l * r + u * i - a * o,
            h = l * o + a * r - s * i,
            d = -a * i - s * r - u * o; return e[0] = c * l + d * -a + f * -u - h * -s, e[1] = f * l + d * -s + h * -a - c * -u, e[2] = h * l + d * -u + c * -s - f * -a, e[3] = t[3], e }, r.forEach = function() { var e = r.create(); return function(t, n, i, r, o, a) { var s, u; for (n || (n = 4), i || (i = 0), u = r ? Math.min(r * n + i, t.length) : t.length, s = i; u > s; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], o(e, e, a), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3]; return t } }(), r.str = function(e) { return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")" }, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = t[0],
            u = t[1],
            l = t[2],
            c = t[3]; return Math.abs(n - s) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - u) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - l) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) }, e.exports = r }, function(e, t) { e.exports = "// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}" }, function(e, t) { e.exports = "// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	vec3 pos      = aVertexPosition * scale;\n	pos           += position;\n	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	\n	vTextureCoord = aTextureCoord;\n	vNormal       = normalize(uNormalMatrix * aNormal);\n}" }, function(e, t) { e.exports = "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}" }, function(e, t) { e.exports = "// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	mat4 matView = uViewMatrix;\n	matView[3][0] = 0.0;\n	matView[3][1] = 0.0;\n	matView[3][2] = 0.0;\n	\n	gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n	vTextureCoord = aTextureCoord;\n	\n	vVertex = aVertexPosition;\n	vNormal = aNormal;\n}" }, function(e, t) { e.exports = "// eye.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uModelViewMatrixInverse;\nuniform vec3 uPosition;\nuniform float uScale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	vec3 position = uModelViewMatrixInverse * (aVertexPosition * uScale);\n    gl_Position = uProjectionMatrix * uViewMatrix * vec4(position + uPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}\n" }, function(e, t) { "use strict";
    e.exports = function() { try { return !!new Blob } catch (e) { return !1 } }() }, function(e, t, n) { "use strict"; var i = n(65),
        r = n(107),
        o = 0;
    e.exports = function a(e) { var t, n = {},
            s = [],
            u = [],
            l = 0,
            c = 0,
            f = {},
            h = function(n) { if (Array.isArray(n)) return n.forEach(h), t; var i, o = !!n.assets && Array.isArray(n.assets); return i = o ? a(m(n, e)) : r(m(n, e)), i.once("destroy", b), u.push(i), f[i.id] = i, t },
            d = function(e) { return arguments.length ? n[e] : s },
            v = function(e) { if (d(e)) return d(e); var t = null; return Object.keys(f).some(function(n) { return t = f[n].find && f[n].find(e), !!t }), t },
            p = function(e) { return e && e.split("?")[0].split(".").pop().toLowerCase() },
            m = function(e, t) { if ("string" == typeof e) { var n = e;
                    e = { url: n } } return void 0 === e.isTouchLocked && (e.isTouchLocked = t.isTouchLocked), void 0 === e.blob && (e.blob = t.blob), void 0 === e.basePath && (e.basePath = t.basePath), e.id = e.id || e.url || String(++o), e.type = e.type || p(e.url), e.crossOrigin = e.crossOrigin || t.crossOrigin, e.webAudioContext = e.webAudioContext || t.webAudioContext, e.log = t.log, e },
            _ = function() { return c = u.length, u.forEach(function(e) { e.on("progress", g).once("complete", x).once("error", y).start() }), u = [], t },
            g = function(e) { var n = l + e;
                t.emit("progress", n / c) },
            x = function(e, i, r) { Array.isArray(e) && (e = { id: i, file: e, type: r }), l++, t.emit("progress", l / c), n[e.id] = e.file, s.push(e), t.emit("childcomplete", e), M() },
            y = function(e) { c--, t.listeners("error").length && t.emit("error", e), M() },
            b = function(e) { f[e] = null, delete f[e], n[e] = null, delete n[e], s.some(function(t, n) { return t.id === e ? (s.splice(n, 1), !0) : void 0 }) },
            M = function() { l >= c && t.emit("complete", s, e.id, "group") },
            w = function() { for (; u.length;) u.pop().destroy(); return t.off("error"), t.off("progress"), t.off("complete"), s = [], n = {}, e.webAudioContext = null, c = 0, l = 0, Object.keys(f).forEach(function(e) { f[e].destroy() }), f = {}, t.emit("destroy", t.id), t }; return t = Object.create(i.prototype, { _events: { value: {} }, id: { get: function() { return e.id } }, add: { value: h }, start: { value: _ }, get: { value: d }, find: { value: v }, getLoader: { value: function(e) { return f[e] } }, loaded: { get: function() { return l >= c } }, file: { get: function() { return s } }, destroy: { value: w } }), e = m(e || {}, { basePath: "", blob: !1, touchLocked: !1, crossOrigin: null, webAudioContext: null, log: !1 }), Array.isArray(e.assets) && h(e.assets), Object.freeze(t) } }, function(e, t, n) { "use strict"; var i = n(105);
    i.stats = n(66), e.exports = i }, function(e, t, n) {
    "use strict";
    var i = n(65),
        r = n(104),
        o = n(66);
    e.exports = function(e) {
        var t, n, a, s, u, l, c = e.id,
            f = e.basePath || "",
            h = e.url,
            d = e.type,
            v = e.crossOrigin,
            p = e.isTouchLocked,
            m = e.blob && r,
            _ = e.webAudioContext,
            g = e.log,
            x = function() { switch (s = Date.now(), d) {
                    case "json":
                        S(); break;
                    case "jpg":
                    case "png":
                    case "gif":
                    case "webp":
                        T(); break;
                    case "mp3":
                    case "ogg":
                    case "opus":
                    case "wav":
                    case "m4a":
                        D(); break;
                    case "ogv":
                    case "mp4":
                    case "webm":
                    case "hls":
                        F(); break;
                    case "bin":
                    case "binary":
                        b("arraybuffer"); break;
                    case "txt":
                    case "text":
                        b("text"); break;
                    default:
                        throw "AssetsLoader ERROR: Unknown type for file with URL: " + f + h + " (" + d + ")" } },
            y = function(e) { e && (l = { id: c, file: e, type: d }, t.emit("progress", 1), t.emit("complete", l, c, d), O()) },
            b = function(e, t) { n = t || w, a = new XMLHttpRequest, a.open("GET", f + h, !0), a.responseType = e, a.addEventListener("progress", M), a.addEventListener("load", n), a.addEventListener("error", R), a.send() },
            M = function(e) { e.lengthComputable && t.emit("progress", e.loaded / e.total) },
            w = function() { E() && y(a.response) },
            E = function() { return a && a.status < 400 ? (o.update(a, s, h, g), !0) : (R(a && a.statusText), !1) },
            S = function() { b("json", function() { if (E()) { var e = a.response; "string" == typeof e && (e = JSON.parse(e)), y(e) } }) },
            T = function() { m ? C() : P() },
            P = function() { a = new Image, v && (a.crossOrigin = "anonymous"), a.addEventListener("error", R, !1), a.addEventListener("load", A, !1), a.src = f + h },
            A = function() { window.clearTimeout(u), y(a) },
            C = function() { b("blob", function() { E() && (a = new Image, a.addEventListener("error", R, !1), a.addEventListener("load", I, !1), a.src = window.URL.createObjectURL(a.response)) }) },
            I = function() { window.URL.revokeObjectURL(a.src), y(a) },
            D = function() { _ ? k() : L("audio") },
            F = function() { m ? b("blob") : L("video") },
            k = function() { b("arraybuffer", function() { E() && _.decodeAudioData(a.response, function(e) { a = null, y(e) }, function(e) { R(e) }) }) },
            L = function(e) {
                a = document.createElement(e), p || (window.clearTimeout(u), u = window.setTimeout(A, 2e3), a.addEventListener("canplaythrough", A, !1)),
                    a.addEventListener("error", R, !1), a.preload = "auto", a.src = f + h, a.load(), p && y(a)
            },
            R = function(e) { window.clearTimeout(u); var n = e; if (a && a.tagName && a.error) { var i = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"];
                    n = "MediaError: " + i[a.error.code] + " " + a.src } else a && a.statusText ? n = a.statusText : e && e.message ? n = e.message : e && e.type && (n = e.type);
                t.emit("error", 'Error loading "' + f + h + '" ' + n), N() },
            O = function() { t.off("error"), t.off("progress"), t.off("complete"), a && (a.removeEventListener("progress", M), a.removeEventListener("load", n), a.removeEventListener("error", R), a.removeEventListener("load", A), a.removeEventListener("canplaythrough", A), a.removeEventListener("load", I)) },
            N = function() { O(), a && a.abort && a.readyState < 4 && a.abort(), a = null, _ = null, l = null, window.clearTimeout(u), t.emit("destroy", c) };
        return t = Object.create(i.prototype, { _events: { value: {} }, id: { value: e.id }, start: { value: x }, loaded: { get: function() { return !!l } }, file: { get: function() { return l } }, destroy: { value: N } }), Object.freeze(t)
    }
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "updateCamera", value: function(e) { this._frameData = e } }, { key: "setEye", value: function(e) { this._projection = this._frameData[e + "ProjectionMatrix"], this._matrix = this._frameData[e + "ViewMatrix"] } }]), t }(v.Camera);
    t.default = p, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(8),
        _ = (i(m), n(116)),
        g = i(_),
        x = n(118),
        y = i(x),
        b = n(157),
        M = i(b),
        w = n(79),
        E = i(w),
        S = n(115),
        T = i(S),
        P = n(117),
        A = i(P),
        C = n(114),
        I = i(C),
        D = n(164),
        F = i(D),
        k = n(154),
        L = i(k),
        R = n(163),
        O = i(R),
        N = n(159),
        V = i(N),
        z = n(165),
        B = i(z),
        G = n(128),
        U = i(G),
        j = n(71),
        X = i(j),
        q = n(129),
        Y = i(q),
        H = n(11),
        W = i(H),
        K = n(69),
        Z = i(K),
        Q = n(108),
        J = i(Q),
        $ = n(153),
        ee = i($),
        te = n(113),
        ne = i(te),
        ie = n(112),
        re = i(ie),
        oe = n(111),
        ae = i(oe),
        se = n(152),
        ue = i(se),
        le = n(67),
        ce = i(le),
        fe = n(259),
        he = i(fe),
        de = n(72),
        ve = i(de),
        pe = Math.PI / 180,
        me = v.GL.isMobile ? .007 : .0035,
        _e = v.GL.isMobile ? .004 : .002,
        ge = !1,
        xe = function(e, t, n, i) { v.GL.scissor(e, t, n, i), v.GL.viewport(e, t, n, i) },
        ye = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this));
                v.GL.enableAlphaBlending(); var n = 45 * pe;
                e.camera.setPerspective(Math.PI / 4, v.GL.aspectRatio, .1, 200), e.orbitalControl.radius.setTo(10), e.orbitalControl.radius.easing = .02, e.orbitalControl.radius.value = 7; var i = ce.default[0];
                e.orbitalControl.rx.setTo(i.rx), e.orbitalControl.ry.setTo(i.ry), e.orbitalControl.center[1] = hasVR ? 0 : 2, e.orbitalControl.rx.limit(.3, Math.PI / 2 - .75), e.orbitalControl.radius.limit(3, 30), e.orbitalControl.lock(), e.eyeX = 0, e.eyeY = 0, e.eyeZ = 0, e._hasPostEffect = !v.GL.isMobile, e._postEffectOffset = new p.default.TweenNumber(1, "expInOut", .01), e._hasFormFinalShape = !1; return e.cameraYOffset = hasVR ? -3 : 0, e.time = 255 * Math.random(), e.cameraOffsetX = new p.default.TweenNumber(i.x * W.default.terrainSize / 2, "cubicInOut", me), e.cameraOffsetY = new p.default.TweenNumber(e.cameraYOffset, "cubicInOut", me), e.cameraOffsetZ = new p.default.TweenNumber(i.z * W.default.terrainSize / 2, "cubicInOut", me), e.cameraReflection = new p.default.CameraPerspective, e.cameraReflection.setPerspective(n, v.GL.aspectRatio, .1, 100), e.cameraVive = new J.default, e._pointTarget = [i.tx * W.default.terrainSize / 2, i.ty, i.tz * W.default.terrainSize / 2], e._currPointTarget = vec3.create(), e._prevPointTarget = vec3.fromValues(i.tx * W.default.terrainSize / 2, i.ty, i.tz * W.default.terrainSize / 2), e._tweenPointTarget = new p.default.TweenNumber(0, "cubicInOut", me), e._stop = 0, e._hasTouchControl = !0, e._spacePressed = !1, e.resize(), hasVR && e.toRender(), e.delayedCalls = new ve.default, window.addEventListener("keydown", function(t) { e._hasOpened && (39 === t.keyCode ? e.nextStop() : 32 === t.keyCode && (e._stop == ce.default.length - 1 ? e._hasFormFinalShape ? e.nextStop() : e._spacePressed = !0 : e.nextStop())) }), window.addEventListener("keyup", function(t) { 32 === t.keyCode && (e._spacePressed = !1) }), v.GL.canvas.addEventListener("mousedown", function(t) { return e._enableCameraTouchControl() }), v.GL.canvas.addEventListener("touchstart", function(t) { return e._enableCameraTouchControl() }), e._vTitle.setPosition(e._pointTarget), e._pressBar = document.body.querySelector(".bar"), e._hasOpened = !1, p.default.Scheduler.delay(function() { e._hasOpened = !0, ee.default.setStop("stop-0"), document.body.classList.add("opened") }, null, 4500), e._hasVRNextPressed = !1, e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_enableCameraTouchControl", value: function() { if (!this._hasTouchControl) { var e = this.orbitalControl.rx.value,
                            t = this.orbitalControl.ry.value;
                        this.orbitalControl.rx = new p.default.EaseNumber(e), this.orbitalControl.ry = new p.default.EaseNumber(t), this.orbitalControl.rx.limit(.3, Math.PI / 2 - .75), this.orbitalControl.radius.limit(3, 30), this._hasTouchControl = !0 } } }, { key: "_initTextures", value: function() { var e = p.default.HDRLoader.parse(getAsset("irr_posx")),
                        t = p.default.HDRLoader.parse(getAsset("irr_negx")),
                        n = p.default.HDRLoader.parse(getAsset("irr_posy")),
                        i = p.default.HDRLoader.parse(getAsset("irr_negy")),
                        r = p.default.HDRLoader.parse(getAsset("irr_posz")),
                        o = p.default.HDRLoader.parse(getAsset("irr_negz"));
                    this._textureIrr = new p.default.GLCubeTexture([e, t, n, i, r, o]), this._textureRad = p.default.GLCubeTexture.parseDDS(getAsset("radiance")), this._textureStar = new v.GLTexture(getAsset(v.GL.isMobile ? "starsmapMobile" : "starsmap")), this._textureNoise = new v.GLTexture(getAsset("noise")), this._textureGradient = new v.GLTexture(getAsset("gradient")), this._textureGradientMap = new v.GLTexture(getAsset("gradientMap")), this._resetFrameBuffer() } }, { key: "_initViews", value: function() { this.isFinished = !1, this.finishAnimating = !1, this._bCopy = new p.default.BatchCopy, this._bSky = new p.default.BatchSky(80), this._bBall = new p.default.BatchBall, this._vTerrain = new g.default, this._vWater = new y.default, this._vFilmGrain = new T.default, this._vTrees = new A.default, this._vFg = new I.default, this._vTrunk = new F.default, this._vEyeLeft = new L.default, this._vEyeRight = new L.default, this._vNothing = new M.default, this._vTitle = new O.default, this._vVignette = new B.default, this._vPress = new V.default, this._subParticles = new ne.default(this), this._subLines = new re.default(this), this._subFinale = new ae.default(this), this._composer = new U.default(v.GL.width, v.GL.height), this._passSoftLight = new X.default(he.default), this._passSoftLight.bindTexture("textureGradient", this._textureGradient), this._passSoftLight.bindTexture("textureGradientMap", this._textureGradientMap), this._passFxaa = new Y.default, this._composer.addPass(this._passSoftLight), this._composer.addPass(this._passFxaa), this.lightSound = E.default.createSound({ src: ["./assets/sounds/light.mp3"], volume: 0, loop: !0 }) } }, { key: "_getReflectionMatrix", value: function() { var e = ge ? this.cameraVive : this.camera,
                        t = ge ? 0 : .15,
                        n = Math.cos(1.3265432 * Math.sin(.3987454 * this.time)),
                        i = Math.sin(.5789423 * Math.sin(this.time)),
                        r = Math.cos(.5789423 * Math.cos(.67894 * this.time));
                    this.positionOffset = vec3.fromValues(this.cameraOffsetX.value + n * t, this.cameraOffsetY.value + i * t, this.cameraOffsetZ.value + r * t), mat4.translate(e.viewMatrix, e.viewMatrix, this.positionOffset), (0, ue.default)(e, W.default.seaLevel, this.cameraReflection) } }, { key: "render", value: function() { this.delayedCalls.update(), this.time += .01, window.hasVR || this.toRender() } }, { key: "nextStop", value: function() { if (!(this.finishAnimating || this.timerBeforeNext > 0))
                        if (this.timerBeforeNext = 120, this.isFinished) ee.default.setStop("stop-final"), this._finish(), this.finishAnimating = !0;
                        else { var e = this._stop + 1;
                            e >= ce.default.length - 1 && (this._subFinale.isReady = !0, this.isFinished = !0), this._gotoStop(e) } } }, { key: "pressAndHold", value: function(e, t) { this._stop === ce.default.length - 1 && (this._pressBar.style.width = Math.floor(100 * e) + "%", t && this.finishFinalShape()) } }, { key: "restart", value: function() { var e = this;
                    this.reset(), p.default.Scheduler.delay(function() { ee.default.clearAllstops(), e._gotoStop(1) }, null, 300) } }, { key: "_finish", value: function() { this.delayedCalls.clear(), this._vEyeLeft.hide(!0), this._vEyeLeft.hide(!0); var e = void 0;
                    e = vrPresenting ? { x: 0, z: -.15, tx: -.020370370370370372, ty: 2.543168085871387, tz: 4.612182455576796, rx: .458826170582594, ry: .085 } : { x: 0, z: -0, tx: -.020370370370370372, ty: 2.543168085871387, tz: .6121824555767954, rx: .458826170582594, ry: .085 }, this._pointTarget = [e.tx * W.default.terrainSize / 2, e.ty, e.tz * W.default.terrainSize / 2];
                    this._subLines.goTo([0, -1, 0], !0);
                    this._vPress.open(), this._hasTouchControl = !1; var t = this.orbitalControl.rx.value,
                        n = this.orbitalControl.ry.value;
                    this.orbitalControl.rx = new p.default.TweenNumber(t, "expInOut", _e), this.orbitalControl.ry = new p.default.TweenNumber(n, "expInOut", _e), this.orbitalControl.rx.limit(.3, Math.PI / 2 - .75), this.cameraOffsetX.value = e.x * W.default.terrainSize / 2, this.cameraOffsetZ.value = e.z * W.default.terrainSize / 2, this.orbitalControl.rx.value = e.rx, this.orbitalControl.ry.value = e.ry } }, { key: "finishFinalShape", value: function() { this._hasFormFinalShape || (this._hasFormFinalShape = !0, ee.default.setStop("complete"), this._vPress.close()) } }, { key: "_gotoStop", value: function(e) { var t = this;
                    this.delayedCalls.clear(), this._postEffectOffset.value = 0, this.orbitalControl.lock(!1), this._vTitle.close(), this._hasFormFinalShape = !1, this._hasTouchControl = !1; var n = this.orbitalControl.rx.value,
                        i = this.orbitalControl.ry.value;
                    this.orbitalControl.rx = new p.default.TweenNumber(n, "expInOut", _e), this.orbitalControl.ry = new p.default.TweenNumber(i, "expInOut", _e), this.orbitalControl.rx.limit(.3, Math.PI / 2 - .75), this._stop = e; var r = ce.default[this._stop];
                    vec3.copy(this._prevPointTarget, this._pointTarget), this._pointTarget = [r.tx * W.default.terrainSize / 2, r.ty, r.tz * W.default.terrainSize / 2], this._tweenPointTarget.setTo(0), this._tweenPointTarget.value = 1, this._subLines.goTo([this._pointTarget[0], -this._pointTarget[1], -this._pointTarget[2]], !1), this.cameraOffsetX.value = r.x * W.default.terrainSize / 2, this.cameraOffsetZ.value = r.z * W.default.terrainSize / 2, this.orbitalControl.rx.value = r.rx, this.orbitalControl.ry.value = r.ry; var o = "stop-" + this._stop;
                    ee.default.setStop(o), this.delayedCalls.add(function() { t._vEyeLeft.show(), t._vEyeRight.show() }, 1e3 * (me + _e / 2)) } }, { key: "setLightVolume", value: function(e) { this.lightSound.volume = e } }, { key: "fadeOutLightVolume", value: function() { this.lightSound.fade(0, 4) } }, { key: "playLightSound", value: function() { this.lightSound.play() } }, { key: "stopLightSound", value: function() { this.lightSound.pause() } }, { key: "fadeInLightVolume", value: function() { this.lightSound.play(), this.lightSound.volume = 0, this.lightSound.fade(1, 1) } }, { key: "toRender", value: function() { var e = this;
                    vec3.lerp(this._currPointTarget, this._prevPointTarget, this._pointTarget, this._tweenPointTarget.value), ge = hasVR && vrPresenting; var t = []; if (hasVR) { t = Z.default.gamePads; for (var n = !1, i = 0; i < t.length; i++) { var r = t[i].buttons; if (r[0].pressed) { n = !0; break } }!this._hasVRNextPressed && n && (this._hasFormFinalShape ? this.restart() : this.nextStop()), this._hasVRNextPressed && n ? this._stop == ce.default.length - 1 && (this._hasFormFinalShape ? this.nextStop() : this._spacePressed = !0) : this._spacePressed = !1, this._hasVRNextPressed = n } if (this._postEffectOffset.value <= 1e-4 && (this._hasPostEffect = !1), this.timerBeforeNext > 0 && this.timerBeforeNext--, this._subParticles.update(t, this.positionOffset), this._subLines.update(), this._subFinale.update(), W.default.clipY = W.default.seaLevel, v.GL.clear(0, 0, 0, 0), hasVR && Z.default.vrDisplay.requestAnimationFrame(function() { return e.toRender() }), ge) { v.GL.enable(v.GL.SCISSOR_TEST); var o = v.GL.width / 2,
                            a = Z.default.getFrameData();
                        this.cameraVive.updateCamera(a), this.cameraVive.setEye("left"), this._getReflectionMatrix(), xe(0, 0, o, v.GL.height), v.GL.setMatrices(this.cameraReflection), this._fboReflection.bind(), v.GL.clear(0, 0, 0, 0), this._renderScene(), this._fboReflection.unbind(), xe(0, 0, o, v.GL.height), v.GL.setMatrices(this.cameraVive), this._renderScene(!0), this.cameraVive.setEye("right"), this._getReflectionMatrix(), xe(o, 0, o, v.GL.height), v.GL.setMatrices(this.cameraReflection), this._fboReflection.bind(), v.GL.clear(0, 0, 0, 0), this._renderScene(), this._fboReflection.unbind(), xe(o, 0, o, v.GL.height), v.GL.setMatrices(this.cameraVive), this._renderScene(!0), v.GL.disable(v.GL.SCISSOR_TEST), Z.default.submitFrame() } else this._getReflectionMatrix(), v.GL.setMatrices(this.cameraReflection), this._renderReflection(), this._hasPostEffect && (this._fboRender.bind(), v.GL.clear(0, 0, 0, 0)), v.GL.setMatrices(this.camera), this._renderScene(!0), this._hasPostEffect && (this._fboRender.unbind(), this._passSoftLight.uniform("offset", "float", this._postEffectOffset.value), this._composer.render(this._fboRender.getTexture()), this._bCopy.draw(this._composer.getTexture())), v.GL.enableAdditiveBlending(), this._vFilmGrain.render(), v.GL.enableAlphaBlending(), v.GL.disable(v.GL.DEPTH_TEST), this._vVignette.render(), v.GL.enable(v.GL.DEPTH_TEST); var s = 512;
                    v.GL.viewport(window.innerWidth / 2, 0, s, s / v.GL.aspectRatio * 2) } }, { key: "_renderScene", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0]; if (e ? (W.default.clipY = 999, W.default.clipDir = 1) : W.default.clipDir = -1, this._bSky.draw(this._textureStar), this._vFg.render(), e && !window.vrPresenting && this._vWater.render(this._fboReflection.getTexture()), this._vTerrain.render(this._textureRad, this._textureIrr, this._textureNoise, this._textureStar), this._vTrees.render(this._textureRad, this._textureIrr, this._textureNoise, this._textureStar), this._vTrunk.render(this._textureRad, this._textureIrr, this._textureStar), this._subLines.render(this.orbitalControl.position), this.isFinished && this._subFinale.render(), v.GL.enableAdditiveBlending(), v.GL.disable(v.GL.DEPTH_TEST), this._vEyeLeft.render([this.eyeX, this.eyeY, this.eyeZ], this._pointTarget), this._vEyeRight.render([this.eyeX, this.eyeY, this.eyeZ], this._pointTarget), hasVR)
                        for (var t = Z.default.gamePads, n = vec3.create(), i = .25, r = 0; r < t.length; r++) { var o = t[r];
                            vec3.sub(n, o.position, this.positionOffset); for (var a = [.1, .1, .1], s = 0; 3 > s; s++) o.buttons[s].pressed && (a[s] = .2);
                            this._bBall.draw(n, [i, i, i], a, .5) }
                    v.GL.enableAlphaBlending(), v.GL.enable(v.GL.DEPTH_TEST), this._subParticles.render(), this._vTitle.render(), hasVR && this._vPress.render(), this._vNothing.render() } }, { key: "reset", value: function() { this.delayedCalls.clear(), this._hasFormFinalShape = !1, this._stop = 0, this._hasTouchControl = !0, this._spacePressed = !1, this.isFinished = !1, this.finishAnimating = !1, this.lightSound.stop(), this._vEyeLeft.reset(), this._vEyeRight.reset(), this._subLines.reset(), this._subFinale.reset() } }, { key: "_renderReflection", value: function() { this._fboReflection.bind(), v.GL.clear(0, 0, 0, 0), this._renderScene(), this._fboReflection.unbind() } }, { key: "setVR", value: function() {} }, { key: "resize", value: function() { ge = hasVR && vrPresenting; var e = ge ? 2 : 1;
                    v.GL.setSize(window.innerWidth * e, window.innerHeight * e), ge || (this.camera.setAspectRatio(v.GL.aspectRatio), this.cameraReflection.setAspectRatio(v.GL.aspectRatio)), this._composer = new U.default(v.GL.width, v.GL.height), this._composer.addPass(this._passSoftLight), this._composer.addPass(this._passFxaa), this._resetFrameBuffer() } }, { key: "_resetFrameBuffer", value: function() { var e = v.GL.isMobile ? .5 : 1;
                    this._fboReflection = new p.default.FrameBuffer((ge ? v.GL.width / 2 : v.GL.width) * e, v.GL.height * e, { type: v.GL.gl.UNSIGNED_BYTE }), this._fboRender = new p.default.FrameBuffer((ge ? v.GL.width / 2 : v.GL.width) * e, v.GL.height * e, { type: v.GL.gl.UNSIGNED_BYTE }) } }, { key: "setSpacePressed", value: function(e) { this._spacePressed = e } }, { key: "isInTransition", get: function() { return 0 == this._tweenPointTarget.value ? !1 : 1 != this._tweenPointTarget.value } }]), t }(p.default.Scene);
    t.default = ye, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }

    function r(e, t) { var n = e.client_id,
            i = e.song;
        (0, a.default)(n, i, function(e, i) { if (e) return t(e); if ("track" !== i.kind) throw new Error("soundcloud-badge only supports individual tracks at the moment");
            t(null, i.stream_url + "?client_id=" + n, i) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(272),
        a = i(o);
    t.default = r, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(6),
        l = (i(u), n(156)),
        c = i(l),
        f = n(70),
        h = (i(f), n(158)),
        d = i(h),
        v = function() {
            function e(t) {
                (0, o.default)(this, e), this._scene = t, this._initTextures(), this._initViews() } return (0, s.default)(e, [{ key: "_initTextures", value: function() {} }, { key: "_initViews", value: function() { this.viewOwl = new d.default(this._scene); var e = [this.firstLine.bind(this), this.secondLine.bind(this)];
                    this.lines = []; for (var t = 0, n = 0; n < (u.GL.isMobile ? 2 : 4); n++) { var i = e[n % e.length]();
                        i.alpha = .6 * Math.random() + .2, 2 === i.id ? i.thickness = .01 * Math.random() + .01 : i.thickness = .02 * Math.random() + .02; var r = new c.default(this);
                        r.resetOptions(i), this.lines[t++] = r }
                    this.reset() } }, { key: "reset", value: function() { this.isReady = !1, this.didFinalDrawing = !1, this.playSound = !1, this.ratio = 0, this.alpha = 0, this.tickSpace = 0, this.viewOwl.reset(); for (var e = 0; e < this.lines.length; e++) this.lines[e].reset() } }, { key: "firstLine", value: function() { for (var e = void 0, t = -.3, n = void 0, i = Math.random() * Math.PI * 2, r = 0, o = 0, a = [], s = Math.random() > .49, u = Math.random() > .49, l = .06 * Math.random() + .05, c = 0; 30 > c; c++) i += u ? 1 : -1, s ? (e = Math.cos(i) * r, n = Math.sin(i) * r) : (e = Math.sin(i) * r, n = Math.cos(i) * r), t -= .1, r += l, r > 2 && (r = 2), a[o++] = [e, t, n]; return { points: a, division: Math.floor(10 * Math.random() - 5 + 40), deltaTime: -(.05 * Math.random() + .05) } } }, { key: "secondLine", value: function() { for (var e = 0, t = void 0, n = -.3, i = void 0, r = .05, o = Math.random() * Math.PI * 2, a = .03 * Math.random() + .05, s = [], u = Math.random() > .49, l = Math.random() > .49, c = 0; 15 > c; c++) o += l ? 1 : -1, u ? (t = Math.sin(1.3 * o) * r, i = Math.cos(1.3 * o) * r) : (t = Math.cos(1.3 * o) * r, i = Math.sin(1.3 * o) * r), n -= .3, r += a, r > 2 && (r = 2), s[e++] = [t, n, i]; return { points: s, division: Math.floor(4 * Math.random() - 2 + 20), deltaTime: -(.05 * Math.random() + .01), id: 2 } } }, { key: "pause", value: function() {} }, { key: "onClick", value: function(e) {} }, { key: "update", value: function() {} }, { key: "render", value: function() { if (!this.didFinalDrawing && this.isReady) { if (this._scene._spacePressed)
                            if (this.isIncreasing = !0, this.tickSpace++, this.tickSpace <= 800) this.ratio = this.easeOutCirc(this.tickSpace, 0, 1, 800), this.ratioOwl = this.easeInSine(this.tickSpace, 0, 1, 800), this.tickSpace <= 800 && (this.alpha = this.easeOutCirc(this.tickSpace, 0, 1, 800));
                            else { this.didFinalDrawing = !0, this._scene.fadeOutLightVolume(), this.viewOwl.drawEyes(); for (var e = 0; e < this.lines.length; e++) this.lines[e].fadeOut() }
                        else this.isIncreasing = !1, this.tickSpace > 1 && (this.tickSpace -= 2), this.alpha > .01 || (this.tickSpace = 0), this.tickSpace <= 800 && (this.ratio = this.easeOutCirc(this.tickSpace, 0, 1, 800), this.ratioOwl = this.easeInSine(this.tickSpace, 0, 1, 800), this.alpha = this.easeOutCirc(this.tickSpace, 0, 1, 800)); for (var e = 0; e < this.lines.length; e++) this.lines[e].ratio = this.ratio, this.lines[e].alpha = this.alpha * this.lines[e].data.alpha, this.lines[e].hide = !this.isIncreasing;
                        this.viewOwl.ratio = this.ratioOwl, this.viewOwl.alpha = this.alpha } if (this.isReady) { if (this._scene.lightSound.paused && this._scene.playLightSound(), this.tickSpace <= 200) { var t = this.easeInSine(this.tickSpace, 0, 1, 200);
                            this._scene.setLightVolume(t) }
                        this.didFinalDrawing ? this._scene.pressAndHold(1, !0) : this._scene.pressAndHold(this.tickSpace / 800, !1), this.viewOwl.render(); for (var e = 0; e < this.lines.length; e++) this.lines[e].render() } } }, { key: "easeInSine", value: function(e, t, n, i) { return -n * Math.cos(e / i * (Math.PI / 2)) + n + t } }, { key: "easeInCirc", value: function(e, t, n, i) { return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t } }, { key: "easeOutCubic", value: function(e, t, n, i) { return e /= i, e--, n * (e * e * e + 1) + t } }, { key: "easeInExpo", value: function(e, t, n, i) { return n * Math.pow(2, 10 * (e / i - 1)) + t } }, { key: "easeOutCirc", value: function(e, t, n, i) { return n * Math.sqrt(1 - (e = e / i - 1) * e) + t } }, { key: "easeInOutCirc", value: function(e, t, n, i) { return e /= i / 2, 1 > e ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : (e -= 2, n / 2 * (Math.sqrt(1 - e * e) + 1) + t) } }]), e }();
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(6),
        l = (i(u), n(79)),
        c = (i(l), n(127)),
        f = i(c),
        h = n(169),
        d = i(h),
        v = n(168),
        p = i(v),
        m = n(170),
        _ = i(m),
        g = n(166),
        x = i(g),
        y = n(167),
        b = i(y),
        M = n(173),
        w = i(M),
        E = n(171),
        S = i(E),
        T = n(172),
        P = i(T),
        A = n(151),
        C = i(A),
        I = n(67),
        D = i(I),
        F = n(11),
        k = i(F),
        L = n(72),
        R = i(L),
        O = function() {
            function e(t) {
                (0, o.default)(this, e), this._scene = t, this.delayedCalls = new R.default, this._initTextures(), this._initViews() } return (0, s.default)(e, [{ key: "_initTextures", value: function() {} }, { key: "_initViews", value: function() { this.firstTime = !0, this.cameraPos = [0, 0, 0], this.controller = new f.default(this), this.animals = [], this.linesManager = new C.default(this._scene); for (var e = 0; e < (u.GL.isMobile ? 3 : 7); e++) this.linesManager.addLine();
                    this.reset() } }, { key: "updateAnimals", value: function() { this.shapes = [null, p.default, x.default, _.default, b.default, d.default, w.default, S.default, P.default]; var e = void 0;
                    e = vrPresenting ? [null, { pos: [-4, -.5, -.5], rx: 0, ry: 0 }, { pos: [0, 2, 0], rx: 0, ry: 0 }, { pos: [3, .5, -3], rx: 0, ry: -60 * Math.PI / 180 }, { pos: [0, .8, -5], rx: 0, ry: -15 * Math.PI / 180 }, { pos: [0, 1.2, -6], rx: 0, ry: 14 * Math.PI / 180 }, { pos: [0, 0, 0], rx: 0, ry: 0 }, { pos: [0, 1.4, 5], rx: 0, ry: 0 }, { pos: [-5, .6, 2], rx: 0, ry: 0 }] : [null, { pos: [0, -.7, 0], rx: 0, ry: 0 }, { pos: [0, 2, 0], rx: 0, ry: 0 }, { pos: [0, 0, 0], rx: 0, ry: 0 }, { pos: [0, .4, 0], rx: 0, ry: 0 }, { pos: [0, .5, 0], rx: 0, ry: 0 }, { pos: [0, 0, 0], rx: 0, ry: 0 }, { pos: [0, .4, 0], rx: 0, ry: 0 }, { pos: [0, .1, 0], rx: 0, ry: 0 }], this.animals = []; for (var t = 0; t < D.default.length; t++)
                        if (this.shapes[t]) { var n = new this.shapes[t % this.shapes.length],
                                i = D.default[t],
                                r = [i.tx * k.default.terrainSize / 2 + e[t].pos[0], i.ty + e[t].pos[1], i.tz * k.default.terrainSize / 2 + e[t].pos[2]],
                                o = !1;
                            1 === t && (o = !0), n.reset([r[0], -r[1], -r[2]], D.default[t].rx + e[t].rx, D.default[t].ry + e[t].ry, o), this.animals.push(n) } } }, { key: "reset", value: function() { this.delayedCalls.clear(), this._step = 0, this._tick = 0, this.linesManager.reset() } }, { key: "goTo", value: function(e, t, n) { this.firstTime && (this.updateAnimals(), this.firstTime = !1), this._scene.fadeInLightVolume(), this.delayedCalls.clear(), this.delayedCalls.add(this._scene.fadeOutLightVolume.bind(this._scene), 1), this.delayedCalls.add(this._scene.stopLightSound.bind(this._scene), 5); var i = this.linesManager.moveTo(e, this.animals[this._step % this.animals.length], t, n); return this._step++, i ? i : !1 } }, { key: "pause", value: function() { this.linesManager.pause() } }, { key: "onClick", value: function(e) {} }, { key: "undraw", value: function() { this.linesManager.undraw() } }, { key: "transform", value: function() {} }, { key: "update", value: function(e) { this.delayedCalls.update() } }, { key: "render", value: function(e) { this.controller.update(), this.linesManager.update(e) } }, { key: "map", value: function(e, t, n, i, r) { return (r - i) * ((e - t) / (n - t)) + i } }]), e }();
    t.default = O, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(6),
        l = i(u),
        c = n(11),
        f = i(c),
        h = n(160),
        d = i(h),
        v = n(162),
        p = i(v),
        m = n(161),
        _ = i(m),
        g = function() {
            function e(t) {
                (0, o.default)(this, e), this._scene = t, this._enabled = !u.GL.isMobile, this._count = 0, this._initTextures(), this._initViews() } return (0, s.default)(e, [{ key: "_initTextures", value: function() { if (this._enabled) { var e = f.default.numParticles,
                            t = { minFilter: u.GL.NEAREST, magFilter: u.GL.NEAREST, type: u.GL.HALF_FLOAT };
                        this._fboCurrent = new l.default.FrameBuffer(e, e, t, !0), this._fboTarget = new l.default.FrameBuffer(e, e, t, !0) } } }, { key: "_initViews", value: function() { this._enabled && (this._vRender = new d.default, this._vSim = new p.default, this._vSave = new _.default, u.GL.setMatrices(this._scene.cameraOrtho), this._fboCurrent.bind(), u.GL.clear(0, 0, 0, 0), this._vSave.render(), this._fboCurrent.unbind(), this._fboTarget.bind(), u.GL.clear(0, 0, 0, 0), this._vSave.render(), this._fboTarget.unbind(), u.GL.setMatrices(this._scene.camera)) } }, { key: "updateFbo", value: function(e, t) { this._fboTarget.bind(), u.GL.clear(0, 0, 0, 1), this._vSim.render(this._fboCurrent.getTexture(1), this._fboCurrent.getTexture(0), this._fboCurrent.getTexture(2), e, t), this._fboTarget.unbind(); var n = this._fboCurrent;
                    this._fboCurrent = this._fboTarget, this._fboTarget = n } }, { key: "update", value: function(e, t) { this._enabled && (this._count++, this._count % f.default.skipCount == 0 && (this._count = 0, u.GL.isMobile || this.updateFbo(e, t))) } }, { key: "render", value: function() { if (this._enabled) { var e = this._count / f.default.skipCount;
                        u.GL.enableAdditiveBlending(), hasVR && u.GL.disable(u.GL.DEPTH_TEST), this._vRender.render(this._fboTarget.getTexture(0), this._fboCurrent.getTexture(0), e, this._fboCurrent.getTexture(2)), u.GL.enableAlphaBlending(), hasVR && u.GL.enable(u.GL.DEPTH_TEST) } } }]), e }();
    t.default = g, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, p.default.ShaderLibs.skyboxVert, p.default.ShaderLibs.copyFrag)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { for (var e = [], t = [], n = [], i = 0, r = 70, o = 70, a = 36, s = function(e, t) { var n = e / a * Math.PI * 2,
                                i = -r / 2 + t / a * r + 3,
                                s = o - t / a * .01,
                                u = Math.cos(n) * s,
                                l = Math.sin(n) * s; return [u, i, l] }, u = 0; a > u; u++)
                        for (var l = 0; a > l; l++) e.push(s(u, l)), e.push(s(u + 1, l)), e.push(s(u + 1, l + 1)), e.push(s(u, l + 1)), t.push([u / a, l / a]), t.push([(u + 1) / a, l / a]), t.push([(u + 1) / a, (l + 1) / a]), t.push([u / a, (l + 1) / a]), n.push(4 * i + 0), n.push(4 * i + 1), n.push(4 * i + 2), n.push(4 * i + 0), n.push(4 * i + 2), n.push(4 * i + 3), i++;
                    this.mesh = new p.default.Mesh, this.mesh.bufferVertex(e), this.mesh.bufferTexCoord(t), this.mesh.bufferIndex(n), this._textureFg = new v.GLTexture(getAsset(v.GL.isMobile ? "fgMobile" : "fg")) } }, { key: "render", value: function() { this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this._textureFg.bind(0), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = m, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(247),
        _ = i(m),
        g = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, p.default.ShaderLibs.bigTriangleVert, _.default)); return e.time = 255 * Math.random(), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.mesh = p.default.Geom.bigTriangle() } }, { key: "render", value: function() { this.time += .01, this.shader.bind(), this.shader.uniform("uResolution", "vec2", [v.GL.width, v.GL.height]), this.shader.uniform("timer", "float", this.time), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = g, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(42),
        _ = i(m),
        g = n(11),
        x = i(g),
        y = n(261),
        b = i(y),
        M = n(260),
        w = i(M),
        E = n(262),
        S = i(E),
        T = .25,
        P = { maxHeight: 3, roughness: 1, specular: .25, metallic: 0, baseColor: [T, T, T] },
        A = function(e) {
            function t() {
                (0, s.default)(this, t); var e = !v.GL.getExtension("EXT_shader_texture_lod") || v.GL.isMobile,
                    n = _.default.addUniforms(b.default, P),
                    i = _.default.addUniforms(e ? S.default : w.default, P),
                    r = (0, f.default)(this, (0, o.default)(t).call(this, n, i)); return r.useFallback = e, r.setupUniforms(), r } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = x.default.terrainSize,
                        t = v.GL.isMobile ? 80 : 120;
                    this.mesh = p.default.Geom.plane(e, e, t, "xz"), this._textureHeight = new v.GLTexture(getAsset("height")), this._textureNormal = new v.GLTexture(getAsset("normal")) } }, { key: "setupUniforms", value: function() { this.shader.bind(), _.default.bindUniforms(this.shader, P), this.shader.uniform("uExposure", "float", x.default.exposure), this.shader.uniform("uGamma", "float", x.default.gamma), this.shader.uniform("uFogDensity", "float", x.default.fogDensity), this.shader.uniform("uFogColor", "vec3", x.default.fogColor), this.shader.uniform("textureHeight", "uniform1i", 0), this.shader.uniform("textureNormal", "uniform1i", 1), this.shader.uniform("textureNoise", "uniform1i", 2), this.useFallback ? this.shader.uniform("textureEnv", "uniform1i", 3) : (this.shader.uniform("uRadianceMap", "uniform1i", 3), this.shader.uniform("uIrradianceMap", "uniform1i", 4)) } }, { key: "render", value: function(e, t, n, i) { this.shader.bind(), this._textureHeight.bind(0), this._textureNormal.bind(1), n.bind(2), this.useFallback ? i.bind(3) : (e.bind(3), t.bind(4)), this.shader.uniform("uClipY", "float", x.default.clipY), this.shader.uniform("uDir", "float", x.default.clipDir), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = A, e.exports = t.default }, function(e, t, n) {
    "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(174),
        p = (i(v), n(6)),
        m = i(p),
        _ = n(150),
        g = n(42),
        x = i(g),
        y = n(11),
        b = i(y),
        M = n(266),
        w = i(M),
        E = n(265),
        S = i(E),
        T = n(264),
        P = i(T),
        A = [
            [-36.228691210225534, 0, 31.742498892474174],
            [26.989947308038992, 0, -28.14405048412889],
            [4.19934150084611, 0, 47.54843151917581],
            [-11.964537003360952, 0, 1.1817871963943247],
            [35.76573062078019, 0, -38.14926709817419],
            [48.78533387086483, 0, 18.86626958084463],
            [-8.14995765449995, 0, 46.25510939916178],
            [5.822149489999148, 0, 42.16185641251822],
            [-43.98885324884443, 0, -12.936818803334504],
            [-40.57468916973164, 0, -39.63648020912205],
            [-13.927362869237882, 0, 13.42370206934254],
            [40.62801186381435, 0, 25.6888518712866],
            [15.299171924045282, 0, 25.831051042038638],
            [-29.913877158656632, 0, 14.830101105776919],
            [-10.150761834227694, 0, -7.838028595851988],
            [45.72784170517335, 0, 44.71934247500475],
            [-31.24660807565469, 0, 49.63495512708553],
            [-45.960587469642135, 0, 13.449017196940318],
            [-33.821051469936506, 0, -43.08995341380326],
            [-18.12094225232761, 0, -32.07687531954046],
            [-2.798889959751236, 0, -2.674051153624845],
            [-30.67440488278068, 0, 26.759704003583934],
            [-39.687353121342085, 0, -16.011076287631965],
            [13.414915965787856, 0, 18.609801311357742],
            [34.16811563617988, 0, 11.609094655153093],
            [6.392374235399487, 0, -40.45565394926882],
            [-49.77146765109679, 0, 38.68881512128077],
            [47.717609545969026, 0, -7.248542342973806],
            [20.38205474994224, 0, 28.696014955936164],
            [-47.169044717910054, 0, 8.895666810800584],
            [35.08507361897554, 0, -41.779759696696004],
            [-38.09950510571936, 0, -9.905667774505169],
            [-33.62546833867184, 0, 38.515892404451236],
            [26.132386274209637, 0, 26.193838003359772],
            [-18.82110980914544, 0, 20.410543336024432],
            [-26.80590122529516, 0, -11.730816831478478],
            [-34.294375770832055, 0, -49.201461174249125],
            [5.918975222611024, 0, 32.48509688743006],
            [5.848558816480363, 0, 27.366522811171293],
            [1.4690347008935447, 0, -47.691000149166115],
            [18.507694068146847, 0, 41.704502138532476],
            [-44.19800451951479, 0, 2.468232512858947],
            [-22.719821297010846, 0, 26.116120160324854],
            [-36.14652103159494, 0, 43.3773793976918],
            [-11.160762969787719, 0, -27.080230966553653],
            [28.899073629023462, 0, -21.052633643435016],
            [29.196580049093114, 0, -17.237005243287307],
            [-34.664076086829375, 0, -40.63363836151497],
            [15.244541053382306, 0, 43.951127262744635],
            [2.560728478661801, 0, -3.357457368274794]
        ],
        C = function(e, t) { return e + Math.random() * (t - e) },
        I = .1,
        D = { roughness: 1, specular: .25, metallic: 0, baseColor: [I, I, I] },
        F = function(e) {
            function t() {
                (0, s.default)(this, t); var e = !p.GL.getExtension("EXT_shader_texture_lod") || p.GL.isMobile,
                    n = x.default.addUniforms(e ? P.default : S.default, D),
                    i = (0, f.default)(this, (0, o.default)(t).call(this, w.default, n)); return i.useFallback = e, i.setupUniforms(), i }
            return (0, d.default)(t, e), (0, l.default)(t, [{
                key: "_init",
                value: function() {
                    for (var e = new _.Noise(65535 * Math.random()), t = [], n = [], i = [], r = 0, o = 100, a = .2, s = 24, u = .5, l = .5, c = function(t, n) { var i = t / s * Math.PI * 2,
                                r = n / s * o,
                                c = a - n / s * .01,
                                f = Math.cos(-i) * c,
                                h = Math.sin(-i) * c,
                                d = e.simplex3(f * u, r * u, h * u) * l; return f *= 1 + d, h *= 1 + d, [f, r, h] }, f = 0; s > f; f++)
                        for (var h = 0; s > h; h++) t.push(c(f, h)), t.push(c(f + 1, h)), t.push(c(f + 1, h + 1)), t.push(c(f, h + 1)), n.push([f / s, h / s]), n.push([(f + 1) / s, h / s]), n.push([(f + 1) / s, (h + 1) / s]), n.push([f / s, (h + 1) / s]), i.push(4 * r + 0), i.push(4 * r + 1), i.push(4 * r + 2), i.push(4 * r + 0), i.push(4 * r + 2), i.push(4 * r + 3), r++;
                    for (var d = 50, v = A, p = [], g = (b.default.terrainSize,
                            .1), x = 0; d > x; x++) p.push([C(-g, g), C(-1, 1), C(1.5, 3)]);
                    this.mesh = new m.default.Mesh, this.mesh.bufferVertex(t), this.mesh.bufferTexCoord(n), this.mesh.bufferIndex(i), this.mesh.bufferInstance(v, "aPosOffset"), this.mesh.bufferInstance(p, "aExtra"), this._textureTree = new m.default.GLTexture(getAsset("tree")), this._treePositions = v
                }
            }, { key: "setupUniforms", value: function() { this.shader.bind(), x.default.bindUniforms(this.shader, D), this.shader.uniform("uExposure", "float", b.default.exposure), this.shader.uniform("uGamma", "float", b.default.gamma), this.shader.uniform("uFogDensity", "float", b.default.fogDensity), this.shader.uniform("uFogColor", "vec3", b.default.fogColor), this.shader.uniform("textureTree", "uniform1i", 1), this.shader.uniform("textureNoise", "uniform1i", 2), this.useFallback ? this.shader.uniform("textureEnv", "uniform1i", 3) : (this.shader.uniform("uRadianceMap", "uniform1i", 3), this.shader.uniform("uIrradianceMap", "uniform1i", 4)) } }, { key: "render", value: function(e, t, n, i) { this.shader.bind(), this._textureTree.bind(1), n.bind(2), this.useFallback ? i.bind(3) : (e.bind(3), t.bind(4)), this.shader.uniform("uClipY", "float", b.default.clipY), this.shader.uniform("uDir", "float", b.default.clipDir), p.GL.draw(this.mesh) } }]), t
        }(m.default.View);
    t.default = F, e.exports = t.default
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(11),
        _ = i(m),
        g = n(270),
        x = i(g),
        y = n(271),
        b = i(y),
        M = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, x.default)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = _.default.terrainSize;
                    this.mesh = p.default.Geom.plane(e, e, 120, "xz"), this.shader.bind(), this.shader.uniform("textureReflection", "uniform1i", 0), this.shader.uniform("uSeaLevel", "float", _.default.seaLevel), this.shader.uniform("uFogDensity", "float", _.default.fogDensity), this.shader.uniform("uFogColor", "vec3", _.default.fogColor) } }, { key: "render", value: function(e) { this.shader.bind(), e.bind(0), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = M, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [581, 654, 0],
                    [559, 631, 0],
                    [541, 582, 0],
                    [537, 514, 0],
                    [545, 466, 0],
                    [560, 417, 0],
                    [559, 398, 0],
                    [544, 392, 0],
                    [524, 402, 0],
                    [516, 414, 0],
                    [532, 412, 0],
                    [558, 386, 0],
                    [568, 350, 0],
                    [559, 318, 0],
                    [545, 304, 0],
                    [533, 299, 0],
                    [529, 279, 0],
                    [515, 259, 0],
                    [497, 244, 0],
                    [488, 220, 0],
                    [470, 207, 0],
                    [448, 197, 0],
                    [435, 175, 0],
                    [414, 163, 0],
                    [404, 160, 0],
                    [412, 147, 0],
                    [454, 136, 0],
                    [497, 146, 0],
                    [529, 168, 0],
                    [553, 202, 0],
                    [571, 234, 0],
                    [581, 263, 0],
                    [588, 286, 0],
                    [606, 300, 0],
                    [613, 300, 0],
                    [616, 291, 0],
                    [615, 285, 0],
                    [607, 283, 0],
                    [599, 285, 0],
                    [601, 294, 0],
                    [609, 296, 0],
                    [615, 289, 0],
                    [612, 286, 0],
                    [608, 290, 0],
                    [613, 290, 0],
                    [617, 288, 0],
                    [622, 285, 0],
                    [608, 279, 0],
                    [592, 280, 0],
                    [579, 287, 0],
                    [572, 303, 0],
                    [575, 318, 0],
                    [589, 324, 0],
                    [606, 321, 0],
                    [615, 310, 0],
                    [617, 296, 0],
                    [616, 282, 0],
                    [610, 278, 0],
                    [607, 257, 0],
                    [596, 234, 0],
                    [586, 246, 0],
                    [587, 265, 0],
                    [589, 282, 0],
                    [580, 323, 0],
                    [573, 352, 0],
                    [598, 336, 0],
                    [606, 335, 0],
                    [621, 324, 0],
                    [637, 326, 0],
                    [648, 318, 0],
                    [661, 325, 0],
                    [672, 328, 0],
                    [682, 322, 0],
                    [698, 318, 0],
                    [709, 310, 0],
                    [718, 314, 0],
                    [735, 314, 0],
                    [743, 315, 0],
                    [746, 285, 0],
                    [730, 254, 0],
                    [699, 241, 0],
                    [670, 248, 0],
                    [645, 265, 0],
                    [629, 280, 0],
                    [621, 285, 0],
                    [607, 277, 0],
                    [614, 263, 0],
                    [627, 246, 0],
                    [631, 245, 0],
                    [632, 260, 0],
                    [626, 274, 0],
                    [618, 283, 0],
                    [612, 279, 0],
                    [616, 262, 0],
                    [623, 213, 0],
                    [648, 179, 0],
                    [686, 155, 0],
                    [718, 129, 0],
                    [735, 95, 0],
                    [735, 75, 0],
                    [723, 51, 0],
                    [690, 22, 0],
                    [631, -2, 0],
                    [604, -9, 0]
                ];
                e = e || [0, 0, 0]; var i = [
                        [614, 282, 0],
                        [602, 279, 0]
                    ],
                    r = [0, 0, -.4]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e, i, r)) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [389, 507, 0],
                    [405, 456, 0],
                    [425, 424, 0],
                    [452, 417, 0],
                    [469, 425, 0],
                    [476, 445, 0],
                    [484, 484, 0],
                    [492, 497, 0],
                    [512, 501, 0],
                    [538, 496, 0],
                    [546, 490, 0],
                    [546, 478, 0],
                    [542, 443, 0],
                    [541, 405, 0],
                    [550, 345, 0],
                    [551, 279, 0],
                    [545, 215, 0],
                    [532, 160, 0],
                    [511, 125, 0],
                    [486, 109, 0],
                    [447, 95, 0],
                    [425, 95, 0],
                    [414, 108, 0],
                    [409, 133, 0],
                    [413, 218, 0],
                    [426, 287, 0],
                    [434, 295, 0],
                    [443, 294, 0],
                    [439, 290, 0],
                    [426, 290, 0],
                    [422, 294, 0],
                    [424, 308, 0],
                    [426, 339, 0],
                    [426, 357, 0],
                    [419, 368, 0],
                    [402, 368, 0],
                    [394, 363, 0],
                    [401, 354, 0],
                    [411, 353, 0],
                    [422, 353, 0],
                    [426, 358, 0],
                    [424, 373, 0],
                    [414, 387, 0],
                    [410, 388, 0],
                    [398, 384, 0],
                    [389, 371, 0],
                    [383, 354, 0],
                    [344, 319, 0],
                    [327, 288, 0],
                    [323, 262, 0],
                    [329, 234, 0],
                    [332, 212, 0],
                    [329, 192, 0],
                    [334, 183, 0],
                    [349, 185, 0],
                    [370, 199, 0],
                    [376, 209, 0],
                    [376, 218, 0],
                    [362, 225, 0],
                    [340, 224, 0],
                    [334, 220, 0],
                    [349, 212, 0],
                    [393, 205, 0],
                    [429, 207, 0],
                    [461, 211, 0],
                    [472, 216, 0],
                    [467, 222, 0],
                    [452, 224, 0],
                    [435, 218, 0],
                    [428, 211, 0],
                    [452, 181, 0],
                    [468, 174, 0],
                    [478, 180, 0],
                    [484, 195, 0],
                    [486, 244, 0],
                    [481, 280, 0],
                    [474, 301, 0],
                    [460, 316, 0],
                    [451, 332, 0],
                    [443, 356, 0],
                    [438, 376, 0],
                    [425, 390, 0],
                    [400, 392, 0],
                    [382, 382, 0],
                    [376, 374, 0],
                    [358, 457, 0],
                    [360, 474, 0],
                    [357, 481, 0],
                    [299, 487, 0],
                    [289, 482, 0],
                    [288, 473, 0],
                    [297, 452, 0],
                    [299, 429, 0],
                    [285, 353, 0],
                    [288, 306, 0],
                    [314, 190, 0],
                    [322, 170, 0],
                    [353, 121, 0],
                    [386, 89, 0],
                    [413, 84, 0],
                    [439, 86, 0],
                    [451, 88, 0],
                    [475, 80, 0],
                    [517, 82, 0],
                    [565, 101, 0],
                    [601, 133, 0],
                    [634, 171, 0],
                    [665, 227, 0],
                    [681, 279, 0],
                    [692, 314, 0],
                    [713, 372, 0],
                    [730, 407, 0],
                    [735, 428, 0],
                    [734, 453, 0],
                    [728, 470, 0],
                    [719, 479, 0],
                    [669, 477, 0],
                    [659, 472, 0],
                    [663, 421, 0],
                    [652, 395, 0],
                    [614, 364, 0],
                    [584, 358, 0],
                    [577, 358, 0],
                    [567, 366, 0],
                    [546, 377, 0],
                    [498, 379, 0],
                    [469, 371, 0],
                    [446, 348, 0],
                    [443, 327, 0],
                    [449, 290, 0],
                    [472, 238, 0],
                    [512, 179, 0],
                    [558, 140, 0],
                    [604, 126, 0],
                    [632, 128, 0],
                    [670, 144, 0],
                    [701, 166, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, 0, 0], [
                    [384, 295, 0],
                    [437, 295, 0]
                ], [0, 0, -.4])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [366, 531, 0],
                    [359, 483, 0],
                    [365, 460, 0],
                    [394, 439, 0],
                    [408, 415, 0],
                    [392, 400, 0],
                    [373, 402, 0],
                    [369, 424, 0],
                    [382, 417, 0],
                    [383, 379, 0],
                    [374, 347, 0],
                    [383, 324, 0],
                    [390, 308, 0],
                    [386, 299, 0],
                    [370, 314, 0],
                    [357, 346, 0],
                    [341, 396, 0],
                    [340, 398, 0],
                    [326, 394, 0],
                    [326, 387, 0],
                    [336, 363, 0],
                    [343, 306, 0],
                    [344, 257, 0],
                    [368, 192, 0],
                    [409, 141, 0],
                    [462, 113, 0],
                    [517, 109, 0],
                    [571, 123, 0],
                    [604, 146, 0],
                    [615, 167, 0],
                    [617, 188, 0],
                    [615, 203, 0],
                    [606, 213, 0],
                    [608, 228, 0],
                    [619, 260, 0],
                    [623, 289, 0],
                    [622, 317, 0],
                    [613, 327, 0],
                    [599, 321, 0],
                    [582, 295, 0],
                    [575, 271, 0],
                    [568, 233, 0],
                    [557, 216, 0],
                    [547, 209, 0],
                    [544, 216, 0],
                    [554, 225, 0],
                    [559, 219, 0],
                    [557, 195, 0],
                    [546, 162, 0],
                    [531, 135, 0],
                    [511, 119, 0],
                    [500, 119, 0],
                    [495, 130, 0],
                    [497, 151, 0],
                    [503, 172, 0],
                    [512, 191, 0],
                    [519, 192, 0],
                    [531, 179, 0],
                    [555, 158, 0],
                    [581, 149, 0],
                    [608, 145, 0],
                    [623, 144, 0],
                    [631, 154, 0],
                    [631, 171, 0],
                    [623, 190, 0],
                    [619, 177, 0],
                    [607, 144, 0],
                    [585, 124, 0],
                    [548, 109, 0],
                    [516, 102, 0],
                    [486, 102, 0],
                    [464, 112, 0],
                    [443, 129, 0],
                    [420, 145, 0],
                    [390, 156, 0],
                    [365, 176, 0],
                    [354, 198, 0],
                    [346, 232, 0],
                    [350, 267, 0],
                    [366, 292, 0],
                    [388, 310, 0],
                    [417, 326, 0],
                    [454, 324, 0],
                    [506, 318, 0],
                    [534, 324, 0],
                    [546, 348, 0],
                    [546, 370, 0],
                    [546, 400, 0],
                    [551, 418, 0],
                    [558, 429, 0],
                    [553, 432, 0],
                    [522, 423, 0],
                    [512, 405, 0],
                    [508, 354, 0],
                    [500, 324, 0],
                    [489, 298, 0],
                    [480, 280, 0],
                    [460, 267, 0],
                    [447, 270, 0],
                    [443, 290, 0],
                    [449, 314, 0],
                    [456, 337, 0],
                    [459, 361, 0],
                    [458, 389, 0],
                    [457, 413, 0],
                    [457, 423, 0],
                    [465, 427, 0],
                    [482, 425, 0],
                    [482, 415, 0],
                    [479, 393, 0],
                    [489, 372, 0],
                    [489, 348, 0],
                    [488, 318, 0],
                    [500, 316, 0],
                    [506, 331, 0],
                    [519, 346, 0],
                    [533, 345, 0],
                    [553, 334, 0],
                    [557, 319, 0],
                    [554, 307, 0],
                    [568, 318, 0],
                    [566, 310, 0],
                    [564, 288, 0],
                    [567, 282, 0],
                    [575, 295, 0],
                    [575, 322, 0],
                    [569, 341, 0],
                    [555, 347, 0],
                    [533, 338, 0],
                    [513, 320, 0],
                    [504, 297, 0],
                    [504, 265, 0],
                    [517, 245, 0],
                    [548, 233, 0],
                    [576, 235, 0],
                    [600, 245, 0],
                    [624, 272, 0],
                    [634, 296, 0],
                    [636, 328, 0],
                    [627, 353, 0],
                    [613, 362, 0],
                    [591, 362, 0],
                    [572, 352, 0],
                    [563, 335, 0],
                    [575, 320, 0],
                    [596, 318, 0],
                    [618, 318, 0],
                    [638, 328, 0],
                    [641, 340, 0],
                    [629, 356, 0],
                    [605, 362, 0],
                    [588, 356, 0],
                    [593, 340, 0],
                    [614, 334, 0],
                    [632, 336, 0],
                    [637, 345, 0],
                    [608, 360, 0],
                    [598, 354, 0],
                    [602, 351, 0],
                    [612, 350, 0],
                    [615, 352, 0],
                    [610, 360, 0],
                    [583, 376, 0],
                    [570, 390, 0],
                    [591, 405, 0],
                    [626, 404, 0],
                    [686, 397, 0],
                    [715, 384, 0],
                    [705, 371, 0],
                    [679, 372, 0],
                    [648, 383, 0],
                    [634, 401, 0],
                    [635, 425, 0],
                    [668, 443, 0],
                    [714, 441, 0],
                    [748, 427, 0],
                    [788, 391, 0],
                    [795, 353, 0],
                    [799, 305, 0],
                    [837, 267, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, 0, 0], [
                    [551, 216, 0],
                    [611, 215, 0]
                ], [0, 0, -.4])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [722, 563, 0],
                    [687, 550, 0],
                    [678, 529, 0],
                    [691, 489, 0],
                    [712, 449, 0],
                    [714, 427, 0],
                    [699, 402, 0],
                    [682, 384, 0],
                    [680, 371, 0],
                    [693, 357, 0],
                    [715, 347, 0],
                    [718, 341, 0],
                    [672, 342, 0],
                    [644, 348, 0],
                    [641, 353, 0],
                    [667, 356, 0],
                    [693, 341, 0],
                    [699, 327, 0],
                    [680, 294, 0],
                    [655, 276, 0],
                    [645, 272, 0],
                    [635, 280, 0],
                    [632, 297, 0],
                    [632, 314, 0],
                    [625, 317, 0],
                    [616, 309, 0],
                    [620, 277, 0],
                    [615, 267, 0],
                    [595, 256, 0],
                    [586, 240, 0],
                    [591, 225, 0],
                    [607, 219, 0],
                    [627, 229, 0],
                    [635, 243, 0],
                    [636, 299, 0],
                    [650, 355, 0],
                    [675, 401, 0],
                    [691, 368, 0],
                    [696, 314, 0],
                    [688, 246, 0],
                    [669, 203, 0],
                    [639, 158, 0],
                    [607, 130, 0],
                    [580, 122, 0],
                    [563, 130, 0],
                    [551, 154, 0],
                    [548, 184, 0],
                    [549, 202, 0],
                    [600, 234, 0],
                    [615, 247, 0],
                    [620, 256, 0],
                    [632, 261, 0],
                    [651, 262, 0],
                    [657, 270, 0],
                    [652, 297, 0],
                    [654, 315, 0],
                    [666, 320, 0],
                    [674, 313, 0],
                    [666, 294, 0],
                    [667, 282, 0],
                    [676, 262, 0],
                    [675, 252, 0],
                    [663, 244, 0],
                    [658, 233, 0],
                    [664, 193, 0],
                    [641, 154, 0],
                    [602, 126, 0],
                    [533, 104, 0],
                    [497, 113, 0],
                    [491, 120, 0],
                    [490, 128, 0],
                    [503, 133, 0],
                    [524, 145, 0],
                    [549, 168, 0],
                    [556, 180, 0],
                    [548, 190, 0],
                    [535, 203, 0],
                    [529, 212, 0],
                    [532, 225, 0],
                    [542, 227, 0],
                    [549, 218, 0],
                    [549, 208, 0],
                    [584, 179, 0],
                    [585, 154, 0],
                    [572, 129, 0],
                    [546, 108, 0],
                    [513, 107, 0],
                    [485, 121, 0],
                    [464, 147, 0],
                    [451, 180, 0],
                    [430, 169, 0],
                    [428, 163, 0],
                    [440, 162, 0],
                    [453, 161, 0],
                    [467, 148, 0],
                    [485, 134, 0],
                    [499, 136, 0],
                    [522, 151, 0],
                    [541, 176, 0],
                    [542, 190, 0],
                    [538, 195, 0],
                    [512, 209, 0],
                    [506, 219, 0],
                    [515, 227, 0],
                    [529, 225, 0],
                    [526, 215, 0],
                    [515, 211, 0],
                    [503, 216, 0],
                    [495, 230, 0],
                    [489, 244, 0],
                    [484, 250, 0],
                    [480, 253, 0],
                    [466, 257, 0],
                    [464, 251, 0],
                    [467, 237, 0],
                    [466, 218, 0],
                    [459, 212, 0],
                    [453, 205, 0],
                    [453, 187, 0],
                    [461, 177, 0],
                    [482, 173, 0],
                    [499, 176, 0],
                    [501, 178, 0],
                    [492, 184, 0],
                    [475, 179, 0],
                    [471, 169, 0],
                    [482, 160, 0],
                    [498, 160, 0],
                    [502, 171, 0],
                    [509, 184, 0],
                    [523, 187, 0],
                    [533, 190, 0],
                    [519, 201, 0],
                    [497, 224, 0],
                    [481, 254, 0],
                    [480, 286, 0],
                    [490, 305, 0],
                    [500, 314, 0],
                    [512, 315, 0],
                    [519, 309, 0],
                    [511, 305, 0],
                    [502, 305, 0],
                    [492, 308, 0],
                    [480, 322, 0],
                    [471, 348, 0],
                    [479, 370, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, -3, 0], [
                    [474, 203, 0]
                ])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [629, 499, 0],
                    [657, 464, 0],
                    [654, 443, 0],
                    [637, 429, 0],
                    [622, 431, 0],
                    [621, 454, 0],
                    [644, 469, 0],
                    [651, 459, 0],
                    [629, 417, 0],
                    [623, 395, 0],
                    [618, 355, 0],
                    [608, 343, 0],
                    [593, 341, 0],
                    [573, 355, 0],
                    [560, 355, 0],
                    [555, 342, 0],
                    [566, 319, 0],
                    [569, 309, 0],
                    [562, 306, 0],
                    [547, 296, 0],
                    [526, 279, 0],
                    [511, 281, 0],
                    [495, 307, 0],
                    [490, 311, 0],
                    [498, 326, 0],
                    [503, 346, 0],
                    [502, 358, 0],
                    [506, 362, 0],
                    [514, 360, 0],
                    [518, 351, 0],
                    [510, 347, 0],
                    [502, 355, 0],
                    [509, 369, 0],
                    [528, 372, 0],
                    [543, 357, 0],
                    [542, 349, 0],
                    [526, 346, 0],
                    [515, 351, 0],
                    [520, 376, 0],
                    [548, 415, 0],
                    [566, 418, 0],
                    [589, 414, 0],
                    [600, 403, 0],
                    [587, 401, 0],
                    [572, 406, 0],
                    [570, 424, 0],
                    [628, 470, 0],
                    [644, 479, 0],
                    [665, 482, 0],
                    [677, 475, 0],
                    [674, 458, 0],
                    [659, 452, 0],
                    [638, 454, 0],
                    [626, 453, 0],
                    [592, 418, 0],
                    [591, 401, 0],
                    [600, 388, 0],
                    [611, 393, 0],
                    [623, 445, 0],
                    [643, 468, 0],
                    [649, 459, 0],
                    [627, 398, 0],
                    [612, 367, 0],
                    [613, 342, 0],
                    [618, 307, 0],
                    [615, 238, 0],
                    [620, 218, 0],
                    [629, 225, 0],
                    [625, 248, 0],
                    [613, 299, 0],
                    [616, 323, 0],
                    [629, 337, 0],
                    [648, 341, 0],
                    [643, 379, 0],
                    [649, 430, 0],
                    [661, 444, 0],
                    [664, 437, 0],
                    [666, 363, 0],
                    [667, 339, 0],
                    [661, 335, 0],
                    [649, 334, 0],
                    [648, 327, 0],
                    [650, 303, 0],
                    [640, 251, 0],
                    [625, 217, 0],
                    [613, 201, 0],
                    [590, 194, 0],
                    [575, 183, 0],
                    [581, 169, 0],
                    [594, 176, 0],
                    [592, 185, 0],
                    [555, 204, 0],
                    [541, 222, 0],
                    [537, 252, 0],
                    [545, 281, 0],
                    [551, 295, 0],
                    [545, 308, 0],
                    [530, 312, 0],
                    [526, 302, 0],
                    [533, 295, 0],
                    [538, 302, 0],
                    [529, 319, 0],
                    [503, 291, 0],
                    [478, 268, 0],
                    [467, 251, 0],
                    [452, 162, 0],
                    [460, 146, 0],
                    [468, 150, 0],
                    [482, 188, 0],
                    [489, 233, 0],
                    [501, 257, 0],
                    [517, 273, 0],
                    [519, 281, 0],
                    [511, 279, 0],
                    [492, 220, 0],
                    [480, 145, 0],
                    [484, 128, 0],
                    [502, 137, 0],
                    [520, 167, 0],
                    [529, 212, 0],
                    [529, 245, 0],
                    [532, 269, 0],
                    [537, 285, 0],
                    [533, 287, 0],
                    [516, 269, 0],
                    [499, 219, 0],
                    [487, 172, 0],
                    [486, 143, 0],
                    [495, 130, 0],
                    [524, 109, 0],
                    [549, 85, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, -3, 0], [
                    [532, 305, 0]
                ], [0, 0, -.4])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [555, 594, 0],
                    [623, 560, 0],
                    [651, 526, 0],
                    [658, 496, 0],
                    [648, 484, 0],
                    [620, 477, 0],
                    [574, 478, 0],
                    [537, 475, 0],
                    [495, 459, 0],
                    [461, 427, 0],
                    [443, 383, 0],
                    [439, 326, 0],
                    [443, 277, 0],
                    [469, 220, 0],
                    [510, 194, 0],
                    [551, 184, 0],
                    [576, 180, 0],
                    [588, 158, 0],
                    [587, 153, 0],
                    [582, 152, 0],
                    [584, 156, 0],
                    [605, 172, 0],
                    [619, 172, 0],
                    [637, 161, 0],
                    [649, 138, 0],
                    [653, 112, 0],
                    [647, 88, 0],
                    [639, 80, 0],
                    [636, 83, 0],
                    [637, 107, 0],
                    [644, 122, 0],
                    [650, 119, 0],
                    [649, 98, 0],
                    [643, 84, 0],
                    [638, 80, 0],
                    [630, 86, 0],
                    [619, 93, 0],
                    [605, 92, 0],
                    [600, 85, 0],
                    [595, 80, 0],
                    [584, 85, 0],
                    [574, 105, 0],
                    [573, 129, 0],
                    [581, 128, 0],
                    [589, 117, 0],
                    [593, 99, 0],
                    [590, 85, 0],
                    [581, 89, 0],
                    [574, 120, 0],
                    [584, 150, 0],
                    [598, 162, 0],
                    [615, 166, 0],
                    [634, 156, 0],
                    [649, 136, 0],
                    [644, 128, 0],
                    [634, 123, 0],
                    [627, 128, 0],
                    [627, 137, 0],
                    [632, 139, 0],
                    [636, 130, 0],
                    [630, 126, 0],
                    [623, 143, 0],
                    [620, 151, 0],
                    [612, 151, 0],
                    [608, 145, 0],
                    [623, 145, 0],
                    [627, 149, 0],
                    [627, 155, 0],
                    [614, 160, 0],
                    [604, 157, 0],
                    [615, 154, 0],
                    [637, 154, 0],
                    [633, 165, 0],
                    [620, 225, 0],
                    [617, 261, 0],
                    [623, 273, 0],
                    [635, 284, 0],
                    [649, 312, 0],
                    [634, 313, 0],
                    [622, 307, 0],
                    [613, 294, 0],
                    [593, 287, 0],
                    [571, 279, 0],
                    [568, 259, 0],
                    [568, 249, 0],
                    [563, 251, 0],
                    [568, 259, 0],
                    [597, 271, 0],
                    [624, 252, 0],
                    [628, 234, 0],
                    [615, 212, 0],
                    [599, 189, 0],
                    [587, 187, 0],
                    [573, 211, 0],
                    [575, 229, 0],
                    [587, 255, 0],
                    [592, 273, 0],
                    [600, 275, 0],
                    [676, 253, 0],
                    [685, 245, 0],
                    [683, 238, 0],
                    [653, 233, 0],
                    [619, 247, 0],
                    [590, 265, 0],
                    [566, 267, 0],
                    [550, 269, 0],
                    [520, 289, 0],
                    [517, 304, 0],
                    [521, 305, 0],
                    [509, 293, 0],
                    [494, 287, 0],
                    [481, 295, 0],
                    [469, 328, 0],
                    [470, 353, 0],
                    [496, 376, 0],
                    [516, 365, 0],
                    [531, 347, 0],
                    [535, 317, 0],
                    [523, 294, 0],
                    [508, 283, 0],
                    [492, 282, 0],
                    [478, 293, 0],
                    [470, 321, 0],
                    [477, 354, 0],
                    [485, 371, 0],
                    [502, 383, 0],
                    [527, 387, 0],
                    [550, 394, 0],
                    [563, 401, 0],
                    [576, 402, 0],
                    [576, 392, 0],
                    [566, 382, 0],
                    [544, 378, 0],
                    [526, 369, 0],
                    [507, 360, 0],
                    [490, 360, 0],
                    [483, 369, 0],
                    [486, 389, 0],
                    [510, 416, 0],
                    [533, 429, 0],
                    [560, 429, 0],
                    [587, 422, 0],
                    [632, 402, 0],
                    [664, 383, 0],
                    [688, 378, 0],
                    [700, 389, 0],
                    [699, 409, 0],
                    [676, 440, 0],
                    [638, 465, 0],
                    [609, 476, 0],
                    [578, 475, 0],
                    [571, 463, 0],
                    [600, 426, 0],
                    [641, 397, 0],
                    [683, 372, 0],
                    [714, 352, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, -3, 0], [
                    [631, 133, 0],
                    [602, 133, 0]
                ], [0, 0, .4])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(16),
        d = i(h),
        v = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = [
                    [426, 491, 0],
                    [416, 473, 0],
                    [430, 448, 0],
                    [478, 417, 0],
                    [488, 406, 0],
                    [492, 379, 0],
                    [498, 345, 0],
                    [507, 312, 0],
                    [503, 290, 0],
                    [479, 295, 0],
                    [477, 311, 0],
                    [478, 348, 0],
                    [480, 384, 0],
                    [475, 401, 0],
                    [460, 414, 0],
                    [473, 417, 0],
                    [491, 406, 0],
                    [502, 373, 0],
                    [511, 348, 0],
                    [515, 334, 0],
                    [505, 324, 0],
                    [484, 305, 0],
                    [470, 273, 0],
                    [460, 193, 0],
                    [471, 157, 0],
                    [485, 132, 0],
                    [493, 116, 0],
                    [494, 97, 0],
                    [499, 91, 0],
                    [500, 98, 0],
                    [501, 110, 0],
                    [505, 108, 0],
                    [507, 95, 0],
                    [512, 82, 0],
                    [526, 76, 0],
                    [530, 80, 0],
                    [524, 83, 0],
                    [523, 78, 0],
                    [529, 78, 0],
                    [526, 114, 0],
                    [530, 127, 0],
                    [532, 138, 0],
                    [524, 159, 0],
                    [525, 175, 0],
                    [532, 185, 0],
                    [532, 192, 0],
                    [520, 188, 0],
                    [508, 173, 0],
                    [512, 140, 0],
                    [520, 125, 0],
                    [533, 129, 0],
                    [541, 145, 0],
                    [541, 159, 0],
                    [555, 175, 0],
                    [556, 182, 0],
                    [540, 184, 0],
                    [530, 178, 0],
                    [531, 171, 0],
                    [539, 180, 0],
                    [550, 198, 0],
                    [588, 234, 0],
                    [632, 300, 0],
                    [645, 359, 0],
                    [655, 448, 0],
                    [658, 460, 0],
                    [639, 459, 0],
                    [640, 448, 0],
                    [630, 403, 0],
                    [608, 360, 0],
                    [578, 334, 0],
                    [540, 329, 0],
                    [505, 320, 0],
                    [487, 297, 0],
                    [489, 274, 0],
                    [502, 268, 0],
                    [517, 273, 0],
                    [551, 315, 0],
                    [563, 354, 0],
                    [575, 384, 0],
                    [603, 414, 0],
                    [601, 442, 0],
                    [592, 458, 0],
                    [578, 465, 0],
                    [577, 469, 0],
                    [598, 473, 0],
                    [620, 438, 0],
                    [625, 418, 0],
                    [615, 401, 0],
                    [607, 358, 0],
                    [609, 324, 0],
                    [621, 298, 0],
                    [632, 301, 0],
                    [649, 358, 0],
                    [662, 404, 0],
                    [659, 415, 0],
                    [649, 422, 0],
                    [632, 418, 0],
                    [623, 407, 0],
                    [628, 403, 0],
                    [645, 416, 0],
                    [674, 445, 0],
                    [709, 467, 0]
                ]; return (0, l.default)(this, (0, o.default)(t).call(this, n, e || [0, -3, 0], [
                    [515, 124, 0]
                ])) } return (0, f.default)(t, e), t }(d.default);
    t.default = v, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }

    function r() { if (I.length > 0) { document.body.classList.add("isLoading");
            new y.default({ assets: I }).on("error", function(e) {}).on("progress", function(e) { var t = document.body.querySelector(".Loading-Bar");
                t && (t.style.width = (100 * e).toFixed(2) + "%") }).on("complete", o).start() } else u() }

    function o(e) { window.assets = e; var t = document.body.querySelector(".Loading-Bar");
        t.style.width = "100%", a(), setTimeout(function() { document.body.classList.remove("isLoading") }, 250) }

    function a() { A.default.init(function(e) { return s(e) }) }

    function s(e) { if (null != e) { hasVR = !0, document.body.classList.add("hasVR"); var t = document.body.querySelector("#enterVr");
            t.addEventListener("click", function() { A.default.present(p.GL.canvas, function() { window.vrPresenting = !0, document.body.classList.add("present-vr"), C.resize() }) }) }
        E.default.numParticles = hasVR ? 256 : 128, E.default.postEffect = hasVR, u(), d() }

    function u() { var e = document.createElement("canvas");
        e.className = "Main-Canvas", document.body.appendChild(e), p.GL.init(e), p.GL.isMobile && document.body.classList.add("is-mobile"), C = new g.default, !p.GL.isMobile, 1, l() }

    function l() { var e = document.body.querySelector(".button-start");
        e.addEventListener("click", function() { C.nextStop() }); var t = document.body.querySelector(".button-continue");
        t.addEventListener("click", function() { C.nextStop() }); var n = document.body.querySelector(".button-restart");
        n.addEventListener("click", function() { C.restart() }); var i = document.body.querySelector(".button-press");
        i.addEventListener("mousedown", c), i.addEventListener("mouseup", h), window.addEventListener("touchstart", c), window.addEventListener("touchend", h) }

    function c() { D = m.default.Scheduler.addEF(f) }

    function f() { C._spacePressed = !0, C._hasFormFinalShape && h() }

    function h() { m.default.Scheduler.removeEF(D), C._spacePressed = !1, D = -1 }

    function d() { var e = ["https://soundcloud.com/lukeabbottmusic/modern-driveway-jon-hopkins"],
            t = e[Math.floor(Math.random() * e.length)];
        (0, T.default)({ client_id: "e8b7a335a5321247b38da4ccc07b07a2", song: t }, v) }

    function v(e, t, n) { var i = new Audio;
        i.src = t, i.play(), i.loop = !0, i.volume = .5; var r = document.body.querySelector(".button-sound");
        r.addEventListener("click", function() { F = !F, F ? r.classList.remove("sound-off") : r.classList.add("sound-off") }) }
    n(225); var p = n(6),
        m = i(p),
        _ = n(109),
        g = i(_),
        x = n(106),
        y = i(x),
        b = n(221),
        M = (i(b), n(273)),
        w = (i(M), n(11)),
        E = i(w),
        S = n(110),
        T = i(S),
        P = n(69),
        A = i(P),
        C = void 0,
        I = [{ id: "objTrunk", url: "assets/obj/trunk.obj", type: "text" }, { id: "ao", url: "assets/img/ao-trunk.jpg" }, { id: "height", url: "assets/img/height.jpg" }, { id: "nothing", url: "assets/img/nothing.png" }, { id: "normal", url: "assets/img/normal.jpg" }, { id: "noise", url: "assets/img/noise.png" }, { id: "title", url: "assets/img/title.png" }, { id: "fg", url: "assets/img/fg.png" }, { id: "fgMobile", url: "assets/img/fgMobile.png" }, { id: "gradient", url: "assets/img/gradient.jpg" }, { id: "gradientMap", url: "assets/img/gradientMap.jpg" }, { id: "tree", url: "assets/img/tree.jpg" }, { id: "starsmap", url: "assets/img/starsmap.jpg" }, { id: "starsmapMobile", url: "assets/img/starsmapMobile.jpg" }, { id: "vignette", url: "assets/img/vignette.png" }, { id: "presshold", url: "assets/img/presshold.png" }, { id: "stroke", url: "assets/img/stroke3.png" }, { id: "radiance", url: "assets/img/studio_radiance.dds", type: "binary" }, { id: "irr_posx", url: "assets/img/irr_posx.hdr", type: "binary" }, { id: "irr_posx", url: "assets/img/irr_posx.hdr", type: "binary" }, { id: "irr_posy", url: "assets/img/irr_posy.hdr", type: "binary" }, { id: "irr_posz", url: "assets/img/irr_posz.hdr", type: "binary" }, { id: "irr_negx", url: "assets/img/irr_negx.hdr", type: "binary" }, { id: "irr_negy", url: "assets/img/irr_negy.hdr", type: "binary" }, { id: "irr_negz", url: "assets/img/irr_negz.hdr", type: "binary" }];
    window.getAsset = function(e) { return window.assets.find(function(t) { return t.id === e }).file }, document.body ? r() : window.addEventListener("DOMContentLoaded", r), window.hasVR = !1, window.vrPresenting = !1; var D = void 0,
        F = !0 }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(130),
        l = i(u),
        c = function() {
            function e(t) {
                (0, o.default)(this, e), this.owner = t, this.keyboard = new l.default, this.keyboard.onKeyPress("1", this.transformPress.bind(this)), this.keyboard.onKeyPress("2", this.undrawPress.bind(this)), this.keyboard.onKeyPress("a", this.pause.bind(this)), this.aPressed = !1, this.dPressed = !1, this.spacePressed = !1, window.addEventListener("click", this.onClick.bind(this), !1) } return (0, s.default)(e, [{ key: "pause", value: function(e) { this.owner.pause() } }, { key: "undrawPress", value: function(e) { this.owner.undraw() } }, { key: "transformPress", value: function(e) {} }, { key: "onClick", value: function(e) {} }, { key: "update", value: function() { this.aPressed = this.keyboard.isPressed("a"), this.dPressed = this.keyboard.isPressed("d"), this.spacePressed = this.keyboard.isPressed("space") } }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(6),
        l = function() {
            function e(t, n) { var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                (0, o.default)(this, e), this._width = t, this._height = n, this._fboCurrent = new u.FrameBuffer(this._width, this._height, i), this._fboTarget = new u.FrameBuffer(this._width, this._height, i), this._mesh = u.Geom.bigTriangle(), this._passes = [], this._returnTexture } return (0, s.default)(e, [{ key: "addPass", value: function(e) { if (e.getPasses) return void this.addPass(e.getPasses()); if (e.length)
                        for (var t = 0; t < e.length; t++) this._passes.push(e[t]);
                    else this._passes.push(e) } }, { key: "render", value: function(e, t) { var n = this,
                        i = !1,
                        r = void 0,
                        o = void 0,
                        a = void 0; return this._passes.map(function(s, l) { o = 0 === l ? e : a ? a : n._fboCurrent.getTexture(), i = s.hasFbo, r = i ? s.fbo : n._fboTarget, r.bind(), t && u.GL.viewport(t.x, t.y, t.w, t.h), u.GL.clear(0, 0, 0, 0), s.render(o), u.GL.draw(n._mesh), r.unbind(), i ? (a = r.getTexture(), n._returnTexture = a) : (n._swap(), a = null, n._returnTexture = n._fboCurrent.getTexture()) }), this._returnTexture } }, { key: "_swap", value: function() { var e = this._fboCurrent;
                    this._fboCurrent = this._fboTarget, this._fboTarget = e, this._current = this._fboCurrent, this._target = this._fboTarget } }, { key: "getTexture", value: function() { return this._returnTexture } }]), e }();
    t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(6),
        d = n(71),
        v = i(d),
        p = n(237),
        m = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, l.default)(this, (0, o.default)(t).call(this, p)); return e.uniform("uWidth", "float", h.GL.width), e.uniform("uHeight", "float", h.GL.height), e } return (0, f.default)(t, e), t }(v.default);
    t.default = m, e.exports = t.default }, function(e, t, n) { var i;
    i = function(e, t, n) { Keyboard = function() { this._states = { up: 0, down: 1 }, this._keyCodes = { 37: { label: "left", state: 0, preventBubble: !0 }, 38: { label: "up", state: 0, preventBubble: !0 }, 39: { label: "right", state: 0, preventBubble: !0 }, 40: { label: "down", state: 0, preventBubble: !0 }, 49: { label: "1", state: 0, preventBubble: !0 }, 50: { label: "2", state: 0, preventBubble: !0 }, 51: { label: "3", state: 0, preventBubble: !0 }, 52: { label: "4", state: 0, preventBubble: !0 }, 53: { label: "5", state: 0, preventBubble: !0 }, 54: { label: "6", state: 0, preventBubble: !0 }, 55: { label: "7", state: 0, preventBubble: !0 }, 56: { label: "8", state: 0, preventBubble: !0 }, 57: { label: "9", state: 0, preventBubble: !0 }, 97: { label: "numpad1", state: 0, preventBubble: !0 }, 98: { label: "numpad2", state: 0, preventBubble: !0 }, 99: { label: "numpad3", state: 0, preventBubble: !0 }, 100: { label: "numpad4", state: 0, preventBubble: !0 }, 101: { label: "numpad5", state: 0, preventBubble: !0 }, 102: { label: "numpad6", state: 0, preventBubble: !0 }, 103: { label: "numpad7", state: 0, preventBubble: !0 }, 104: { label: "numpad8", state: 0, preventBubble: !0 }, 105: { label: "numpad9", state: 0, preventBubble: !0 }, 13: { label: "enter", state: 0, preventBubble: !1 }, 32: { label: "space", state: 0, preventBubble: !0 }, 65: { label: "a", state: 0, preventBubble: !0 }, 68: { label: "d", state: 0, preventBubble: !0 }, 83: { label: "s", state: 0, preventBubble: !0 }, 87: { label: "w", state: 0, preventBubble: !0 }, 89: { label: "y", state: 0, preventBubble: !0 }, 90: { label: "z", state: 0, preventBubble: !0 }, 88: { label: "x", state: 0, preventBubble: !0 } }, this.hash = {}, this.hashUp = {}, this.started = !1, this.disabled = !1, this.start(), this.dirty = !1 }, Keyboard.prototype.start = function() { if (!this.started) { this.started = !0; var e = this;
                this._onKeyDown = function(t) { return e.processKeyDown(t) }, this._onKeyUp = function(t) { return e.processKeyUp(t) }, window.addEventListener("keydown", this._onKeyDown, !1), window.addEventListener("keyup", this._onKeyUp, !1) } }, Keyboard.prototype.stop = function() { if (this.started) { this.started = !1; for (var e in this._keyCodes) this._keyCodes[e].state = this._states.up;
                this.dirty = !0, window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp) } }, Keyboard.prototype.processKeyDown = function(e) { if (this.disabled !== !0) { var t = e.keyCode; if (this.keyCode = t, this._keyCodes.hasOwnProperty(t)) { var n = this._keyCodes[t];
                    n.preventBubble && e.preventDefault(), n.state != this._states.down && (n.state = this._states.down, this.dirty = !0, this.hash[n.label] && this.hash[n.label](n)) } } }, Keyboard.prototype.processKeyUp = function(e) { if (this.disabled !== !0) { var t = e.keyCode; if (this.keyCode = null, this._keyCodes.hasOwnProperty(t)) { var n = this._keyCodes[t];
                    n.preventBubble && e.preventDefault(), n.state != this._states.up && (n.state = this._states.up, this.dirty = !0, this.hashUp[n.label] && this.hashUp[n.label](n)) } } }, Keyboard.prototype.isPressed = function(e) { var t = this.getCodeFromLabel(e); return t ? this._keyCodes[t].state === this._states.down : !1 }, Keyboard.prototype.getCodeFromLabel = function(e) { for (var t in this._keyCodes)
                if (this._keyCodes[t].label === e) return t;
            return !1 }, Keyboard.prototype.onKeyPress = function(e, t) { this.hash[e] = t }, Keyboard.prototype.onKeyRelease = function(e, t) { this.hashUp[e] = t }, n.exports = Keyboard }.call(t, n, t, e), !(void 0 !== i && (e.exports = i)) }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(10),
        l = i(u),
        c = n(74),
        f = i(c),
        h = void 0,
        d = function() {
            function e(t) { var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                (0, o.default)(this, e), h = l.default.gl, this._size = t, this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, this._init() } return (0, s.default)(e, [{ key: "_init", value: function() { this.texture = h.createTexture(), this.glTexture = new f.default(this.texture, {}, !0), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT); for (var e = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z], t = 0; t < e.length; t++) h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), h.texImage2D(e[t], 0, h.RGBA, this.width, this.height, 0, h.RGBA, h.FLOAT, null);
                    this._frameBuffers = []; for (var n = 0; n < e.length; n++) { var i = h.createFramebuffer();
                        h.bindFramebuffer(h.FRAMEBUFFER, i), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, e[n], this.texture, 0); var r = h.checkFramebufferStatus(h.FRAMEBUFFER);
                        r !== h.FRAMEBUFFER_COMPLETE, this._frameBuffers.push(i) }
                    h.bindFramebuffer(h.FRAMEBUFFER, null), h.bindRenderbuffer(h.RENDERBUFFER, null), h.bindTexture(h.TEXTURE_CUBE_MAP, null) } }, { key: "bind", value: function(e) { l.default.viewport(0, 0, this.width, this.height), h.bindFramebuffer(h.FRAMEBUFFER, this._frameBuffers[e]) } }, { key: "unbind", value: function() { h.bindFramebuffer(h.FRAMEBUFFER, null), l.default.viewport(0, 0, l.default.width, l.default.height) } }, { key: "getTexture", value: function() { return this.glTexture } }, { key: "width", get: function() { return this._size } }, { key: "height", get: function() { return this._size } }]), e }();
    t.default = d, e.exports = t.default }, function(e, t, n) {
    "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }

    function r(e) { return 0 !== e && !(e & e - 1) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(1),
        a = i(o),
        s = n(2),
        u = i(s),
        l = n(10),
        c = i(l),
        f = n(75),
        h = i(f),
        d = void 0,
        v = void 0,
        p = function() {
            function e(t, n) { var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    o = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                (0, a.default)(this, e), d = c.default.gl, v = c.default.checkExtension("WEBGL_depth_texture"), this.width = t, this.height = n, this._multipleTargets = o, this.magFilter = i.magFilter || d.LINEAR, this.minFilter = i.minFilter || d.LINEAR, this.wrapS = i.wrapS || d.CLAMP_TO_EDGE, this.wrapT = i.wrapT || d.CLAMP_TO_EDGE, this.useDepth = i.useDepth || !0, this.useStencil = i.useStencil || !1, this.texelType = i.type, r(this.width) && r(this.height) || (this.wrapS = this.wrapT = d.CLAMP_TO_EDGE, this.minFilter === d.LINEAR_MIPMAP_NEAREST && (this.minFilter = d.LINEAR)), this._init() }
            return (0, u.default)(e, [{ key: "_init", value: function() { if (this._textures = [], this._multipleTargets)
                        for (var e = 0; 4 > e; e++) { var t = d.createTexture(),
                                n = new h.default(t, !0);
                            this._textures.push(n) } else this.texture = d.createTexture(), this.glTexture = new h.default(this.texture, !0), this._textures.push(this.glTexture);
                    this.depthTexture = d.createTexture(), this.glDepthTexture = new h.default(this.depthTexture, !0), this.frameBuffer = d.createFramebuffer(), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer); var i = c.default.getExtension("WEBGL_draw_buffers");!i && this._multipleTargets; var r = d.UNSIGNED_BYTE,
                        o = c.default.getExtension("OES_texture_half_float");
                    c.default.checkExtension("OES_texture_float") ? r = d.FLOAT : o && (r = o.HALF_FLOAT_OES), c.default.isMobile && r === d.FLOAT && o && (r = o.HALF_FLOAT_OES), this.texelType && (r = this.texelType); for (var a = 0; a < this._textures.length; a++) d.bindTexture(d.TEXTURE_2D, this._textures[a].texture), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, this.width, this.height, 0, d.RGBA, r, null);
                    v && (d.bindTexture(d.TEXTURE_2D, this.depthTexture), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, d.DEPTH_COMPONENT, this.width, this.height, 0, d.DEPTH_COMPONENT, d.UNSIGNED_SHORT, null)); for (var s = 0; s < this._textures.length; s++) d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0 + s, d.TEXTURE_2D, this._textures[s].texture, 0); if (this._multipleTargets && i.drawBuffersWEBGL([i.COLOR_ATTACHMENT0_WEBGL, i.COLOR_ATTACHMENT1_WEBGL, i.COLOR_ATTACHMENT2_WEBGL, i.COLOR_ATTACHMENT3_WEBGL]), d.framebufferTexture2D(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.TEXTURE_2D, this.depthTexture, 0), this.minFilter === d.LINEAR_MIPMAP_NEAREST)
                        for (var u = 0; u < this._textures.length; u++) d.bindTexture(d.TEXTURE_2D, this._textures[u].texture), d.generateMipmap(d.TEXTURE_2D); var l = d.checkFramebufferStatus(d.FRAMEBUFFER);
                    l != d.FRAMEBUFFER_COMPLETE, d.bindTexture(d.TEXTURE_2D, null), d.bindRenderbuffer(d.RENDERBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, null), this.clear() } }, {
                key: "bind",
                value: function() {
                    c.default.viewport(0, 0, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer)
                }
            }, { key: "unbind", value: function() { d.bindFramebuffer(d.FRAMEBUFFER, null), c.default.viewport(0, 0, c.default.width, c.default.height) } }, { key: "clear", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
                    this.bind(), c.default.clear(e, t, n, i), this.unbind() } }, { key: "getTexture", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0]; return this._textures[e] } }, { key: "getDepthTexture", value: function() { return this.glDepthTexture } }, { key: "minFilter", value: function(e) { return e !== d.LINEAR && e !== d.NEAREST && e !== d.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = e, this) } }, { key: "magFilter", value: function(e) { return e !== d.LINEAR && e !== d.NEAREST && e !== d.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = e, this) } }, { key: "wrapS", value: function(e) { return e !== d.CLAMP_TO_EDGE && e !== d.REPEAT && e !== d.MIRRORED_REPEAT ? this : (this.wrapS = e, this) } }, { key: "wrapT", value: function(e) { return e !== d.CLAMP_TO_EDGE && e !== d.REPEAT && e !== d.MIRRORED_REPEAT ? this : (this.wrapT = e, this) } }]), e
        }();
    t.default = p, e.exports = t.default
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(44),
        p = i(v),
        m = n(8),
        _ = i(m),
        g = _.default.vec3,
        x = [
            [g.fromValues(0, 0, 0), g.fromValues(1, 0, 0), g.fromValues(0, -1, 0)],
            [g.fromValues(0, 0, 0), g.fromValues(-1, 0, 0), g.fromValues(0, -1, 0)],
            [g.fromValues(0, 0, 0), g.fromValues(0, 1, 0), g.fromValues(0, 0, 1)],
            [g.fromValues(0, 0, 0), g.fromValues(0, -1, 0), g.fromValues(0, 0, -1)],
            [g.fromValues(0, 0, 0), g.fromValues(0, 0, 1), g.fromValues(0, -1, 0)],
            [g.fromValues(0, 0, 0), g.fromValues(0, 0, -1), g.fromValues(0, -1, 0)]
        ],
        y = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this)); return e.setPerspective(Math.PI / 2, 1, .1, 1e3), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "face", value: function(e) { var t = x[e];
                    this.lookAt(t[0], t[1], t[2]) } }]), t }(p.default);
    t.default = y, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(5),
        l = i(u),
        c = n(4),
        f = i(c),
        h = n(10),
        d = i(h),
        v = n(25),
        p = i(v),
        m = n(14),
        _ = i(m),
        g = n(17),
        x = i(g),
        y = n(239),
        b = n(238),
        M = function(e) {
            function t() {
                (0, s.default)(this, t); var e = [],
                    n = [],
                    i = [0, 1, 2, 3, 4, 5],
                    r = 9999;
                e.push([-r, 0, 0]), e.push([r, 0, 0]), e.push([0, -r, 0]), e.push([0, r, 0]), e.push([0, 0, -r]), e.push([0, 0, r]), n.push([1, 0, 0]), n.push([1, 0, 0]), n.push([0, 1, 0]), n.push([0, 1, 0]), n.push([0, 0, 1]), n.push([0, 0, 1]); var a = new p.default(d.default.LINES);
                a.bufferVertex(e), a.bufferIndex(i), a.bufferData(n, "aColor", 3); var u = new _.default(y, b); return (0, l.default)(this, (0, o.default)(t).call(this, a, u)) } return (0, f.default)(t, e), t }(x.default);
    t.default = M, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(30),
        _ = i(m),
        g = n(14),
        x = i(g),
        y = n(17),
        b = i(y),
        M = n(100),
        w = n(41),
        E = function(e) {
            function t() {
                (0, s.default)(this, t); var e = _.default.sphere(1, 24),
                    n = new x.default(M, w); return (0, f.default)(this, (0, o.default)(t).call(this, e, n)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? [0, 0, 0] : arguments[0],
                        n = arguments.length <= 1 || void 0 === arguments[1] ? [1, 1, 1] : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                        r = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
                    this.shader.bind(), this.shader.uniform("position", "uniform3fv", e), this.shader.uniform("scale", "uniform3fv", n), this.shader.uniform("color", "uniform3fv", i), this.shader.uniform("opacity", "uniform1f", r), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(b.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(30),
        _ = i(m),
        g = n(14),
        x = i(g),
        y = n(17),
        b = i(y),
        M = n(99),
        w = n(64),
        E = function(e) {
            function t() {
                (0, s.default)(this, t); var e = _.default.bigTriangle(),
                    n = new x.default(M, w),
                    i = (0, f.default)(this, (0, o.default)(t).call(this, e, n)); return n.bind(), n.uniform("texture", "uniform1i", 0), i } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function(e) { this.shader.bind(), e.bind(0), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(b.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(10),
        _ = i(m),
        g = n(25),
        x = i(g),
        y = n(14),
        b = i(y),
        M = n(17),
        w = i(M),
        E = n(241),
        S = n(41),
        T = function(e) {
            function t() {
                (0, s.default)(this, t); var e = [],
                    n = [],
                    i = 0,
                    r = 100,
                    a = 50,
                    u = a / r,
                    l = void 0,
                    c = void 0; for (l = -a / 2; a > l; l += u)
                    for (c = -a / 2; a > c; c += u) e.push([l, c, 0]), n.push(i), i++, e.push([l, 0, c]), n.push(i), i++; var h = new x.default(_.default.POINTS);
                h.bufferVertex(e), h.bufferIndex(n); var d = new b.default(E, S),
                    v = (0, f.default)(this, (0, o.default)(t).call(this, h, d)); return v.color = [1, 1, 1], v.opacity = .5, v } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function() { this.shader.bind(), this.shader.uniform("color", "uniform3fv", this.color), this.shader.uniform("opacity", "uniform1f", this.opacity), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(w.default);
    t.default = T, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(10),
        _ = i(m),
        g = n(25),
        x = i(g),
        y = n(14),
        b = i(y),
        M = n(17),
        w = i(M),
        E = n(63),
        S = n(41),
        T = function(e) {
            function t() {
                (0, s.default)(this, t); var e = [],
                    n = [0, 1],
                    i = [
                        [0, 0],
                        [1, 1]
                    ];
                e.push([0, 0, 0]), e.push([0, 0, 0]); var r = new x.default(_.default.LINES);
                r.bufferVertex(e), r.bufferTexCoord(i), r.bufferIndex(n); var a = new b.default(E, S); return (0, f.default)(this, (0, o.default)(t).call(this, r, a)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function(e, n) { var i = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                        r = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
                    this._mesh.bufferVertex([e, n]), this._shader.bind(), this._shader.uniform("color", "vec3", i), this._shader.uniform("opacity", "float", r), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(w.default);
    t.default = T, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(30),
        _ = i(m),
        g = n(14),
        x = i(g),
        y = n(17),
        b = i(y),
        M = n(245),
        w = n(64),
        E = function(e) {
            function t() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0],
                    n = arguments.length <= 1 || void 0 === arguments[1] ? 24 : arguments[1];
                (0, s.default)(this, t); var i = _.default.sphere(e, n, !0),
                    r = new x.default(M, w); return (0, f.default)(this, (0, o.default)(t).call(this, i, r)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function(e) { this.shader.bind(), e.bind(0), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(b.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(30),
        _ = i(m),
        g = n(14),
        x = i(g),
        y = n(17),
        b = i(y),
        M = n(102),
        w = n(101),
        E = function(e) {
            function t() { var e = arguments.length <= 0 || void 0 === arguments[0] ? 20 : arguments[0];
                (0, s.default)(this, t); var n = _.default.skybox(e),
                    i = new x.default(M, w); return (0, f.default)(this, (0, o.default)(t).call(this, n, i)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "draw", value: function(e) { this.shader.bind(), e.bind(0), (0, d.default)((0, o.default)(t.prototype), "draw", this).call(this) } }]), t }(b.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(29),
        l = i(u),
        c = n(10),
        f = i(c),
        h = n(44),
        d = i(h),
        v = n(76),
        p = i(v),
        m = n(78),
        _ = i(m),
        g = function() {
            function e() { var t = this;
                (0, o.default)(this, e), this._init(), this._initTextures(), this._initViews(), this._efIndex = l.default.addEF(function() { return t._loop() }), window.addEventListener("resize", function() { return t.resize() }) } return (0, s.default)(e, [{ key: "render", value: function() {} }, { key: "stop", value: function() {-1 !== this._efIndex && (this._efIndex = l.default.removeEF(this._efIndex)) } }, { key: "start", value: function() { var e = this; - 1 === this._efIndex && (this._efIndex = l.default.addEF(function() { return e._loop() })) } }, { key: "resize", value: function() { f.default.setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(f.default.aspectRatio) } }, { key: "_initTextures", value: function() {} }, { key: "_initViews", value: function() {} }, { key: "_init", value: function() { this.camera = new d.default, this.camera.setPerspective(45 * Math.PI / 180, f.default.aspectRatio, .1, 100), this.orbitalControl = new _.default(this.camera, window, 15), this.orbitalControl.radius.value = 10, this.cameraOrtho = new p.default } }, { key: "_loop", value: function() { f.default.viewport(0, 0, f.default.width, f.default.height), f.default.setMatrices(this.camera), this.render() } }]), e }();
    t.default = g, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(14),
        l = i(u),
        c = function() {
            function e(t, n) {
                (0, o.default)(this, e), this.shader = new l.default(t, n), this._init() } return (0, s.default)(e, [{ key: "_init", value: function() {} }, { key: "render", value: function() {} }]), e }();
    t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(45),
        p = i(v),
        m = n(146),
        _ = i(m),
        g = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, !0)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "parse", value: function(e) { return (0, _.default)(e) } }, { key: "_onLoaded", value: function() { var e = this.parse(this._req.response);
                    this._callback && this._callback(e) } }]), t }(p.default);
    g.parse = function(e) { return (0, _.default)(e) }, t.default = g, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(45),
        _ = i(m),
        g = n(25),
        x = i(g),
        y = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).apply(this, arguments)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "load", value: function(e, n) { var i = arguments.length <= 2 || void 0 === arguments[2] ? 4 : arguments[2];
                    this._drawType = i, (0, d.default)((0, o.default)(t.prototype), "load", this).call(this, e, n) } }, { key: "_onLoaded", value: function() { this.parseObj(this._req.response) } }, { key: "parseObj", value: function(e) {
                    function t(e) { var t = parseInt(e); return 3 * (t >= 0 ? t - 1 : t + h.length / 3) }

                    function n(e) { var t = parseInt(e); return 3 * (t >= 0 ? t - 1 : t + d.length / 3) }

                    function i(e) { var t = parseInt(e); return 2 * (t >= 0 ? t - 1 : t + v.length / 2) }

                    function r(e, t, n) { l.push([h[e], h[e + 1], h[e + 2]]), l.push([h[t], h[t + 1], h[t + 2]]), l.push([h[n], h[n + 1], h[n + 2]]), p.push(3 * m + 0), p.push(3 * m + 1), p.push(3 * m + 2), m++ }

                    function o(e, t, n) { c.push([v[e], v[e + 1]]), c.push([v[t], v[t + 1]]), c.push([v[n], v[n + 1]]) }

                    function a(e, t, n) { f.push([d[e], d[e + 1], d[e + 2]]), f.push([d[t], d[t + 1], d[t + 2]]), f.push([d[n], d[n + 1], d[n + 2]]) }

                    function s(e, s, u, l, c, f, h, d, v, p, m, _) { var g = t(e),
                            x = t(s),
                            y = t(u),
                            b = void 0;
                        void 0 === l ? r(g, x, y) : (b = t(l), r(g, x, b), r(x, y, b)), void 0 !== c && (g = i(c), x = i(f), y = i(h), void 0 === l ? o(g, x, y) : (b = i(d), o(g, x, b), o(x, y, b))), void 0 !== v && (g = n(v), x = n(p), y = n(m), void 0 === l ? a(g, x, y) : (b = n(_), a(g, x, b), a(x, y, b))) } for (var u = e.split("\n"), l = [], c = [], f = [], h = [], d = [], v = [], p = [], m = 0, _ = void 0, g = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, x = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, y = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, b = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, M = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, w = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, E = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, S = 0; S < u.length; S++) { var T = u[S];
                        T = T.trim(), 0 !== T.length && "#" !== T.charAt(0) && (null !== (_ = g.exec(T)) ? h.push(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])) : null !== (_ = x.exec(T)) ? d.push(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])) : null !== (_ = y.exec(T)) ? v.push(parseFloat(_[1]), parseFloat(_[2])) : null !== (_ = b.exec(T)) ? s(_[1], _[2], _[3], _[4]) : null !== (_ = M.exec(T)) ? s(_[2], _[5], _[8], _[11], _[3], _[6], _[9], _[12]) : null !== (_ = w.exec(T)) ? s(_[2], _[6], _[10], _[14], _[3], _[7], _[11], _[15], _[4], _[8], _[12], _[16]) : null !== (_ = E.exec(T)) && s(_[2], _[5], _[8], _[11], void 0, void 0, void 0, void 0, _[3], _[6], _[9], _[12])) } return this._generateMeshes({ positions: l, coords: c, normals: f, indices: p }) } }, { key: "_generateMeshes", value: function(e) { var t = 65535,
                        n = e.normals.length > 0,
                        i = e.coords.length > 0,
                        r = void 0; if (e.positions.length > t) { var o = [],
                            a = 0,
                            s = {}; for (s.positions = e.positions.concat(), s.coords = e.coords.concat(), s.indices = e.indices.concat(), s.normals = e.normals.concat(); e.indices.length > 0;) { for (var u = Math.min(t, e.positions.length), l = e.indices.splice(0, u), c = [], f = [], h = [], d = void 0, v = 0, p = 0; p < l.length; p++) l[p] > v && (v = l[p]), d = l[p], c.push(s.positions[d]), i && f.push(s.coords[d]), n && h.push(s.normals[d]), l[p] -= a;
                            a = v + 1, r = new x.default(this._drawType), r.bufferVertex(c), i && r.bufferTexCoord(f), r.bufferIndex(l), n && r.bufferNormal(h), o.push(r) } return this._callback && this._callback(o, s), o } return r = new x.default(this._drawType), r.bufferVertex(e.positions), i && r.bufferTexCoord(e.coords), r.bufferIndex(e.indices), n && r.bufferNormal(e.normals), this._callback && this._callback(r, e), r } }]), t }(_.default);
    y.parse = function(e) { var t = new y; return t.parseObj(e) }, t.default = y, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = !0; try { var l = document.createEvent("CustomEvent");
        l = null } catch (c) { u = !1 } var f = function() {
        function e() {
            (0, o.default)(this, e), this._eventListeners = {} } return (0, s.default)(e, [{ key: "addEventListener", value: function(e, t) { return null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}), this._eventListeners[e] || (this._eventListeners[e] = []), this._eventListeners[e].push(t), this } }, { key: "on", value: function(e, t) { return this.addEventListener(e, t) } }, { key: "removeEventListener", value: function(e, t) { null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}); var n = this._eventListeners[e]; if ("undefined" == typeof n) return this; for (var i = n.length, r = 0; i > r; r++) n[r] === t && (n.splice(r, 1), r--, i--); return this } }, { key: "off", value: function(e, t) { return this.removeEventListener(e, t) } }, { key: "dispatchEvent", value: function(e) { null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}); var t = e.type; try { null === e.target && (e.target = this), e.currentTarget = this } catch (n) { var i = { type: t, detail: e.detail, dispatcher: this }; return this.dispatchEvent(i) } var r = this._eventListeners[t]; if (null !== r && void 0 !== r)
                    for (var o = this._copyArray(r), a = o.length, s = 0; a > s; s++) { var u = o[s];
                        u.call(this, e) }
                return this } }, { key: "dispatchCustomEvent", value: function(e, t) { var n = void 0; return u ? (n = document.createEvent("CustomEvent"), n.dispatcher = this, n.initCustomEvent(e, !1, !1, t)) : n = { type: e, detail: t, dispatcher: this }, this.dispatchEvent(n) } }, { key: "trigger", value: function(e, t) { return this.dispatchCustomEvent(e, t) } }, { key: "_destroy", value: function() { if (null !== this._eventListeners) { for (var e in this._eventListeners)
                        if (this._eventListeners.hasOwnProperty(e)) { for (var t = this._eventListeners[e], n = t.length, i = 0; n > i; i++) t[i] = null;
                            delete this._eventListeners[e] }
                    this._eventListeners = null } } }, { key: "_copyArray", value: function(e) { for (var t = new Array(e.length), n = t.length, i = 0; n > i; i++) t[i] = e[i]; return t } }]), e }();
    t.default = f, e.exports = t.default }, function(e, t) { "use strict";

    function n(e, t, n, i, r, o) {
        function a(t) { var n = 0;
            do t[n++] = e[i]; while (++i < p && n < t.length); return n }

        function s(t, n, r) { var o = 0;
            do t[n + o++] = e[i]; while (++i < p && r > o); return o }

        function u(e, t, n, i) { var r = 4 * i,
                o = s(t, n, r); if (r > o) throw new Error("Error reading raw pixels: got " + o + " bytes, expected " + r) } for (var l = new Array(4), c = null, f = void 0, h = void 0, d = void 0, v = new Array(2), p = e.length; o > 0;) { if (a(l) < l.length) throw new Error("Error reading bytes: expected " + l.length); if (2 !== l[0] || 2 !== l[1] || 0 !== (128 & l[2])) return t[n++] = l[0], t[n++] = l[1], t[n++] = l[2], t[n++] = l[3], void u(e, t, n, r * o - 1); if (((255 & l[2]) << 8 | 255 & l[3]) !== r) throw new Error("Wrong scanline width " + ((255 & l[2]) << 8 | 255 & l[3]) + ", expected " + r);
            null === c && (c = new Array(4 * r)), f = 0; for (var m = 0; 4 > m; m++)
                for (h = (m + 1) * r; h > f;) { if (a(v) < v.length) throw new Error("Error reading 2-byte buffer"); if ((255 & v[0]) > 128) { if (d = (255 & v[0]) - 128, 0 === d || d > h - f) throw new Error("Bad scanline data"); for (; d-- > 0;) c[f++] = v[1] } else { if (d = 255 & v[0], 0 === d || d > h - f) throw new Error("Bad scanline data"); if (c[f++] = v[1], --d > 0) { if (s(c, f, d) < d) throw new Error("Error reading non-run data");
                            f += d } } }
            for (var _ = 0; r > _; _++) t[n + 0] = c[_], t[n + 1] = c[_ + r], t[n + 2] = c[_ + 2 * r], t[n + 3] = c[_ + 3 * r], n += 4;
            o-- } }

    function i(e) {
        function t() { var t = "";
            do { var n = e[i]; if (n === c) {++i; break }
                t += String.fromCharCode(n) } while (++i < l); return t }
        e instanceof ArrayBuffer && (e = new Uint8Array(e)); for (var i = 0, l = e.length, c = 10, f = 0, h = 0, d = 1, v = 1, p = !1, m = 0; 20 > m; m++) { var _ = t(),
                g = void 0; if (g = _.match(r));
            else if (g = _.match(s)) p = !0;
            else if (g = _.match(a)) d = Number(g[1]);
            else if (g = _.match(o));
            else if (g = _.match(u)) { h = Number(g[1]), f = Number(g[2]); break } } if (!p) throw new Error("File is not run length encoded!"); var x = new Uint8Array(f * h * 4),
            y = f,
            b = h;
        n(e, x, 0, i, y, b); for (var M = new Float32Array(f * h * 4), w = 0; w < x.length; w += 4) { var E = x[w + 0] / 255,
                S = x[w + 1] / 255,
                T = x[w + 2] / 255,
                P = x[w + 3],
                A = Math.pow(2, P - 128);
            E *= A, S *= A, T *= A; var C = w;
            M[C + 0] = E, M[C + 1] = S, M[C + 2] = T, M[C + 3] = 1 } return { shape: [f, h], exposure: d, gamma: v, data: M } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = "#\\?RADIANCE",
        o = "#.*",
        a = "EXPOSURE=\\s*([0-9]*[.][0-9]*)",
        s = "FORMAT=32-bit_rle_rgbe",
        u = "-Y ([0-9]+) \\+X ([0-9]+)";
    t.default = i, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(8),
        l = i(u),
        c = n(46),
        f = i(c),
        h = n(29),
        d = i(h),
        v = function(e, t) { var n = t || {}; return e.touches ? (n.x = e.touches[0].pageX, n.y = e.touches[0].pageY) : (n.x = e.clientX, n.y = e.clientY), n },
        p = function() {
            function e(t) { var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? .1 : arguments[2];
                (0, o.default)(this, e), this._target = t, this._listenerTarget = i, this.matrix = l.default.mat4.create(), this.m = l.default.mat4.create(), this._vZaxis = l.default.vec3.clone([0, 0, 0]), this._zAxis = l.default.vec3.clone([0, 0, 1]), this.preMouse = { x: 0, y: 0 }, this.mouse = { x: 0, y: 0 }, this._isMouseDown = !1, this._rotation = l.default.quat.create(), this.tempRotation = l.default.quat.create(), this._rotateZMargin = 0, this._offset = .004, this._slerp = -1, this._isLocked = !1, this._diffX = new f.default(0, r), this._diffY = new f.default(0, r), this._listenerTarget.addEventListener("mousedown", function(e) { return n._onDown(e) }), this._listenerTarget.addEventListener("touchstart", function(e) { return n._onDown(e) }), this._listenerTarget.addEventListener("mousemove", function(e) { return n._onMove(e) }), this._listenerTarget.addEventListener("touchmove", function(e) { return n._onMove(e) }), window.addEventListener("touchend", function() { return n._onUp() }), window.addEventListener("mouseup", function() { return n._onUp() }), d.default.addEF(function() { return n._loop() }) } return (0, s.default)(e, [{ key: "inverseControl", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isInvert = e } }, { key: "lock", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this._isLocked = e } }, { key: "setCameraPos", value: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1]; if (this.easing = t, !(this._slerp > 0)) { var n = l.default.quat.clone(this._rotation);
                        this._updateRotation(n), this._rotation = l.default.quat.clone(n), this._currDiffX = this.diffX = 0, this._currDiffY = this.diffY = 0, this._isMouseDown = !1, this._isRotateZ = 0, this._targetQuat = l.default.quat.clone(e), this._slerp = 1 } } }, { key: "resetQuat", value: function() { this._rotation = l.default.quat.clone([0, 0, 1, 0]), this.tempRotation = l.default.quat.clone([0, 0, 0, 0]), this._targetQuat = void 0, this._slerp = -1 } }, { key: "_onDown", value: function(e) { if (!this._isLocked) { var t = v(e),
                            n = l.default.quat.clone(this._rotation);
                        this._updateRotation(n), this._rotation = n, this._isMouseDown = !0, this._isRotateZ = 0, this.preMouse = { x: t.x, y: t.y }, t.y < this._rotateZMargin || t.y > window.innerHeight - this._rotateZMargin ? this._isRotateZ = 1 : (t.x < this._rotateZMargin || t.x > window.innerWidth - this._rotateZMargin) && (this._isRotateZ = 2), this._diffX.setTo(0), this._diffY.setTo(0) } } }, { key: "_onMove", value: function(e) { this._isLocked || v(e, this.mouse) } }, { key: "_onUp", value: function() { this._isLocked || (this._isMouseDown = !1) } }, { key: "_updateRotation", value: function(e) { this._isMouseDown && !this._isLocked && (this._diffX.value = -(this.mouse.x - this.preMouse.x), this._diffY.value = this.mouse.y - this.preMouse.y, this._isInvert && (this._diffX.value = -this._diffX.targetValue, this._diffY.value = -this._diffY.targetValue)); var t = void 0,
                        n = void 0; if (this._isRotateZ > 0) 1 === this._isRotateZ ? (t = -this._diffX.value * this._offset, t *= this.preMouse.y < this._rotateZMargin ? -1 : 1, n = l.default.quat.clone([0, 0, Math.sin(t), Math.cos(t)]), l.default.quat.multiply(n, e, n)) : (t = -this._diffY.value * this._offset, t *= this.preMouse.x < this._rotateZMargin ? 1 : -1, n = l.default.quat.clone([0, 0, Math.sin(t), Math.cos(t)]), l.default.quat.multiply(n, e, n));
                    else { var i = l.default.vec3.clone([this._diffX.value, this._diffY.value, 0]),
                            r = l.default.vec3.create();
                        l.default.vec3.cross(r, i, this._zAxis), l.default.vec3.normalize(r, r), t = l.default.vec3.length(i) * this._offset, n = l.default.quat.clone([Math.sin(t) * r[0], Math.sin(t) * r[1], Math.sin(t) * r[2], Math.cos(t)]), l.default.quat.multiply(e, n, e) } } }, { key: "_loop", value: function() { l.default.mat4.identity(this.m), void 0 === this._targetQuat ? (l.default.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]), this._updateRotation(this.tempRotation)) : (this._slerp += .1 * (0 - this._slerp), this._slerp < 5e-4 ? (l.default.quat.copy(this._rotation, this._targetQuat), l.default.quat.copy(this.tempRotation, this._targetQuat), this._targetQuat = void 0, this._diffX.setTo(0), this._diffY.setTo(0), this._slerp = -1) : (l.default.quat.set(this.tempRotation, 0, 0, 0, 0), l.default.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp))), l.default.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation), l.default.mat4.fromQuat(this.matrix, this.tempRotation) } }, { key: "easing", set: function(e) { this._diffX.easing = e, this._diffY.easing = e }, get: function() { return this._diffX.easing } }]), e }();
    t.default = p, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(41),
        o = i(r),
        a = n(99),
        s = i(a),
        u = n(100),
        l = i(u),
        c = n(64),
        f = i(c),
        h = n(63),
        d = i(h),
        v = n(102),
        p = i(v),
        m = n(101),
        _ = i(m),
        g = n(242),
        x = i(g),
        y = n(243),
        b = i(y),
        M = n(244),
        w = i(M),
        E = { simpleColorFrag: o.default, bigTriangleVert: s.default, generalVert: l.default, copyFrag: f.default, basicVert: d.default, skyboxVert: p.default, skyboxFrag: _.default, pbrVert: x.default, pbrColorFrag: b.default, pbrTextureFrag: w.default };
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }

    function r(e) { switch (e) { default:
                case "linear":
                return f.Linear.None;
            case "expIn":
                    return f.Exponential.In;
            case "expOut":
                    return f.Exponential.Out;
            case "expInOut":
                    return f.Exponential.InOut;
            case "cubicIn":
                    return f.Cubic.In;
            case "cubicOut":
                    return f.Cubic.Out;
            case "cubicInOut":
                    return f.Cubic.InOut;
            case "quarticIn":
                    return f.Quartic.In;
            case "quarticOut":
                    return f.Quartic.Out;
            case "quarticInOut":
                    return f.Quartic.InOut;
            case "quinticIn":
                    return f.Quintic.In;
            case "quinticOut":
                    return f.Quintic.Out;
            case "quinticInOut":
                    return f.Quintic.InOut;
            case "sinusoidalIn":
                    return f.Sinusoidal.In;
            case "sinusoidalOut":
                    return f.Sinusoidal.Out;
            case "sinusoidalInOut":
                    return f.Sinusoidal.InOut;
            case "circularIn":
                    return f.Circular.In;
            case "circularOut":
                    return f.Circular.Out;
            case "circularInOut":
                    return f.Circular.InOut;
            case "elasticIn":
                    return f.Elastic.In;
            case "elasticOut":
                    return f.Elastic.Out;
            case "elasticInOut":
                    return f.Elastic.InOut;
            case "backIn":
                    return f.Back.In;
            case "backOut":
                    return f.Back.Out;
            case "backInOut":
                    return f.Back.InOut;
            case "bounceIn":
                    return f.Bounce.in;
            case "bounceOut":
                    return f.Bounce.out;
            case "bounceInOut":
                    return f.Bounce.inOut } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(1),
        a = i(o),
        s = n(2),
        u = i(s),
        l = n(29),
        c = i(l),
        f = { Linear: { None: function(e) { return e } }, Quadratic: { In: function(e) { return e * e }, Out: function(e) { return e * (2 - e) }, InOut: function(e) { return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) } }, Cubic: { In: function(e) { return e * e * e }, Out: function(e) { return --e * e * e + 1 }, InOut: function(e) { return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) } }, Quartic: { In: function(e) { return e * e * e * e }, Out: function(e) { return 1 - --e * e * e * e }, InOut: function(e) { return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) } }, Quintic: { In: function(e) { return e * e * e * e * e }, Out: function(e) { return --e * e * e * e * e + 1 }, InOut: function(e) { return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) } }, Sinusoidal: { In: function(e) { return 1 - Math.cos(e * Math.PI / 2) }, Out: function(e) { return Math.sin(e * Math.PI / 2) }, InOut: function(e) { return .5 * (1 - Math.cos(Math.PI * e)) } }, Exponential: { In: function(e) { return 0 === e ? 0 : Math.pow(1024, e - 1) }, Out: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) }, InOut: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2) } }, Circular: { In: function(e) { return 1 - Math.sqrt(1 - e * e) }, Out: function(e) { return Math.sqrt(1 - --e * e) }, InOut: function(e) { return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) } }, Elastic: { In: function(e) { var t = void 0,
                        n = .1,
                        i = .4; return 0 === e ? 0 : 1 === e ? 1 : (!n || 1 > n ? (n = 1, t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i))) }, Out: function(e) { var t = void 0,
                        n = .1,
                        i = .4; return 0 === e ? 0 : 1 === e ? 1 : (!n || 1 > n ? (n = 1, t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / i) + 1) }, InOut: function(e) { var t = void 0,
                        n = .1,
                        i = .4; return 0 === e ? 0 : 1 === e ? 1 : (!n || 1 > n ? (n = 1, t = i / 4) : t = i * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * .5 + 1) } }, Back: { In: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) }, Out: function(e) { var t = 1.70158; return --e * e * ((t + 1) * e + t) + 1 }, InOut: function(e) { var t = 2.5949095; return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2) } }, Bounce: { "in": function(e) { return 1 - f.Bounce.out(1 - e) }, out: function(e) { return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 }, inOut: function(e) { return .5 > e ? .5 * f.Bounce.in(2 * e) : .5 * f.Bounce.out(2 * e - 1) + .5 } } },
        h = function() {
            function e(t) { var n = this,
                    i = arguments.length <= 1 || void 0 === arguments[1] ? "expOut" : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? .01 : arguments[2];
                (0, a.default)(this, e), this._value = t, this._startValue = t, this._targetValue = t, this._counter = 1, this.speed = r, this.easing = i, this._needUpdate = !0, this._efIndex = c.default.addEF(function() { return n._update() }) } return (0, u.default)(e, [{ key: "_update", value: function() { var e = this._counter + this.speed; return e > 1 && (e = 1), this._counter === e ? void(this._needUpdate = !1) : (this._counter = e, void(this._needUpdate = !0)) } }, { key: "limit", value: function(e, t) { return e > t ? void this.limit(t, e) : (this._min = e, this._max = t, void this._checkLimit()) } }, { key: "setTo", value: function(e) { this._value = e, this._targetValue = e, this._counter = 1 } }, { key: "_checkLimit", value: function() { void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max) } }, { key: "destroy", value: function() { c.default.removeEF(this._efIndex) } }, { key: "value", set: function(e) { this._startValue = this._value, this._targetValue = e, this._checkLimit(), this._counter = 0 }, get: function() { if (this._needUpdate) { var e = r(this.easing),
                            t = e(this._counter);
                        this._value = this._startValue + t * (this._targetValue - this._startValue), this._needUpdate = !1 } return this._value } }, { key: "targetValue", get: function() { return this._targetValue } }]), e }();
    t.default = h, e.exports = t.default }, 73, function(e, t, n) {
    "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1),
        o = i(r),
        a = n(2),
        s = i(a),
        u = n(155),
        l = i(u),
        c = n(36),
        f = i(c),
        h = { wandering: 0, travelling: 1 },
        d = { wandering: 0, muting: 1, leaving: 2, travelling: 3, dying: 4, finish: 5 },
        v = function() {
            function e(t) {
                (0, o.default)(this, e), this.app = t, this.state = h.wandering, this.linesDrawing = [], this.linesAvailableForDrawing = [], this.lines = [], this.tick = 0, this.targetPoints = [] }
            return (0, s.default)(e, [{ key: "reset", value: function() { this.state = h.wandering, this.isFinished = !1; for (var e = 0; e < this.lines.length; e++) this.lines[e].reset();
                    this.linesDrawing = [] } }, { key: "addLine", value: function() { var e = new l.default(this.app);
                    e.alpha = .3 + .5 * Math.random(), this.lines[this.lines.length] = e, this.linesAvailableForDrawing[this.linesAvailableForDrawing.length] = e } }, { key: "draw", value: function(e) { if (0 !== this.linesAvailableForDrawing.length) { var t = Math.floor(Math.random() * this.linesAvailableForDrawing.length),
                            n = this.linesAvailableForDrawing[t];
                        n.transformTo(e), this.splice(this.linesAvailableForDrawing, t), this.linesDrawing.push(n) } } }, { key: "moveTo", value: function(e, t, n, i) { var r = this,
                        o = null,
                        a = i ? 8 : 3;
                    this.isFinished = n; for (var s = [], u = 0; u < this.lines.length; u++) this.lines[u].state !== d.muting && s.push(u);
                    this.state = h.travelling; var l = void 0,
                        c = void 0;
                    this.isFinished || (c = Math.floor(Math.random() * s.length), l = s[c], this.splice(s, c)); var f = null,
                        v = null;
                    s.length >= 2 && (f = s[0], this.splice(s, 0), v = s[0], this.splice(s, 0)), this.objectsToTween = []; for (var p = function() { var n = r.lines[u];
                            r.targetPoints[u] || (r.targetPoints[u] = []), u === f || u === v ? (r.targetPoints[u][0] = e[0], r.targetPoints[u][1] = -2, r.targetPoints[u][2] = e[2]) : (r.targetPoints[u][0] = e[0] + 1 * Math.random() - .5, r.targetPoints[u][1] = -1 - 2 * Math.random(), r.targetPoints[u][2] = e[2] + 1 * Math.random() - .5); var s = a + 1 + 3 * Math.random(); if (n.firstTime = !1, r.isFinished || u !== l || (o = n, n.willDraw = t, n.posToDraw = e, i && (n.firstTime = !0)), n.state === d.muting) ! function() { var e = u,
                                    t = r.targetPoints[e];
                                n.undraw(function() { var i = r._moveLineTo({ line: n, pt: t, duration: 4, ease: r.easeInOutCirc.bind(r) });
                                    r.objectsToTween[e] = i, n.travel() }) }();
                            else { var c = r._moveLineTo({ line: n, pt: r.targetPoints[u], duration: n.willDraw ? a : s, ease: r.easeOutCirc.bind(r) });
                                r.objectsToTween[u] = c, u === f ? n.travel(1) : u === v ? n.travel(2) : n.travel() } }, u = 0; u < this.lines.length; u++) p(); return o } }, { key: "_moveLineTo", value: function(e) { var t = { 0: e.line.position[0], 1: e.line.position[1], 2: e.line.position[2] },
                        n = f.default.instance.returnVariable(t, e.duration, { 0: e.pt[0], 1: e.pt[1], 2: e.pt[2] }); return n } }, { key: "undraw", value: function(e) { for (var t = 0; t < this.linesDrawing.length; t++) { var n = this.linesDrawing[t];
                        n.undraw(), this.linesAvailableForDrawing.push(n), this.splice(this.linesDrawing, t), t-- } } }, {
                key: "moveTargetPoints",
                value: function(e) {
                    var t = this.lines[e],
                        n = this.objectsToTween[e];
                    if (!n.delete) {
                        for (var i = 0; i < n.props.length; i++) { var r = n.props[i];
                            n.obj[r.var] = n.ease(n.currentIteration, r.value, r.toValue - r.value, n.duration), t.position[r.var] += .08 * (n.obj[r.var] - t.position[r.var]) }
                        n.currentIteration += 1, n.currentIteration > n.duration && (n.delete = !0, t.willDraw ? t.transformTo(t.willDraw) : this.isFinished ? t.finish() : t.wander())
                    }
                }
            }, { key: "pause", value: function() { for (var e = 0; e < this.lines.length; e++) this.lines[e].pause() } }, { key: "update", value: function(e) { for (var t = 0; t < this.lines.length; t++) { this.lines[t].line.points[0];
                        this.state === h.travelling && this.lines[t].state === d.travelling && this.moveTargetPoints(t), this.lines[t].render() } } }, { key: "easeInCubic", value: function(e, t, n, i) { return e /= i, n * e * e * e + t } }, { key: "easeOutSine", value: function(e, t, n, i) { return n * Math.sin(e / i * (Math.PI / 2)) + t } }, { key: "easeOutCirc", value: function(e, t, n, i) { return n * Math.sqrt(1 - (e = e / i - 1) * e) + t } }, { key: "easeInOutCirc", value: function(e, t, n, i) { return e /= i / 2, 1 > e ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : (e -= 2, n / 2 * (Math.sqrt(1 - e * e) + 1) + t) } }, { key: "easeOutCubic", value: function(e, t, n, i) { return e /= i, e--, n * (e * e * e + 1) + t } }, { key: "splice", value: function(e, t) { var n = e.length; if (n) { for (; n > t;) e[t] = e[t + 1], t++;
                        e.length-- } } }]), e
        }();
    t.default = v, e.exports = t.default
}, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = mat4.create(),
        i = void 0,
        r = void 0,
        o = void 0,
        a = void 0,
        s = void 0,
        u = void 0,
        l = vec3.create(),
        c = vec3.create(),
        f = vec3.create(),
        h = vec3.create(),
        d = vec3.create(),
        v = void 0,
        p = function(e, t, p) { mat4.invert(n, e.viewMatrix), i = n[12], r = n[13], o = n[14], a = e.viewMatrix[2], s = e.viewMatrix[6], u = e.viewMatrix[10], vec3.set(l, i, r, o), vec3.set(c, -a, -s, -u), vec3.add(f, l, c), vec3.copy(h, l), vec3.copy(d, f), v = l[1] - t, h[1] -= 2 * v, v = f[1] - t, d[1] -= 2 * v, p.lookAt(h, d), mat4.copy(p.projection, e.projection) };
    t.default = p, e.exports = t.default }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = {};
    n.clearAllstops = function() { for (var e = 0; 9 > e; e++) { var t = "stop-" + e;
            document.body.classList.remove(t), document.body.classList.remove("stop-final"), document.body.classList.remove("complete") } }, n.setStop = function(e) { n.clearAllstops(), document.body.classList.add(e) }, t.default = n, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(36),
        _ = i(m),
        g = n(103),
        x = i(g),
        y = n(246),
        b = i(y),
        M = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, x.default, b.default)); return e.opacity = 0, e._finalPosition = vec3.create(), e.tick = Math.random() * Math.PI * 2, e.delay = 0, e.easings = new _.default, e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.isVisible = !1; var e = .2;
                    this.mesh = p.default.Geom.plane(e, e, 1), this.scale = 1 } }, { key: "reset", value: function() { this.opacity = 0, this.shouldAppear = !1, this.isSlowMode = !1, this.isVisible = !1 } }, { key: "prepare", value: function() { var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                    this.shouldAppear = e } }, { key: "slowMode", value: function() { this.isSlowMode = !0 } }, { key: "normalMode", value: function() { this.isSlowMode = !1 } }, { key: "show", value: function() { var e = this;
                    this.shouldAppear && (this.isVisible = !1, this.easings.killTweensOf(this), this.scale = 1, this.easings.to(this, 4, { scale: 2, ease: this.easings.easeOutCirc, onComplete: function() { e.easings.to(e, 3, { scale: 1, ease: e.easings.easeOutBack, onComplete: function() {} }) } }), this.easings.to(this, 4, { opacity: 1, ease: this.easings.easeOutSine, onComplete: function() { e.tick = 0, e.isVisible = !0, e.isSlowMode = !1 } })) } }, { key: "hide", value: function(e) { this.normalMode(), this.isVisible = !1, this.easings.killTweensOf(this), this.easings.to(this, e ? .2 : 1, { opacity: 0, ease: this.easings.easeOutCirc, onComplete: function() {} }) } }, { key: "render", value: function(e, t) { this.easings.update(), this.tick += .025, this.isVisible && (this.opacity = .1 * Math.cos(this.tick) + .9), this.shader.bind(), this.shader.uniform("uOpacity", "float", this.opacity), this.shader.uniform("uScale", "float", this.scale), this.shader.uniform("uPosition", "vec3", this._finalPosition), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = M, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(8),
        _ = i(m),
        g = n(73),
        x = i(g),
        y = n(35),
        b = i(y),
        M = n(34),
        w = (i(M), n(37)),
        E = i(w),
        S = n(13),
        T = i(S),
        P = n(12),
        A = i(P),
        C = n(36),
        I = i(C),
        D = n(68),
        F = i(D),
        k = { wandering: 0, muting: 1, leaving: 2, travelling: 3, dying: 4, finishing: 5 },
        L = [],
        R = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = (0, f.default)(this, (0, o.default)(t).call(this, T.default, A.default)); return n.app = e, n._tick = 0, n.mainSpeed = .6, n.easings = new I.default, n } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.perlin = new x.default.Noise(Math.random()), this.position = [0, 0, 0], this.spline = new E.default([]), this.points = [], this.sub = 3, this.thickness = .4 * Math.random() + .1, this.defaultThickness = this.thickness, this.isMobile = v.GL.isMobile; for (var e = this.isMobile ? 12 : 20, t = 0, n = 0; e > n; n++) this.points[t++] = [0, 0, 0];
                    this.line = new b.default(this.getPoints(this.points)), this.line.points = this.points, this.tick = Math.random() * Math.PI * 2 * 100, this.speed = .5 + Math.random(), this.targetPoint = [0, 0, 0], this.motionOptions = { perlin: this.perlin, time: 255 * Math.random(), startAngle: Math.random() * Math.PI * 2, radius: Math.floor(3 * Math.random()) + 2, targetPoint: this.targetPoint, position: this.position, xoff: 100 * Math.random(), yoff: 100 * Math.random() }, this.motions = { 0: [F.default.circle.bind(F.default), F.default.snake.bind(F.default)], 2: [F.default.disappear1.bind(F.default)], 3: [F.default.travel1.bind(F.default), F.default.travel2.bind(F.default), F.default.travel3.bind(F.default), F.default.travelPair1.bind(F.default), F.default.travelPair2.bind(F.default)], 5: [F.default.end1.bind(F.default)] }, this.texture = new p.default.GLTexture(getAsset("stroke")), this.reset() } }, { key: "reset", value: function() { this.alpha = 1, this.isPaused = !1, this.tickLeaving = 0, this.tickRender = 0, this.delayBeforeNewMotion = 120 * Math.random() + 120, this.willDraw = !1, this.mainSpeed = .6, this.motion = null, this.wander() } }, { key: "travel", value: function(e) { if (this.state === k.muting) { for (var t = 0; t < this.line.points.length; t++) this.points[this.points.length - 1 - t] = this.line.vert[t * this.sub];
                        this._cutExtraPoints(this.isMobile ? 12 : 20) } if (this.state = k.travelling, e) 1 === e ? this.motion = F.default.travelPair1.bind(F.default) : this.motion = F.default.travelPair2.bind(F.default);
                    else { var n = Math.floor(Math.random() * this.motions[this.state].length);
                        this.motion = this.motions[this.state][n] } } }, { key: "finish", value: function() { this._cutExtraPoints(this.isMobile ? 12 : 20), this.state = k.finishing, this.mainSpeed = .6, this.tick = Math.random() * Math.PI * 2 * 100, this.motionOptions.startAngle = Math.random() * Math.PI * 2, this.motionOptions.radius = vrPresenting ? 30 : 10, this.speed = .5 + 2 * Math.random(), Math.random() > .5 && (this.speed *= -1), this.motion = this.motions[this.state][Math.floor(Math.random() * this.motions[this.state].length)] } }, { key: "wander", value: function() { this.state = k.wandering, this.delayBeforeNewMotion = 120 * Math.random() + 120, this.mainSpeed = .6, this.tick = Math.random() * Math.PI * 2 * 100, this.motionOptions.startAngle = Math.random() * Math.PI * 2, this.motionOptions.radius = Math.floor(3 * Math.random()) + 2, this.motionOptions.xoff = 100 * Math.random(), this.motionOptions.yoff = 100 * Math.random(), this.speed = .5 + Math.random(), Math.random() > .5 && (this.speed *= -1), this.motion = this.motions[this.state][Math.floor(Math.random() * this.motions[this.state].length)] } }, { key: "newPoints", value: function(e, t) { if (this.state === k.muting) { if (t) { this.objectsToTween = []; for (var n = 0, i = 0; i < e.vert.length; i++) { var r = e.vert.length - 1 - i,
                                    o = this.path.length - 1 - i,
                                    a = { startIndex: r, endIndex: o, currentIndex: r },
                                    s = this.easings.returnVariable(a, this.firstTime ? 4 : 1.1, { currentIndex: o });
                                s.point = r, this.objectsToTween[n++] = s } } } else { if (this.state === k.wandering || this.state === k.travelling || this.state === k.finishing) { var u = e.points[0];
                            u[0] += .4 * (this.targetPoint[0] - u[0]) * this.mainSpeed * (vrPresenting ? .25 : 1), u[2] += .4 * (this.targetPoint[2] - u[2]) * this.mainSpeed * (vrPresenting ? .25 : 1), u[1] += .2 * (this.targetPoint[1] - u[1]) * this.mainSpeed * (vrPresenting ? .25 : 1); var l = void 0;
                            l = this.state === k.wandering ? .3 : this.state === k.finishing ? .3 : .6; for (var i = 1; i < e.points.length; i++) e.points[i][0] += (e.points[i - 1][0] - e.points[i][0]) * l * this.mainSpeed * (vrPresenting ? .5 : 1), e.points[i][1] += (e.points[i - 1][1] - e.points[i][1]) * l * this.mainSpeed * (vrPresenting ? .5 : 1), e.points[i][2] += (e.points[i - 1][2] - e.points[i][2]) * l * this.mainSpeed * (vrPresenting ? .5 : 1); var c = this.getPoints(e.points); return c } if (this.state === k.leaving && t) { this.objectsToTween = []; var f = 0,
                                h = this.path.length - 1 - e.vert.length - 1;
                            this.path.length - 1 - e.vert.length - 1 < e.vert.length && (h = e.vert.length - 1); for (var d = this.path.length - 1 - h, i = 0; i < e.vert.length; i++) { var r = i,
                                    o = h + Math.floor(i / e.vert.length * d);
                                0 === i || i === e.vert.length - 1; var a = { startIndex: r, endIndex: o, currentIndex: r },
                                    s = this.easings.returnVariable(a, 2, { currentIndex: o });
                                s.point = r, this.objectsToTween[f++] = s } } } return !1 } }, { key: "getPoints", value: function(e) { this.spline.points = e; var t = void 0,
                        n = this.sub;
                    L = []; for (var i = 0; i < e.length * n; i++) t = i / (e.length * n), this.spline.getPoint(t, L); return L } }, { key: "stop", value: function() { this.state = k.dying } }, { key: "update", value: function() { this.state === k.wandering ? (this.delayBeforeNewMotion--, this.delayBeforeNewMotion < 0 && (this.delayBeforeNewMotion = 120 * Math.random() + 120, this.motion = this.motions[this.state][Math.floor(Math.random() * this.motions[this.state].length)]), this.motionOptions.time += 1 * this.speed * this.mainSpeed, this.motion(this.motionOptions), this.targetPoint[1] > -1 && (this.targetPoint[1] = -1)) : this.state === k.muting ? (this.targetPoint[0] = this.animal.shape.vertices[0][0], this.targetPoint[1] = this.animal.shape.vertices[0][1], this.targetPoint[2] = this.animal.shape.vertices[0][2]) : this.state === k.travelling ? (this.motionOptions.time += 1 * this.speed * this.mainSpeed, this.motion(this.motionOptions)) : this.state === k.finishing && (this.motionOptions.time += 1 * this.speed * this.mainSpeed, this.motion(this.motionOptions)) } }, { key: "undraw", value: function(e) { if (this.callback = e, this.willDraw = !1, Math.random() > .4) { for (var t = 0; t < this.line.points.length; t++) this.points[this.points.length - 1 - t] = this.line.vert[t * this.sub]; return this.callback ? this.callback() : this.wander(), this.app._vEyeLeft.hide(!0), this.app._vEyeRight.hide(!0), void this.easings.to(this, .3, { thickness: this.defaultThickness, ease: this.easings.easeOutCubic }) }
                    this.app._vEyeLeft.hide(), this.app._vEyeRight.hide(), this.state = k.leaving, this.motion = this.motions[this.state][Math.floor(Math.random() * this.motions[this.state].length)]; var n = this.line.vert[this.line.vert.length - 1],
                        i = this.line.vert[this.line.vert.length - 2];
                    this.path = []; for (var r = this.animal.finalP, t = 0; t < r.length; t++) this.path[this.path.length] = r[t]; var o = (Math.random(), [n]),
                        a = [];
                    _.default.vec3.subtract(a, i, n); var s = [];
                    _.default.vec3.normalize(s, a); var u = [n[0] + .1 * s[0], n[1] + .1 * s[1], n[2] + .1 * s[2]];
                    o[o.length] = u; var l = [u[0] + 6 * Math.random() - 3, u[1] - 2 * Math.random(), u[2] + 6 * Math.random() - 3],
                        c = _.default.vec3.distance(u, l),
                        f = [0, -1, 0],
                        h = [];
                    _.default.vec3.cross(h, s, f); for (var d = 5, t = 0; d >= t; t++) { var v = 0;
                        v = 0 === t ? c / d * t + Math.random() * (c / d) / 2 : t === d ? c / d * t - Math.random() * (c / d) / 2 : c / d * t + Math.random() * c / d - c / d / 2; var p = .2,
                            m = [u[0] + s[0] * v, u[1] + s[1] * v, u[2] + s[2] * v],
                            g = [m[0] + h[0] * p, m[1] + h[1] * p, m[2] + h[2] * p],
                            x = [];
                        _.default.vec3.rotateZ(x, g, m, Math.random() * Math.PI * 2), o[o.length] = x }
                    o[o.length] = l; var y = this.getPoints(o);
                    o = []; for (var t = 0; t < y.length; t++) this.path[this.path.length] = y[t];
                    y = !1, this.newPoints(this.line, !0), this.posToDraw = null } }, { key: "transformTo", value: function(e) { this.easings.to(this, 4, { alpha: 1, ease: this.easings.easeOutCubic }), this.easings.to(this, .5, { thickness: v.GL.isMobile ? .8 : .6, ease: this.easings.easeOutCubic }), this.willDraw = null, this.arrayCorrespondance = [], this.currentPointToFollowIndex = 0, this.mainSpeed = .3, this.state = k.muting; var t = 0;
                    this.animal = e; var n = this.animal.finalP,
                        i = this.animal.shape.eyes;
                    i[0] ? (this.app._vEyeLeft._finalPosition[0] = i[0][0], this.app._vEyeLeft._finalPosition[1] = -i[0][1], this.app._vEyeLeft._finalPosition[2] = -i[0][2], this.app._vEyeLeft.prepare(!0)) : (this.app._vEyeLeft.hide(), this.app._vEyeLeft.prepare(!1)), i[1] ? (this.app._vEyeRight._finalPosition[0] = i[1][0], this.app._vEyeRight._finalPosition[1] = -i[1][1], this.app._vEyeRight._finalPosition[2] = -i[1][2], this.app._vEyeRight.prepare(!0)) : (this.app._vEyeRight.hide(), this.app._vEyeRight.prepare(!1)); var r = n.length / this.sub; if (this.line.points.length < r) { var o = r - this.line.points.length,
                            a = this.line.points[this.line.points.length - 1],
                            s = this.line.points[this.line.points.length - 2],
                            u = [];
                        _.default.vec3.subtract(u, s, a); var l = [];
                        _.default.vec3.normalize(l, u); for (var c = _.default.vec3.distance(a, s), f = 0; o > f; f++) { var h = [],
                                d = [l[0] * c / o * f, l[1] * c / o * f, l[2] * c / o * f];
                            _.default.vec3.add(h, a, d), this.line.points.push(h), this.needsUpdate = !0 } } else this.line.points.length > r ? (this.line.points.slice(0, r - 1), this.needsUpdate = !0) : this.needsUpdate = !1;
                    this.path = [], this.line.vert = this.getPoints(this.line.points); for (var p = this.line.vert.slice(), m = this.line.points[0], g = n[0], x = n[1], y = _.default.vec3.distance(m, g), b = [(m[0] + g[0]) / 2, (m[1] + g[1]) / 2, (m[2] + g[2]) / 2], M = [m], f = 0; 2 > f; f++) { var w = this.getRandomPos(Math.random() * y / 5, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
                        w[0] += b[0], w[1] += b[1], w[2] += b[2], M[M.length] = w } var E = [];
                    _.default.vec3.subtract(E, g, x); var S = [];
                    _.default.vec3.normalize(S, E); var T = [g[0] + S[0] * y / 5, g[1] + S[1] * y / 5, g[2] + S[2] * y / 5];
                    M[M.length] = T, M[M.length] = g; var P = this.getPoints(M),
                        A = n;
                    t = 0; for (var f = p.length - 1; f > -1; f--) this.path[t++] = p[f]; for (var f = 0; f < P.length; f++) this.path[t++] = P[f]; for (var f = 0; f < A.length; f++) this.path[t++] = A[f];
                    this.newPoints(this.line, !0) } }, { key: "getRandomPos", value: function(e, t, n) { var i = e * Math.cos(t) * Math.sin(n),
                        r = e * Math.sin(t) * Math.sin(n),
                        o = e * Math.cos(n); return [i, r, o] } }, { key: "pause", value: function() { this.isPaused = !this.isPaused } }, { key: "render", value: function() { this._tick += .1 * (vrPresenting ? .25 : 1); var e = this.tickRender++ % 2 == 0; if (e && (this.easings.tweens.length && this.easings.update(), this.update()), this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this.texture.bind(0), this.shader.uniform("thickness", "float", this.thickness), this.shader.uniform("uTime", "float", this._tick), this.shader.uniform("alpha", "float", this.alpha), this.shader.uniform("aspect", "float", window.innerWidth / window.innerHeight), this.shader.uniform("resolutions", "vec2", [window.innerWidth, window.innerHeight]), this.state === k.wandering || this.state === k.travelling || this.state === k.finishing) { var t = this.newPoints(this.line);
                        t && !this.isPaused && this.line.render(t, this.needsUpdate) } else if ((this.state === k.muting || this.state === k.leaving) && e) { for (var n = 0; n < this.objectsToTween.length; n++) { var i = this.objectsToTween[n]; if (i.delete) this.splice(this.objectsToTween, n), n--;
                            else { for (var r = 0; r < i.props.length; r++) { var o = i.props[r];
                                    this.state === k.muting ? i.obj[o.var] = this.easeOutCirc(i.currentIteration, o.value, o.toValue - o.value, i.duration) : i.obj[o.var] = this.easeInSine(i.currentIteration, o.value, o.toValue - o.value, i.duration); var a = Math.floor(i.obj[o.var]);
                                    this.line.vert[i.point][0] = this.path[a][0], this.line.vert[i.point][1] = this.path[a][1], this.line.vert[i.point][2] = this.path[a][2] }
                                i.currentIteration += vrPresenting ? .25 : 1, i.currentIteration > i.duration && (i.delete = !0) } } if (this.objectsToTween.length) this.line.render(this.line.vert, this.needsUpdate);
                        else if (this.state === k.leaving) { for (var n = 0; n < this.line.points.length; n++) this.points[this.points.length - 1 - n] = this.line.vert[n * this.sub];
                            this.easings.to(this, .4, { thickness: this.defaultThickness, ease: this.easings.easeOutCubic }), this._cutExtraPoints(this.isMobile ? 12 : 20), this.line.render(this.line.points, this.needsUpdate), this.callback ? (this.callback(), this.callback = null) : this.wander() } }
                    v.GL.draw(this.line), this.needsUpdate && (this.needsUpdate = !1) } }, { key: "_cutExtraPoints", value: function(e) { if (this.points.length > e) { for (var t = (this.points.length - e, Math.ceil(this.points.length / e)), n = [], i = 0, r = 0; r < this.points.length; r += t) n[i++] = this.points[r];
                        this.points = n, this.line.points = this.points, this.needsUpdate = !0 } } }, { key: "splice", value: function(e, t) { var n = e.length; if (n) { for (; n > t;) e[t] = e[t + 1], t++;
                        e.length-- } } }, { key: "easeInCubic", value: function(e, t, n, i) { return e /= i, n * e * e * e + t } }, { key: "easeOutSine", value: function(e, t, n, i) { return n * Math.sin(e / i * (Math.PI / 2)) + t } }, { key: "easeOutCirc", value: function(e, t, n, i) { return n * Math.sqrt(1 - (e = e / i - 1) * e) + t } }, { key: "easeLinear", value: function(e, t, n, i) { return e /= i, n * e + t } }, { key: "easeInCirc", value: function(e, t, n, i) { return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t } }, { key: "easeOutCubic", value: function(e, t, n, i) { return e /= i, e--, n * (e * e * e + 1) + t } }, { key: "easeInSine", value: function(e, t, n, i) { return -n * Math.cos(e / i * (Math.PI / 2)) + n + t } }]), t }(p.default.View);
    t.default = R, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(8),
        _ = (i(m), n(73)),
        g = (i(_), n(35)),
        x = i(g),
        y = n(34),
        b = (i(y), n(37)),
        M = i(b),
        w = n(249),
        E = i(w),
        S = n(248),
        T = i(S),
        P = n(36),
        A = i(P),
        C = n(68),
        I = (i(C), []),
        D = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = (0, f.default)(this, (0, o.default)(t).call(this, E.default, T.default)); return n.alpha = 0, n.ratio = 0, n.hide = !1, n.deltaTime = 0, n.app = e, n._tick = 0, n.tickLeaving = 0, n.tickRender = 0, n.mainSpeed = .6, n.easings = new A.default, n } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.isReady = !1, this.position = [0, 0, 0], this.spline = new M.default([]), this.tick = Math.random() * Math.PI * 2 * 100 } }, { key: "reset", value: function() { this.easings.killTweensOf(this), this.animated = 1, this.deltaTime = 0, this.stopRendering = !1 } }, { key: "resetOptions", value: function(e) { this.animated = 1, this.deltaTime = 0, this.isReady = !0, this.data = e, this.line = new x.default(this.getPoints(e.points), function(t) { return t * e.division }), this.texture = new p.default.GLTexture(getAsset("stroke")) } }, { key: "fadeOut", value: function() { var e = this;
                    this.easings.to(this, 2, { alpha: 0, ease: this.easings.easeInSine, onComplete: function() { e.stopRendering = !0 } }) } }, { key: "finishDraw", value: function() { this.animated = 0 } }, { key: "getPoints", value: function(e) { this.spline.points = e; var t = void 0,
                        n = 6;
                    I = []; for (var i = 0; i < e.length * n; i++) t = i / (e.length * n), this.spline.getPoint(t, I); return I } }, { key: "pause", value: function() { this.isPaused = !0 } }, { key: "render", value: function() { this.isReady && !this.stopRendering && (this._tick += this.data.deltaTime * (window.hasVR ? .66 : 1) * (this.hide ? -1 : 1), this.easings.tweens.length && this.easings.update(), this.shader.bind(), this.shader.uniform("uTime", "float", this._tick), this.shader.uniform("ratio", "float", this.ratio), this.shader.uniform("alpha", "float", this.alpha), this.shader.uniform("thickness", "float", this.data.thickness), this.shader.uniform("aspect", "float", window.innerWidth / window.innerHeight), this.shader.uniform("resolutions", "vec2", [window.innerWidth, window.innerHeight]), v.GL.draw(this.line)) } }]), t }(p.default.View);
    t.default = D, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, null, p.default.ShaderLibs.copyFrag)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = [],
                        t = [],
                        n = [0, 1, 2, 0, 2, 3],
                        i = 25,
                        r = 50;
                    e.push([-i, r, -i]), e.push([i, r, -i]), e.push([i, r, i]), e.push([-i, r, i]), t.push([0, 0]), t.push([1, 0]), t.push([1, 1]), t.push([0, 1]), this.mesh = new p.default.Mesh, this.mesh.bufferVertex(e), this.mesh.bufferTexCoord(t), this.mesh.bufferIndex(n), this._texture = new p.default.GLTexture(getAsset("nothing")) } }, { key: "render", value: function() { this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this._texture.bind(0), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = m, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(35),
        _ = i(m),
        g = n(70),
        x = i(g),
        y = n(251),
        b = i(y),
        M = n(250),
        w = i(M),
        E = function(e) {
            function t(e) {
                (0, s.default)(this, t); var n = (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default)); return n.app = e, n.alpha = 1, n.isPaused = !1, n.app = e, n._tick = 0, n } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.owl = new x.default, this.lines = []; for (var e = 0; e < this.owl.finalLines.length; e++) { var t = new _.default(this.owl.finalLines[e]);
                        this.lines.push(t) }
                    this.reset() } }, { key: "reset", value: function() { this.ratio = 0, this.alpha = 0 } }, { key: "drawEyes", value: function() { var e = this.owl.eyes;
                    this.app._vEyeLeft.slowMode(), this.app._vEyeRight.slowMode(), this.app._vEyeLeft._finalPosition[0] = e[0][0], this.app._vEyeLeft._finalPosition[1] = -e[0][1], this.app._vEyeLeft._finalPosition[2] = -e[0][2], this.app._vEyeLeft.prepare(!0), this.app._vEyeLeft.show(), this.app._vEyeRight._finalPosition[0] = e[1][0], this.app._vEyeRight._finalPosition[1] = -e[1][1], this.app._vEyeRight._finalPosition[2] = -e[1][2], this.app._vEyeRight.prepare(!0), this.app._vEyeRight.show() } }, { key: "render", value: function() { this._tick += .1 * (window.hasVR ? .66 : 1), this.shader.bind(), this.shader.uniform("ratio", "float", this.ratio), this.shader.uniform("thickness", "float", .2), this.shader.uniform("alpha", "float", this.alpha), this.shader.uniform("aspect", "float", window.innerWidth / window.innerHeight), this.shader.uniform("resolutions", "vec2", [window.innerWidth, window.innerHeight]); for (var e = 0; e < this.lines.length; e++) v.GL.draw(this.lines[e]) } }]), t }(p.default.View);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(253),
        _ = i(m),
        g = n(252),
        x = i(g),
        y = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, _.default, x.default)); return e.opacity = new p.default.TweenNumber(0, "expIn", .005), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = 1;
                    this.mesh = p.default.Geom.plane(e, e, 1), this._texture = new p.default.GLTexture(getAsset("presshold"), !1, { wrapS: v.GL.gl.CLAMP_TO_EDGE, wrapT: v.GL.gl.CLAMP_TO_EDGE }) } }, { key: "open", value: function() { this.opacity.value = 1 } }, { key: "close", value: function() { this.opacity.value = 0, this.opacity.easing = "expInOut" } }, { key: "render", value: function() { this.opacity.value < .01 || (v.GL.disable(v.GL.DEPTH_TEST), this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this.shader.uniform("uOpacity", "float", this.opacity.value), this.shader.uniform("uRatio", "float", v.GL.aspectRatio), this._texture.bind(0), v.GL.draw(this.mesh), v.GL.enable(v.GL.DEPTH_TEST)) } }]), t }(p.default.View);
    t.default = y, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(11),
        _ = i(m),
        g = n(255),
        x = n(254),
        y = p.default.GL,
        b = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, g, x)); return e.time = 4095 * Math.random(), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { for (var e = [], t = [], n = 0, i = _.default.numParticles, r = void 0, o = void 0, a = 0; i > a; a++)
                        for (var s = 0; i > s; s++) r = s / i, o = a / i, e.push([r, o, 0]), t.push(n), n++;
                    this.mesh = new p.default.Mesh(y.POINTS), this.mesh.bufferVertex(e), this.mesh.bufferIndex(t), this.shader.bind(), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("uFogDensity", "float", _.default.fogDensity), this.shader.uniform("uFogColor", "vec3", _.default.fogColor) } }, { key: "render", value: function(e, t, n, i) { this.time += .1, this.shader.bind(), e.bind(0), t.bind(1), i.bind(2), this.shader.uniform("uViewport", "vec2", [y.width, y.height]), this.shader.uniform("percent", "float", n), this.shader.uniform("time", "float", this.time), y.draw(this.mesh) } }]), t }(p.default.View);
    t.default = b, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(11),
        _ = i(m),
        g = n(257),
        x = n(256),
        y = p.default.GL,
        b = function(e, t) { return e + Math.random() * (t - e) },
        M = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, g, x)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { for (var e = [], t = [], n = [], i = [], r = 0, o = _.default.numParticles, a = void 0, s = void 0, u = _.default.maxRadius, l = 0; o > l; l++)
                        for (var c = 0; o > c; c++) e.push([b(-u, u), b(2, 4), b(-u, u)]), a = c / o * 2 - 1 + .5 / o, s = l / o * 2 - 1 + .5 / o, i.push([Math.random(), Math.random(), Math.random()]), t.push([a, s]), n.push(r), r++;
                    this.mesh = new p.default.Mesh(y.POINTS), this.mesh.bufferVertex(e), this.mesh.bufferData(i, "aExtra", 3), this.mesh.bufferTexCoord(t), this.mesh.bufferIndex(n) } }, { key: "render", value: function() { arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                    this.shader.bind(), y.draw(this.mesh) } }]), t }(p.default.View);
    t.default = M, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(11),
        _ = i(m),
        g = n(258),
        x = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, p.default.ShaderLibs.bigTriangleVert, g)); return e.time = 255 * Math.random(), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.mesh = p.default.Geom.bigTriangle(), this.shader.bind(), this.shader.uniform("textureVel", "uniform1i", 0), this.shader.uniform("texturePos", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("maxRadius", "float", _.default.maxRadius) } }, { key: "render", value: function(e, t, n, i, r) { this.time += .01, this.shader.bind(), this.shader.uniform("time", "float", this.time), e.bind(0), t.bind(1), n.bind(2); for (var o = 0; o < i.length; o++) { var a = i[o].buttons[1].pressed ? 1 : 0,
                            s = [0, 0, 0];
                        vec3.sub(s, i[o].position, r), this.shader.uniform("gamepad" + o, "vec3", s), this.shader.uniform("gamepad" + o + "Force", "float", a) }
                    v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = x, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(103),
        _ = i(m),
        g = n(263),
        x = i(g),
        y = function(e) {
            function t() {
                (0, s.default)(this, t); var e = (0, f.default)(this, (0, o.default)(t).call(this, _.default, x.default)); return e.opacity = new p.default.TweenNumber(0, "expIn", .005), p.default.Scheduler.delay(function() { e.opacity.value = 1 }, null, 1500), e } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = 1280 / 720,
                        t = 1;
                    this.mesh = p.default.Geom.plane(t * e, t, 1), this._texture = new p.default.GLTexture(getAsset("title")), this.position = [0, -.5, 0], this.finalPosition = vec3.create() } }, { key: "close", value: function() { this.opacity.value = 0, this.opacity.easing = "expInOut" } }, { key: "setPosition", value: function(e) { vec3.add(this.finalPosition, e, this.position) } }, { key: "render", value: function() { this.opacity.value < .01 || (v.GL.disable(v.GL.DEPTH_TEST), this.shader.bind(), this.shader.uniform("uPosition", "vec3", this.finalPosition), this.shader.uniform("texture", "uniform1i", 0), this.shader.uniform("uOpacity", "float", this.opacity.value), v.GL.isMobile ? this.shader.uniform("uScale", "float", 2) : this.shader.uniform("uScale", "float", vrPresenting ? 1 : 4), this._texture.bind(0), v.GL.draw(this.mesh), v.GL.enable(v.GL.DEPTH_TEST)) } }]), t }(p.default.View);
    t.default = y, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = n(11),
        _ = i(m),
        g = n(268),
        x = i(g),
        y = n(267),
        b = i(y),
        M = n(269),
        w = i(M),
        E = n(42),
        S = i(E),
        T = .5,
        P = { roughness: 1, specular: .25, metallic: 0, baseColor: [T, T, T] },
        A = function(e) {
            function t() {
                (0, s.default)(this, t); var e = !v.GL.getExtension("EXT_shader_texture_lod") || v.GL.isMobile,
                    n = S.default.addUniforms(e ? w.default : b.default, P),
                    i = (0, f.default)(this, (0, o.default)(t).call(this, x.default, n)); return i.useFallback = e, i.setupUniforms(), i } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { var e = getAsset("objTrunk");
                    this.mesh = p.default.ObjLoader.parse(e), this.position = [0, .5, 0]; var t = .35;
                    this.scale = [t, t, t], this._textureAO = new p.default.GLTexture(getAsset("ao")) } }, { key: "setupUniforms", value: function() { this.shader.bind(), this.shader.uniform("textureAO", "uniform1i", 1), this.useFallback ? this.shader.uniform("textureEnv", "uniform1i", 3) : (this.shader.uniform("uRadianceMap", "uniform1i", 3), this.shader.uniform("uIrradianceMap", "uniform1i", 4)), this.shader.uniform("uExposure", "float", _.default.exposure), this.shader.uniform("uGamma", "float", _.default.gamma), this.shader.uniform("uFogDensity", "float", _.default.fogDensity), this.shader.uniform("uFogColor", "vec3", _.default.fogColor), this.shader.uniform("uPosition", "vec3", this.position), this.shader.uniform("uScale", "vec3", this.scale), S.default.bindUniforms(this.shader, P) } }, { key: "render", value: function(e, t, n) { this.shader.bind(), this._textureAO.bind(1), this.useFallback ? n.bind(3) : (e.bind(3), t.bind(4)), this.shader.uniform("uClipY", "float", _.default.clipY), this.shader.uniform("uDir", "float", _.default.clipDir), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = A, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(4),
        d = i(h),
        v = n(6),
        p = i(v),
        m = function(e) {
            function t() { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, p.default.ShaderLibs.bigTriangleVert, p.default.ShaderLibs.copyFrag)) } return (0, d.default)(t, e), (0, l.default)(t, [{ key: "_init", value: function() { this.mesh = p.default.Geom.bigTriangle(), this._texture = new p.default.GLTexture(getAsset("vignette")) } }, { key: "render", value: function() { this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this._texture.bind(0), v.GL.draw(this.mesh) } }]), t }(p.default.View);
    t.default = m, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(119),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(120),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) {
    "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(121),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) }
            return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t
        }(_.default);
    t.default = E, e.exports = t.default
}, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(34),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(122),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(123),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(124),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(3),
        o = i(r),
        a = n(1),
        s = i(a),
        u = n(2),
        l = i(u),
        c = n(5),
        f = i(c),
        h = n(7),
        d = i(h),
        v = n(4),
        p = i(v),
        m = n(18),
        _ = i(m),
        g = n(125),
        x = i(g),
        y = n(13),
        b = i(y),
        M = n(12),
        w = i(M),
        E = function(e) {
            function t(e) { return (0, s.default)(this, t), (0, f.default)(this, (0, o.default)(t).call(this, b.default, w.default, e)) } return (0, p.default)(t, e), (0, l.default)(t, [{ key: "reset", value: function(e, n, i) { this.shape = new x.default(e), (0, d.default)((0, o.default)(t.prototype), "reset", this).call(this, e, n, i) } }]), t }(_.default);
    t.default = E, e.exports = t.default }, function(e, t, n) { e.exports = { "default": n(180), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(182), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(183), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(184), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(185), __esModule: !0 } }, function(e, t, n) { e.exports = { "default": n(187), __esModule: !0 } }, function(e, t, n) { var i = n(9),
        r = i.JSON || (i.JSON = { stringify: JSON.stringify });
    e.exports = function(e) { return r.stringify.apply(r, arguments) } }, function(e, t, n) { n(207); var i = n(9).Object;
    e.exports = function(e, t) { return i.create(e, t) } }, function(e, t, n) { n(208); var i = n(9).Object;
    e.exports = function(e, t) { return i.defineProperties(e, t) } }, function(e, t, n) { n(209); var i = n(9).Object;
    e.exports = function(e, t, n) { return i.defineProperty(e, t, n) } }, function(e, t, n) { n(210), e.exports = n(9).Object.freeze }, function(e, t, n) { n(211); var i = n(9).Object;
    e.exports = function(e, t) { return i.getOwnPropertyDescriptor(e, t) } }, function(e, t, n) { n(212), e.exports = n(9).Object.getPrototypeOf }, function(e, t, n) { n(213), e.exports = n(9).Object.keys }, function(e, t, n) { n(214), e.exports = n(9).Object.setPrototypeOf }, function(e, t, n) { n(217), n(215), n(218), n(219), e.exports = n(9).Symbol }, function(e, t, n) { n(216), n(220), e.exports = n(62).f("iterator") }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t) { e.exports = function() {} }, function(e, t, n) { var i = n(21),
        r = n(205),
        o = n(204);
    e.exports = function(e) { return function(t, n, a) { var s, u = i(t),
                l = r(u.length),
                c = o(a, l); if (e && n != n) { for (; l > c;)
                    if (s = u[c++], s != s) return !0 } else
                for (; l > c; c++)
                    if ((e || c in u) && u[c] === n) return e || c || 0; return !e && -1 } } }, function(e, t, n) { var i = n(33),
        r = n(92),
        o = n(54);
    e.exports = function(e) { var t = i(e),
            n = r.f; if (n)
            for (var a, s = n(e), u = o.f, l = 0; s.length > l;) u.call(e, a = s[l++]) && t.push(a); return t } }, function(e, t, n) { e.exports = n(20).document && document.documentElement }, function(e, t, n) { var i = n(84);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == i(e) ? e.split("") : Object(e) } }, function(e, t, n) { var i = n(84);
    e.exports = Array.isArray || function(e) { return "Array" == i(e) } }, function(e, t, n) { "use strict"; var i = n(52),
        r = n(39),
        o = n(55),
        a = {};
    n(26)(a, n(28)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = i(a, { next: r(1, n) }), o(e, t + " Iterator") } }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) { var i = n(33),
        r = n(21);
    e.exports = function(e, t) { for (var n, o = r(e), a = i(o), s = a.length, u = 0; s > u;)
            if (o[n = a[u++]] === t) return n } }, function(e, t, n) { var i = n(21),
        r = n(91).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) { try { return r(e) } catch (t) { return a.slice() } };
    e.exports.f = function(e) { return a && "[object Window]" == o.call(e) ? s(e) : r(i(e)) } }, function(e, t, n) { var i = n(27),
        r = n(31),
        o = function(e, t) { if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
    e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) { try { i = n(85)(Function.call, n(53).f(Object.prototype, "__proto__").set, 2), i(e, []), t = !(e instanceof Array) } catch (r) { t = !0 } return function(e, n) { return o(e, n), t ? e.__proto__ = n : i(e, n), e } }({}, !1) : void 0), check: o } }, function(e, t, n) { var i = n(58),
        r = n(48);
    e.exports = function(e) { return function(t, n) { var o, a, s = String(r(t)),
                u = i(n),
                l = s.length; return 0 > u || u >= l ? e ? "" : void 0 : (o = s.charCodeAt(u), 55296 > o || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536) } } }, function(e, t, n) { var i = n(58),
        r = Math.max,
        o = Math.min;
    e.exports = function(e, t) { return e = i(e), 0 > e ? r(e + t, 0) : o(e, t) } }, function(e, t, n) { var i = n(58),
        r = Math.min;
    e.exports = function(e) { return e > 0 ? r(i(e), 9007199254740991) : 0 } }, function(e, t, n) { "use strict"; var i = n(192),
        r = n(199),
        o = n(50),
        a = n(21);
    e.exports = n(88)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() { var e = this._t,
            t = this._k,
            n = this._i++; return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]) }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries") }, function(e, t, n) { var i = n(22);
    i(i.S, "Object", { create: n(52) }) }, function(e, t, n) { var i = n(22);
    i(i.S + i.F * !n(19), "Object", { defineProperties: n(90) }) }, function(e, t, n) { var i = n(22);
    i(i.S + i.F * !n(19), "Object", { defineProperty: n(24).f }) }, function(e, t, n) { var i = n(27),
        r = n(89).onFreeze;
    n(38)("freeze", function(e) { return function(t) { return e && i(t) ? e(r(t)) : t } }) }, function(e, t, n) { var i = n(21),
        r = n(53).f;
    n(38)("getOwnPropertyDescriptor", function() { return function(e, t) { return r(i(e), t) } }) }, function(e, t, n) { var i = n(59),
        r = n(93);
    n(38)("getPrototypeOf", function() { return function(e) { return r(i(e)) } }) }, function(e, t, n) { var i = n(59),
        r = n(33);
    n(38)("keys", function() { return function(e) { return r(i(e)) } }) }, function(e, t, n) { var i = n(22);
    i(i.S, "Object", { setPrototypeOf: n(202).set }) }, function(e, t) {}, function(e, t, n) { "use strict"; var i = n(203)(!0);
    n(88)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
            n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = i(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { "use strict"; var i = n(20),
        r = n(23),
        o = n(19),
        a = n(22),
        s = n(95),
        u = n(89).KEY,
        l = n(32),
        c = n(57),
        f = n(55),
        h = n(40),
        d = n(28),
        v = n(62),
        p = n(61),
        m = n(200),
        _ = n(194),
        g = n(197),
        x = n(31),
        y = n(21),
        b = n(60),
        M = n(39),
        w = n(52),
        E = n(201),
        S = n(53),
        T = n(24),
        P = n(33),
        A = S.f,
        C = T.f,
        I = E.f,
        D = i.Symbol,
        F = i.JSON,
        k = F && F.stringify,
        L = "prototype",
        R = d("_hidden"),
        O = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        V = c("symbol-registry"),
        z = c("symbols"),
        B = c("op-symbols"),
        G = Object[L],
        U = "function" == typeof D,
        j = i.QObject,
        X = !j || !j[L] || !j[L].findChild,
        q = o && l(function() { return 7 != w(C({}, "a", { get: function() { return C(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var i = A(G, t);
            i && delete G[t], C(e, t, n), i && e !== G && C(G, t, i) } : C,
        Y = function(e) { var t = z[e] = w(D[L]); return t._k = e, t },
        H = U && "symbol" == typeof D.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof D },
        W = function(e, t, n) { return e === G && W(B, t, n), x(e), t = b(t, !0), x(n), r(z, t) ? (n.enumerable ? (r(e, R) && e[R][t] && (e[R][t] = !1), n = w(n, { enumerable: M(0, !1) })) : (r(e, R) || C(e, R, M(1, {})), e[R][t] = !0), q(e, t, n)) : C(e, t, n) },
        K = function(e, t) { x(e); for (var n, i = _(t = y(t)), r = 0, o = i.length; o > r;) W(e, n = i[r++], t[n]); return e },
        Z = function(e, t) { return void 0 === t ? w(e) : K(w(e), t) },
        Q = function(e) { var t = N.call(this, e = b(e, !0)); return this === G && r(z, e) && !r(B, e) ? !1 : t || !r(this, e) || !r(z, e) || r(this, R) && this[R][e] ? t : !0 },
        J = function(e, t) { if (e = y(e), t = b(t, !0), e !== G || !r(z, t) || r(B, t)) { var n = A(e, t); return !n || !r(z, t) || r(e, R) && e[R][t] || (n.enumerable = !0), n } },
        $ = function(e) { for (var t, n = I(y(e)), i = [], o = 0; n.length > o;) r(z, t = n[o++]) || t == R || t == u || i.push(t); return i },
        ee = function(e) { for (var t, n = e === G, i = I(n ? B : y(e)), o = [], a = 0; i.length > a;) r(z, t = i[a++]) && (n ? r(G, t) : !0) && o.push(z[t]); return o };
    U || (D = function() { if (this instanceof D) throw TypeError("Symbol is not a constructor!"); var e = h(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === G && t.call(B, n), r(this, R) && r(this[R], e) && (this[R][e] = !1), q(this, e, M(1, n)) }; return o && X && q(G, e, { configurable: !0, set: t }), Y(e) }, s(D[L], "toString", function() { return this._k }), S.f = J, T.f = W, n(91).f = E.f = $, n(54).f = Q, n(92).f = ee, o && !n(51) && s(G, "propertyIsEnumerable", Q, !0), v.f = function(e) { return Y(d(e)) }), a(a.G + a.W + a.F * !U, { Symbol: D }); for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]); for (var te = P(d.store), ne = 0; te.length > ne;) p(te[ne++]);
    a(a.S + a.F * !U, "Symbol", { "for": function(e) { return r(V, e += "") ? V[e] : V[e] = D(e) }, keyFor: function(e) { if (H(e)) return m(V, e); throw TypeError(e + " is not a symbol!") }, useSetter: function() { X = !0 }, useSimple: function() { X = !1 } }), a(a.S + a.F * !U, "Object", { create: Z, defineProperty: W, defineProperties: K, getOwnPropertyDescriptor: J, getOwnPropertyNames: $, getOwnPropertySymbols: ee }), F && a(a.S + a.F * (!U || l(function() { var e = D(); return "[null]" != k([e]) || "{}" != k({ a: e }) || "{}" != k(Object(e)) })), "JSON", { stringify: function(e) { if (void 0 !== e && !H(e)) { for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]); return t = i[1], "function" == typeof t && (n = t), !n && g(t) || (t = function(e, t) { return n && (t = n.call(this, e, t)), H(t) ? void 0 : t }), i[1] = t, k.apply(F, i) } } }), D[L][O] || n(26)(D[L], O, D[L].valueOf), f(D, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0) }, function(e, t, n) { n(61)("asyncIterator") }, function(e, t, n) { n(61)("observable") }, function(e, t, n) { n(206); for (var i = n(20), r = n(26), o = n(50), a = n(28)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; 5 > u; u++) { var l = s[u],
            c = i[l],
            f = c && c.prototype;
        f && !f[a] && r(f, a, l), o[l] = o.Array } }, function(e, t, n) { e.exports = n(223), e.exports.color = n(222) }, function(e, t) { var n = e.exports = n || {};
    n.color = n.color || {}, n.utils = n.utils || {}, n.utils.common = function() { var e = Array.prototype.forEach,
            t = Array.prototype.slice; return { BREAK: {}, extend: function(e) { return this.each(t.call(arguments, 1), function(t) { for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n]) }, this), e }, defaults: function(e) { return this.each(t.call(arguments, 1), function(t) { for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n]) }, this), e }, compose: function() { var e = t.call(arguments); return function() { for (var n = t.call(arguments), i = e.length - 1; i >= 0; i--) n = [e[i].apply(this, n)]; return n[0] } }, each: function(t, n, i) { if (e && t.forEach === e) t.forEach(n, i);
                else if (t.length === t.length + 0) { for (var r = 0, o = t.length; o > r; r++)
                        if (r in t && n.call(i, t[r], r) === this.BREAK) return } else
                    for (var r in t)
                        if (n.call(i, t[r], r) === this.BREAK) return }, defer: function(e) { setTimeout(e, 0) }, toArray: function(e) { return e.toArray ? e.toArray() : t.call(e) }, isUndefined: function(e) { return void 0 === e }, isNull: function(e) { return null === e }, isNaN: function(e) { return e !== e }, isArray: Array.isArray || function(e) { return e.constructor === Array }, isObject: function(e) { return e === Object(e) }, isNumber: function(e) { return e === e + 0 }, isString: function(e) { return e === e + "" }, isBoolean: function(e) { return e === !1 || e === !0 }, isFunction: function(e) { return "[object Function]" === Object.prototype.toString.call(e) } } }(), n.color.toString = function(e) { return function(t) { if (1 == t.a || e.isUndefined(t.a)) { for (var n = t.hex.toString(16); n.length < 6;) n = "0" + n; return "#" + n } return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")" } }(n.utils.common), n.Color = n.color.Color = function(e, t, n, i) {
        function r(e, t, n) { Object.defineProperty(e, t, { get: function() { return "RGB" === this.__state.space ? this.__state[t] : (a(this, t, n), this.__state[t]) }, set: function(e) { "RGB" !== this.__state.space && (a(this, t, n), this.__state.space = "RGB"), this.__state[t] = e } }) }

        function o(e, t) { Object.defineProperty(e, t, { get: function() { return "HSV" === this.__state.space ? this.__state[t] : (s(this), this.__state[t]) }, set: function(e) { "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[t] = e } }) }

        function a(e, n, r) { if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, r);
            else { if ("HSV" !== e.__state.space) throw "Corrupted color state";
                i.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)) } }

        function s(e) { var n = t.rgb_to_hsv(e.r, e.g, e.b);
            i.extend(e.__state, { s: n.s, v: n.v }), i.isNaN(n.h) ? i.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h } var u = function() { if (this.__state = e.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1 }; return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], i.extend(u.prototype, { toString: function() { return n(this) }, toOriginal: function() { return this.__state.conversion.write(this) } }), r(u.prototype, "r", 2), r(u.prototype, "g", 1), r(u.prototype, "b", 0), o(u.prototype, "h"), o(u.prototype, "s"), o(u.prototype, "v"), Object.defineProperty(u.prototype, "a", { get: function() { return this.__state.a }, set: function(e) { this.__state.a = e } }), Object.defineProperty(u.prototype, "hex", { get: function() { return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex }, set: function(e) { this.__state.space = "HEX", this.__state.hex = e } }), u }(n.color.interpret = function(e, t) { var n, i, r = function() { i = !1; var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0]; return t.each(o, function(r) { return r.litmus(e) ? (t.each(r.conversions, function(r, o) { return n = r.read(e), i === !1 && n !== !1 ? (i = n, n.conversionName = o, n.conversion = r, t.BREAK) : void 0 }), t.BREAK) : void 0 }), i },
            o = [{ litmus: t.isString, conversions: { THREE_CHAR_HEX: { read: function(e) { var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString()) } }, write: e }, SIX_CHAR_HEX: { read: function(e) { var t = e.match(/^#([A-F0-9]{6})$/i); return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString()) } }, write: e }, CSS_RGB: { read: function(e) { var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) } }, write: e }, CSS_RGBA: { read: function(e) { var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/); return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) } }, write: e } } }, { litmus: t.isNumber, conversions: { HEX: { read: function(e) { return { space: "HEX", hex: e, conversionName: "HEX" } }, write: function(e) { return e.hex } } } }, { litmus: t.isArray, conversions: { RGB_ARRAY: { read: function(e) { return 3 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2] } }, write: function(e) { return [e.r, e.g, e.b] } }, RGBA_ARRAY: { read: function(e) { return 4 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] } }, write: function(e) { return [e.r, e.g, e.b, e.a] } } } }, { litmus: t.isObject, conversions: { RGBA_OBJ: { read: function(e) { return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : !1 }, write: function(e) { return { r: e.r, g: e.g, b: e.b, a: e.a } } }, RGB_OBJ: { read: function(e) { return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1 }, write: function(e) { return { r: e.r, g: e.g, b: e.b } } }, HSVA_OBJ: { read: function(e) { return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1 }, write: function(e) { return { h: e.h, s: e.s, v: e.v, a: e.a } } }, HSV_OBJ: { read: function(e) { return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1 }, write: function(e) { return { h: e.h, s: e.s, v: e.v } } } } }]; return r }(n.color.toString, n.utils.common), n.color.math = function() { var e; return { hsv_to_rgb: function(e, t, n) { var i = Math.floor(e / 60) % 6,
                    r = e / 60 - Math.floor(e / 60),
                    o = n * (1 - t),
                    a = n * (1 - r * t),
                    s = n * (1 - (1 - r) * t),
                    u = [
                        [n, s, o],
                        [a, n, o],
                        [o, n, s],
                        [o, a, n],
                        [s, o, n],
                        [n, o, a]
                    ][i]; return { r: 255 * u[0], g: 255 * u[1], b: 255 * u[2] } }, rgb_to_hsv: function(e, t, n) { var i, r, o = Math.min(e, t, n),
                    a = Math.max(e, t, n),
                    s = a - o; return 0 == a ? { h: NaN, s: 0, v: 0 } : (r = s / a, i = e == a ? (t - n) / s : t == a ? 2 + (n - e) / s : 4 + (e - t) / s, i /= 6, 0 > i && (i += 1), { h: 360 * i, s: r, v: a / 255 }) }, rgb_to_hex: function(e, t, n) { var i = this.hex_with_component(0, 2, e); return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n) }, component_from_hex: function(e, t) { return e >> 8 * t & 255 }, hex_with_component: function(t, n, i) { return i << (e = 8 * n) | t & ~(255 << e) } } }(), n.color.toString, n.utils.common) }, function(e, t) {
    var n = e.exports = n || {};
    n.gui = n.gui || {}, n.utils = n.utils || {}, n.controllers = n.controllers || {}, n.dom = n.dom || {}, n.color = n.color || {}, n.utils.css = function() { return { load: function(e, t) { t = t || document; var n = t.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n) }, inject: function(e, t) { t = t || document; var n = document.createElement("style");
                n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n) } } }(), n.utils.common = function() { var e = Array.prototype.forEach,
            t = Array.prototype.slice; return { BREAK: {}, extend: function(e) { return this.each(t.call(arguments, 1), function(t) { for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n]) }, this), e }, defaults: function(e) { return this.each(t.call(arguments, 1), function(t) { for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n]) }, this), e }, compose: function() { var e = t.call(arguments); return function() { for (var n = t.call(arguments), i = e.length - 1; i >= 0; i--) n = [e[i].apply(this, n)]; return n[0] } }, each: function(t, n, i) { if (e && t.forEach === e) t.forEach(n, i);
                else if (t.length === t.length + 0) { for (var r = 0, o = t.length; o > r; r++)
                        if (r in t && n.call(i, t[r], r) === this.BREAK) return } else
                    for (var r in t)
                        if (n.call(i, t[r], r) === this.BREAK) return }, defer: function(e) { setTimeout(e, 0) }, toArray: function(e) { return e.toArray ? e.toArray() : t.call(e) }, isUndefined: function(e) { return void 0 === e }, isNull: function(e) { return null === e }, isNaN: function(e) { return e !== e }, isArray: Array.isArray || function(e) { return e.constructor === Array }, isObject: function(e) { return e === Object(e) }, isNumber: function(e) { return e === e + 0 }, isString: function(e) { return e === e + "" }, isBoolean: function(e) { return e === !1 || e === !0 }, isFunction: function(e) { return "[object Function]" === Object.prototype.toString.call(e) } } }(), n.controllers.Controller = function(e) { var t = function(e, t) { this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0 }; return e.extend(t.prototype, { onChange: function(e) { return this.__onChange = e, this }, onFinishChange: function(e) { return this.__onFinishChange = e, this }, setValue: function(e) { return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this }, getValue: function() { return this.object[this.property] }, updateDisplay: function() { return this }, isModified: function() { return this.initialValue !== this.getValue() } }), t }(n.utils.common), n.dom.dom = function(e) {
        function t(t) { if ("0" === t || e.isUndefined(t)) return 0; var n = t.match(r); return e.isNull(n) ? 0 : parseFloat(n[1]) } var n = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] },
            i = {};
        e.each(n, function(t, n) { e.each(t, function(e) { i[e] = n }) }); var r = /(\d+(\.\d+)?)px/,
            o = { makeSelectable: function(e, t) { void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() { return !1 } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off") }, makeFullscreen: function(t, n, i) { e.isUndefined(n) && (n = !0), e.isUndefined(i) && (i = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), i && (t.style.top = 0, t.style.bottom = 0) }, fakeEvent: function(t, n, r, o) { r = r || {}; var a = i[n]; if (!a) throw new Error("Event type " + n + " not supported."); var s = document.createEvent(a); switch (a) {
                        case "MouseEvents":
                            var u = r.x || r.clientX || 0,
                                l = r.y || r.clientY || 0;
                            s.initMouseEvent(n, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, u, l, !1, !1, !1, !1, 0, null); break;
                        case "KeyboardEvents":
                            var c = s.initKeyboardEvent || s.initKeyEvent;
                            e.defaults(r, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), c(n, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode); break;
                        default:
                            s.initEvent(n, r.bubbles || !1, r.cancelable || !0) }
                    e.defaults(s, o), t.dispatchEvent(s) }, bind: function(e, t, n, i) { return i = i || !1, e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), o }, unbind: function(e, t, n, i) { return i = i || !1, e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), o }, addClass: function(e, t) { if (void 0 === e.className) e.className = t;
                    else if (e.className !== t) { var n = e.className.split(/ +/); - 1 == n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")) } return o }, removeClass: function(e, t) { if (t)
                        if (void 0 === e.className);
                        else if (e.className === t) e.removeAttribute("class");
                    else { var n = e.className.split(/ +/),
                            i = n.indexOf(t); - 1 != i && (n.splice(i, 1), e.className = n.join(" ")) } else e.className = void 0; return o }, hasClass: function(e, t) { return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1 }, getWidth: function(e) { var n = getComputedStyle(e); return t(n["border-left-width"]) + t(n["border-right-width"]) + t(n["padding-left"]) + t(n["padding-right"]) + t(n.width) }, getHeight: function(e) { var n = getComputedStyle(e); return t(n["border-top-width"]) + t(n["border-bottom-width"]) + t(n["padding-top"]) + t(n["padding-bottom"]) + t(n.height) }, getOffset: function(e) { var t = { left: 0, top: 0 }; if (e.offsetParent)
                        do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent); return t }, isActive: function(e) { return e === document.activeElement && (e.type || e.href) } }; return o }(n.utils.common), n.controllers.OptionController = function(e, t, n) { var i = function(e, r, o) { i.superclass.call(this, e, r); var a = this; if (this.__select = document.createElement("select"), n.isArray(o)) { var s = {};
                n.each(o, function(e) { s[e] = e }), o = s }
            n.each(o, function(e, t) { var n = document.createElement("option");
                n.innerHTML = t, n.setAttribute("value", e), a.__select.appendChild(n) }), this.updateDisplay(), t.bind(this.__select, "change", function() { var e = this.options[this.selectedIndex].value;
                a.setValue(e) }), this.domElement.appendChild(this.__select) }; return i.superclass = e, n.extend(i.prototype, e.prototype, { setValue: function(e) { var t = i.superclass.prototype.setValue.call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t }, updateDisplay: function() { return this.__select.value = this.getValue(), i.superclass.prototype.updateDisplay.call(this) } }), i }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.NumberController = function(e, t) {
        function n(e) { return e = e.toString(), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0 } var i = function(e, r, o) { i.superclass.call(this, e, r), o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, t.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = n(this.__impliedStep) }; return i.superclass = e, t.extend(i.prototype, e.prototype, { setValue: function(e) { return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), i.superclass.prototype.setValue.call(this, e) }, min: function(e) { return this.__min = e, this }, max: function(e) { return this.__max = e, this }, step: function(e) { return this.__step = e, this } }), i }(n.controllers.Controller, n.utils.common), n.controllers.NumberControllerBox = function(e, t, n) {
        function i(e, t) { var n = Math.pow(10, t); return Math.round(e * n) / n } var r = function(e, i, o) {
            function a() { var e = parseFloat(h.__input.value);
                n.isNaN(e) || h.setValue(e) }

            function s() { a(), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue()) }

            function u(e) { t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), f = e.clientY }

            function l(e) { var t = f - e.clientY;
                h.setValue(h.getValue() + t * h.__impliedStep), f = e.clientY }

            function c() { t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c) }
            this.__truncationSuspended = !1, r.superclass.call(this, e, i, o); var f, h = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", a), t.bind(this.__input, "blur", s), t.bind(this.__input, "mousedown", u), t.bind(this.__input, "keydown", function(e) { 13 === e.keyCode && (h.__truncationSuspended = !0, this.blur(), h.__truncationSuspended = !1) }), this.updateDisplay(), this.domElement.appendChild(this.__input) }; return r.superclass = e, n.extend(r.prototype, e.prototype, { updateDisplay: function() { return this.__input.value = this.__truncationSuspended ? this.getValue() : i(this.getValue(), this.__precision), r.superclass.prototype.updateDisplay.call(this) } }), r }(n.controllers.NumberController, n.dom.dom, n.utils.common), n.controllers.NumberControllerSlider = function(e, t, n, i, r) {
        function o(e, t, n, i, r) { return i + (r - i) * ((e - t) / (n - t)) } var a = function(e, n, i, r, s) {
            function u(e) { t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), l(e) }

            function l(e) { e.preventDefault(); var n = t.getOffset(f.__background),
                    i = t.getWidth(f.__background); return f.setValue(o(e.clientX, n.left, n.left + i, f.__min, f.__max)), !1 }

            function c() { t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c), f.__onFinishChange && f.__onFinishChange.call(f, f.getValue()) }
            a.superclass.call(this, e, n, { min: i, max: r, step: s }); var f = this;
            this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", u), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background) }; return a.superclass = e, a.useDefaultStyles = function() { n.inject(r) }, i.extend(a.prototype, e.prototype, { updateDisplay: function() { var e = (this.getValue() - this.__min) / (this.__max - this.__min); return this.__foreground.style.width = 100 * e + "%", a.superclass.prototype.updateDisplay.call(this) } }), a }(n.controllers.NumberController, n.dom.dom, n.utils.css, n.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), n.controllers.FunctionController = function(e, t, n) { var i = function(e, n, r) { i.superclass.call(this, e, n); var o = this;
            this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === r ? "Fire" : r, t.bind(this.__button, "click", function(e) { return e.preventDefault(), o.fire(), !1 }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button) }; return i.superclass = e, n.extend(i.prototype, e.prototype, { fire: function() { this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object) } }), i }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.BooleanController = function(e, t, n) { var i = function(e, n) {
            function r() { o.setValue(!o.__prev) }
            i.superclass.call(this, e, n); var o = this;
            this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", r, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay() }; return i.superclass = e, n.extend(i.prototype, e.prototype, { setValue: function(e) { var t = i.superclass.prototype.setValue.call(this, e); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t }, updateDisplay: function() { return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, i.superclass.prototype.updateDisplay.call(this) } }), i }(n.controllers.Controller, n.dom.dom, n.utils.common), n.color.toString = function(e) { return function(t) { if (1 == t.a || e.isUndefined(t.a)) { for (var n = t.hex.toString(16); n.length < 6;) n = "0" + n; return "#" + n } return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")" } }(n.utils.common), n.color.interpret = function(e, t) {
        var n, i, r = function() { i = !1; var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0]; return t.each(o, function(r) { return r.litmus(e) ? (t.each(r.conversions, function(r, o) { return n = r.read(e), i === !1 && n !== !1 ? (i = n, n.conversionName = o, n.conversion = r, t.BREAK) : void 0 }), t.BREAK) : void 0 }), i },
            o = [{ litmus: t.isString, conversions: { THREE_CHAR_HEX: { read: function(e) { var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString()) } }, write: e }, SIX_CHAR_HEX: { read: function(e) { var t = e.match(/^#([A-F0-9]{6})$/i); return null === t ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString()) } }, write: e }, CSS_RGB: { read: function(e) { var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/); return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) } }, write: e }, CSS_RGBA: { read: function(e) { var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/); return null === t ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) } }, write: e } } }, { litmus: t.isNumber, conversions: { HEX: { read: function(e) { return { space: "HEX", hex: e, conversionName: "HEX" } }, write: function(e) { return e.hex } } } }, { litmus: t.isArray, conversions: { RGB_ARRAY: { read: function(e) { return 3 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2] } }, write: function(e) { return [e.r, e.g, e.b] } }, RGBA_ARRAY: { read: function(e) { return 4 != e.length ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] } }, write: function(e) { return [e.r, e.g, e.b, e.a] } } } }, {
                litmus: t.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(e) {
                            return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            } : !1
                        },
                        write: function(e) { return { r: e.r, g: e.g, b: e.b, a: e.a } }
                    },
                    RGB_OBJ: { read: function(e) { return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1 }, write: function(e) { return { r: e.r, g: e.g, b: e.b } } },
                    HSVA_OBJ: { read: function(e) { return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1 }, write: function(e) { return { h: e.h, s: e.s, v: e.v, a: e.a } } },
                    HSV_OBJ: { read: function(e) { return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1 }, write: function(e) { return { h: e.h, s: e.s, v: e.v } } }
                }
            }];
        return r
    }(n.color.toString, n.utils.common), n.GUI = n.gui.GUI = function(e, t, n, i, r, o, a, s, u, l, c, f, h, d, v) {
        function p(e, t, n, o) { if (void 0 === t[n]) throw new Error("Object " + t + ' has no property "' + n + '"'); var a; if (o.color) a = new c(t, n);
            else { var s = [t, n].concat(o.factoryArgs);
                a = i.apply(e, s) }
            o.before instanceof r && (o.before = o.before.__li), g(e, a), d.addClass(a.domElement, "c"); var u = document.createElement("span");
            d.addClass(u, "property-name"), u.innerHTML = a.property; var l = document.createElement("div");
            l.appendChild(u), l.appendChild(a.domElement); var f = m(e, l, o.before); return d.addClass(f, V.CLASS_CONTROLLER_ROW), d.addClass(f, typeof a.getValue()), _(e, f, a), e.__controllers.push(a), a }

        function m(e, t, n) { var i = document.createElement("li"); return t && i.appendChild(t), n ? e.__ul.insertBefore(i, params.before) : e.__ul.appendChild(i), e.onResize(), i }

        function _(e, t, n) { if (n.__li = t, n.__gui = e, v.extend(n, { options: function(t) { return arguments.length > 1 ? (n.remove(), p(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [v.toArray(arguments)] })) : v.isArray(t) || v.isObject(t) ? (n.remove(), p(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [t] })) : void 0 }, name: function(e) { return n.__li.firstElementChild.firstElementChild.innerHTML = e, n }, listen: function() { return n.__gui.listen(n), n }, remove: function() { return n.__gui.remove(n), n } }), n instanceof u) { var i = new s(n.object, n.property, { min: n.__min, max: n.__max, step: n.__step });
                v.each(["updateDisplay", "onChange", "onFinishChange"], function(e) { var t = n[e],
                        r = i[e];
                    n[e] = i[e] = function() { var e = Array.prototype.slice.call(arguments); return t.apply(n, e), r.apply(i, e) } }), d.addClass(t, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild) } else if (n instanceof s) { var r = function(t) { return v.isNumber(n.__min) && v.isNumber(n.__max) ? (n.remove(), p(e, n.object, n.property, { before: n.__li.nextElementSibling, factoryArgs: [n.__min, n.__max, n.__step] })) : t };
                n.min = v.compose(r, n.min), n.max = v.compose(r, n.max) } else n instanceof o ? (d.bind(t, "click", function() { d.fakeEvent(n.__checkbox, "click") }), d.bind(n.__checkbox, "click", function(e) { e.stopPropagation() })) : n instanceof a ? (d.bind(t, "click", function() { d.fakeEvent(n.__button, "click") }), d.bind(t, "mouseover", function() { d.addClass(n.__button, "hover") }), d.bind(t, "mouseout", function() { d.removeClass(n.__button, "hover") })) : n instanceof c && (d.addClass(t, "color"), n.updateDisplay = v.compose(function(e) { return t.style.borderLeftColor = n.__color.toString(), e }, n.updateDisplay), n.updateDisplay());
            n.setValue = v.compose(function(t) { return e.getRoot().__preset_select && n.isModified() && T(e.getRoot(), !0), t }, n.setValue) }

        function g(e, t) { var n = e.getRoot(),
                i = n.__rememberedObjects.indexOf(t.object); if (-1 != i) { var r = n.__rememberedObjectIndecesToControllers[i]; if (void 0 === r && (r = {}, n.__rememberedObjectIndecesToControllers[i] = r), r[t.property] = t, n.load && n.load.remembered) { var o, a = n.load.remembered; if (a[e.preset]) o = a[e.preset];
                    else { if (!a[k]) return;
                        o = a[k] } if (o[i] && void 0 !== o[i][t.property]) { var s = o[i][t.property];
                        t.initialValue = s, t.setValue(s) } } } }

        function x(e, t) { return document.location.href + "." + t }

        function y(e) {
            function t() { l.style.display = e.useLocalStorage ? "block" : "none" } var n = e.__save_row = document.createElement("li");
            d.addClass(e.domElement, "has-save"), e.__ul.insertBefore(n, e.__ul.firstChild), d.addClass(n, "save-row"); var i = document.createElement("span");
            i.innerHTML = "&nbsp;", d.addClass(i, "button gears"); var r = document.createElement("span");
            r.innerHTML = "Save", d.addClass(r, "button"), d.addClass(r, "save"); var o = document.createElement("span");
            o.innerHTML = "New", d.addClass(o, "button"), d.addClass(o, "save-as"); var a = document.createElement("span");
            a.innerHTML = "Revert", d.addClass(a, "button"), d.addClass(a, "revert"); var s = e.__preset_select = document.createElement("select"); if (e.load && e.load.remembered ? v.each(e.load.remembered, function(t, n) { E(e, n, n == e.preset) }) : E(e, k, !1), d.bind(s, "change", function() { for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                    e.preset = this.value }), n.appendChild(s), n.appendChild(i), n.appendChild(r), n.appendChild(o), n.appendChild(a), L) { var u = document.getElementById("dg-save-locally"),
                    l = document.getElementById("dg-local-explain");
                u.style.display = "block"; var c = document.getElementById("dg-local-storage"); "true" === localStorage.getItem(x(e, "isLocal")) && c.setAttribute("checked", "checked"), t(), d.bind(c, "change", function() { e.useLocalStorage = !e.useLocalStorage, t() }) } var f = document.getElementById("dg-new-constructor");
            d.bind(f, "keydown", function(e) {!e.metaKey || 67 !== e.which && 67 != e.keyCode || A.hide() }), d.bind(i, "click", function() { f.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), A.show(), f.focus(), f.select() }), d.bind(r, "click", function() { e.save() }), d.bind(o, "click", function() { var t = prompt("Enter a new preset name.");
                t && e.saveAs(t) }), d.bind(a, "click", function() { e.revert() }) }

        function b(e) {
            function t(t) { return t.preventDefault(), r = t.clientX, d.addClass(e.__closeButton, V.CLASS_DRAG), d.bind(window, "mousemove", n), d.bind(window, "mouseup", i), !1 }

            function n(t) { return t.preventDefault(), e.width += r - t.clientX, e.onResize(), r = t.clientX, !1 }

            function i() { d.removeClass(e.__closeButton, V.CLASS_DRAG), d.unbind(window, "mousemove", n), d.unbind(window, "mouseup", i) }
            e.__resize_handle = document.createElement("div"), v.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }); var r;
            d.bind(e.__resize_handle, "mousedown", t), d.bind(e.__closeButton, "mousedown", t), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild) }

        function M(e, t) { e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px") }

        function w(e, t) { var n = {}; return v.each(e.__rememberedObjects, function(i, r) { var o = {},
                    a = e.__rememberedObjectIndecesToControllers[r];
                v.each(a, function(e, n) { o[n] = t ? e.initialValue : e.getValue() }), n[r] = o }), n }

        function E(e, t, n) { var i = document.createElement("option");
            i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1) }

        function S(e) { for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t) }

        function T(e, t) { var n = e.__preset_select[e.__preset_select.selectedIndex];
            t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value }

        function P(e) { 0 != e.length && f(function() { P(e) }), v.each(e, function(e) { e.updateDisplay() }) }
        e.inject(n); var A, C, I = "dg",
            D = 72,
            F = 20,
            k = "Default",
            L = function() { try { return "localStorage" in window && null !== window.localStorage } catch (e) { return !1 } }(),
            R = !0,
            O = !1,
            N = [],
            V = function(e) {
                function t() { localStorage.setItem(x(i, "gui"), JSON.stringify(i.getSaveObject())) }

                function n() { var e = i.getRoot();
                    e.width += 1, v.defer(function() { e.width -= 1 }) } var i = this;
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), d.addClass(this.domElement, I), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = v.defaults(e, { autoPlace: !0, width: V.DEFAULT_WIDTH }), e = v.defaults(e, { resizable: e.autoPlace, hideable: e.autoPlace }), v.isUndefined(e.load) ? e.load = { preset: k } : e.preset && (e.load.preset = e.preset), v.isUndefined(e.parent) && e.hideable && N.push(this), e.resizable = v.isUndefined(e.parent) && e.resizable, e.autoPlace && v.isUndefined(e.scrollable) && (e.scrollable = !0); var r = L && "true" === localStorage.getItem(x(this, "isLocal")); if (Object.defineProperties(this, { parent: { get: function() { return e.parent } }, scrollable: { get: function() { return e.scrollable } }, autoPlace: { get: function() { return e.autoPlace } }, preset: { get: function() { return i.parent ? i.getRoot().preset : e.load.preset }, set: function(t) { i.parent ? i.getRoot().preset = t : e.load.preset = t, S(this), i.revert() } }, width: { get: function() { return e.width }, set: function(t) { e.width = t, M(i, t) } }, name: { get: function() { return e.name }, set: function(t) { e.name = t, a && (a.innerHTML = e.name) } }, closed: { get: function() { return e.closed }, set: function(t) { e.closed = t, e.closed ? d.addClass(i.__ul, V.CLASS_CLOSED) : d.removeClass(i.__ul, V.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = t ? V.TEXT_OPEN : V.TEXT_CLOSED) } }, load: { get: function() { return e.load } }, useLocalStorage: { get: function() { return r }, set: function(e) { L && (r = e, e ? d.bind(window, "unload", t) : d.unbind(window, "unload", t), localStorage.setItem(x(i, "isLocal"), e)) } } }), v.isUndefined(e.parent)) { if (e.closed = !1, d.addClass(this.domElement, V.CLASS_MAIN), d.makeSelectable(this.domElement, !1), L && r) { i.useLocalStorage = !0; var o = localStorage.getItem(x(this, "gui"));
                        o && (e.load = JSON.parse(o)) }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = V.TEXT_CLOSED, d.addClass(this.__closeButton, V.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), d.bind(this.__closeButton, "click", function() { i.closed = !i.closed }) } else { void 0 === e.closed && (e.closed = !0); var a = document.createTextNode(e.name);
                    d.addClass(a, "controller-name"); var s = m(i, a),
                        u = function(e) { return e.preventDefault(), i.closed = !i.closed, !1 };
                    d.addClass(this.__ul, V.CLASS_CLOSED), d.addClass(s, "title"), d.bind(s, "click", u), e.closed || (this.closed = !1) }
                e.autoPlace && (v.isUndefined(e.parent) && (R && (C = document.createElement("div"), d.addClass(C, I), d.addClass(C, V.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(C), R = !1), C.appendChild(this.domElement), d.addClass(this.domElement, V.CLASS_AUTO_PLACE)), this.parent || M(i, e.width)), d.bind(window, "resize", function() { i.onResize() }), d.bind(this.__ul, "webkitTransitionEnd", function() { i.onResize() }), d.bind(this.__ul, "transitionend", function() { i.onResize() }), d.bind(this.__ul, "oTransitionEnd", function() { i.onResize() }), this.onResize(), e.resizable && b(this);
                i.getRoot();
                e.parent || n() }; return V.toggleHide = function() { O = !O, v.each(N, function(e) { e.domElement.style.zIndex = O ? -999 : 999, e.domElement.style.opacity = O ? 0 : 1 }) }, V.CLASS_AUTO_PLACE = "a", V.CLASS_AUTO_PLACE_CONTAINER = "ac", V.CLASS_MAIN = "main", V.CLASS_CONTROLLER_ROW = "cr", V.CLASS_TOO_TALL = "taller-than-window", V.CLASS_CLOSED = "closed", V.CLASS_CLOSE_BUTTON = "close-button", V.CLASS_DRAG = "drag", V.DEFAULT_WIDTH = 245, V.TEXT_CLOSED = "Close Controls", V.TEXT_OPEN = "Open Controls", d.bind(window, "keydown", function(e) { "text" === document.activeElement.type || e.which !== D && e.keyCode != D || V.toggleHide() }, !1), v.extend(V.prototype, { add: function(e, t) { return p(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) }) }, addColor: function(e, t) { return p(this, e, t, { color: !0 }) }, remove: function(e) { this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1); var t = this;
                v.defer(function() { t.onResize() }) }, destroy: function() { this.autoPlace && C.removeChild(this.domElement) }, addFolder: function(e) { if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"'); var t = { name: e, parent: this };
                t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]); var n = new V(t);
                this.__folders[e] = n; var i = m(this, n.domElement); return d.addClass(i, "folder"), n }, open: function() { this.closed = !1 }, close: function() { this.closed = !0 }, onResize: function() { var e = this.getRoot(); if (e.scrollable) { var t = d.getOffset(e.__ul).top,
                        n = 0;
                    v.each(e.__ul.childNodes, function(t) { e.autoPlace && t === e.__save_row || (n += d.getHeight(t)) }), window.innerHeight - t - F < n ? (d.addClass(e.domElement, V.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - F + "px") : (d.removeClass(e.domElement, V.CLASS_TOO_TALL), e.__ul.style.height = "auto") }
                e.__resize_handle && v.defer(function() { e.__resize_handle.style.height = e.__ul.offsetHeight + "px" }), e.__closeButton && (e.__closeButton.style.width = e.width + "px") }, remember: function() { if (v.isUndefined(A) && (A = new h, A.domElement.innerHTML = t), this.parent) throw new Error("You can only call remember on a top level GUI."); var e = this;
                v.each(Array.prototype.slice.call(arguments), function(t) { 0 == e.__rememberedObjects.length && y(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t) }), this.autoPlace && M(this, this.width) }, getRoot: function() { for (var e = this; e.parent;) e = e.parent; return e }, getSaveObject: function() { var e = this.load; return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = w(this)), e.folders = {}, v.each(this.__folders, function(t, n) { e.folders[n] = t.getSaveObject() }), e }, save: function() { this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = w(this), T(this, !1) }, saveAs: function(e) { this.load.remembered || (this.load.remembered = {}, this.load.remembered[k] = w(this, !0)), this.load.remembered[e] = w(this), this.preset = e, E(this, e, !0) }, revert: function(e) { v.each(this.__controllers, function(t) { this.getRoot().load.remembered ? g(e || this.getRoot(), t) : t.setValue(t.initialValue) }, this), v.each(this.__folders, function(e) { e.revert(e) }), e || T(this.getRoot(), !1) }, listen: function(e) { var t = 0 == this.__listening.length;
                this.__listening.push(e), t && P(this.__listening) } }), V }(n.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", n.controllers.factory = function(e, t, n, i, r, o, a) { return function(s, u) { var l = s[u]; return a.isArray(arguments[2]) || a.isObject(arguments[2]) ? new e(s, u, arguments[2]) : a.isNumber(l) ? a.isNumber(arguments[2]) && a.isNumber(arguments[3]) ? new n(s, u, arguments[2], arguments[3]) : new t(s, u, { min: arguments[2], max: arguments[3] }) : a.isString(l) ? new i(s, u) : a.isFunction(l) ? new r(s, u, "") : a.isBoolean(l) ? new o(s, u) : void 0 } }(n.controllers.OptionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.StringController = function(e, t, n) { var i = function(e, n) {
            function r() { a.setValue(a.__input.value) }

            function o() { a.__onFinishChange && a.__onFinishChange.call(a, a.getValue()) }
            i.superclass.call(this, e, n); var a = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", r), t.bind(this.__input, "change", r), t.bind(this.__input, "blur", o), t.bind(this.__input, "keydown", function(e) { 13 === e.keyCode && this.blur() }), this.updateDisplay(), this.domElement.appendChild(this.__input) }; return i.superclass = e, n.extend(i.prototype, e.prototype, { updateDisplay: function() { return t.isActive(this.__input) || (this.__input.value = this.getValue()), i.superclass.prototype.updateDisplay.call(this) } }), i }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.FunctionController, n.controllers.BooleanController, n.utils.common), n.controllers.Controller, n.controllers.BooleanController, n.controllers.FunctionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.OptionController, n.controllers.ColorController = function(e, t, n, i, r) {
        function o(e, t, n, i) { e.style.background = "", r.each(u, function(r) { e.style.cssText += "background: " + r + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); " }) }

        function a(e) { e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);" } var s = function(e, u) {
            function l(e) { d(e), t.bind(window, "mousemove", d), t.bind(window, "mouseup", c) }

            function c() { t.unbind(window, "mousemove", d), t.unbind(window, "mouseup", c) }

            function f() { var e = i(this.value);
                e !== !1 ? (p.__color.__state = e, p.setValue(p.__color.toOriginal())) : this.value = p.__color.toString() }

            function h() { t.unbind(window, "mousemove", v), t.unbind(window, "mouseup", h) }

            function d(e) { e.preventDefault(); var n = t.getWidth(p.__saturation_field),
                    i = t.getOffset(p.__saturation_field),
                    r = (e.clientX - i.left + document.body.scrollLeft) / n,
                    o = 1 - (e.clientY - i.top + document.body.scrollTop) / n; return o > 1 ? o = 1 : 0 > o && (o = 0), r > 1 ? r = 1 : 0 > r && (r = 0), p.__color.v = o, p.__color.s = r, p.setValue(p.__color.toOriginal()), !1 }

            function v(e) { e.preventDefault(); var n = t.getHeight(p.__hue_field),
                    i = t.getOffset(p.__hue_field),
                    r = 1 - (e.clientY - i.top + document.body.scrollTop) / n; return r > 1 ? r = 1 : 0 > r && (r = 0), p.__color.h = 360 * r, p.setValue(p.__color.toOriginal()), !1 }
            s.superclass.call(this, e, u), this.__color = new n(this.getValue()), this.__temp = new n(0); var p = this;
            this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function(e) { 13 === e.keyCode && f.call(this) }), t.bind(this.__input, "blur", f), t.bind(this.__selector, "mousedown", function(e) { t.addClass(this, "drag").bind(window, "mouseup", function(e) { t.removeClass(p.__selector, "drag") }) }); var m = document.createElement("div");
            r.extend(this.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), r.extend(this.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), r.extend(this.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), r.extend(this.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), r.extend(m.style, { width: "100%", height: "100%", background: "none" }), o(m, "top", "rgba(0,0,0,0)", "#000"), r.extend(this.__hue_field.style, { width: "15px", height: "100px", display: "inline-block", border: "1px solid #555", cursor: "ns-resize" }), a(this.__hue_field), r.extend(this.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)" }), t.bind(this.__saturation_field, "mousedown", l), t.bind(this.__field_knob, "mousedown", l), t.bind(this.__hue_field, "mousedown", function(e) { v(e), t.bind(window, "mousemove", v), t.bind(window, "mouseup", h) }), this.__saturation_field.appendChild(m), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay() };
        s.superclass = e, r.extend(s.prototype, e.prototype, { updateDisplay: function() { var e = i(this.getValue()); if (e !== !1) { var t = !1;
                    r.each(n.COMPONENTS, function(n) { return r.isUndefined(e[n]) || r.isUndefined(this.__color.__state[n]) || e[n] === this.__color.__state[n] ? void 0 : (t = !0, {}) }, this), t && r.extend(this.__color.__state, e) }
                r.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1; var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    s = 255 - a;
                r.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toString(), border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, o(this.__saturation_field, "left", "#fff", this.__temp.toString()), r.extend(this.__input.style, { backgroundColor: this.__input.value = this.__color.toString(), color: "rgb(" + a + "," + a + "," + a + ")", textShadow: this.__input_textShadow + "rgba(" + s + "," + s + "," + s + ",.7)" }) } }); var u = ["-moz-", "-o-", "-webkit-", "-ms-", ""]; return s }(n.controllers.Controller, n.dom.dom, n.color.Color = function(e, t, n, i) {
        function r(e, t, n) { Object.defineProperty(e, t, { get: function() { return "RGB" === this.__state.space ? this.__state[t] : (a(this, t, n), this.__state[t]) }, set: function(e) { "RGB" !== this.__state.space && (a(this, t, n), this.__state.space = "RGB"), this.__state[t] = e } }) }

        function o(e, t) { Object.defineProperty(e, t, { get: function() { return "HSV" === this.__state.space ? this.__state[t] : (s(this), this.__state[t]) }, set: function(e) { "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[t] = e } }) }

        function a(e, n, r) { if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, r);
            else { if ("HSV" !== e.__state.space) throw "Corrupted color state";
                i.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v)) } }

        function s(e) { var n = t.rgb_to_hsv(e.r, e.g, e.b);
            i.extend(e.__state, { s: n.s, v: n.v }), i.isNaN(n.h) ? i.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h } var u = function() { if (this.__state = e.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1 }; return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], i.extend(u.prototype, { toString: function() { return n(this) }, toOriginal: function() { return this.__state.conversion.write(this) } }), r(u.prototype, "r", 2), r(u.prototype, "g", 1), r(u.prototype, "b", 0), o(u.prototype, "h"), o(u.prototype, "s"), o(u.prototype, "v"), Object.defineProperty(u.prototype, "a", { get: function() { return this.__state.a }, set: function(e) { this.__state.a = e } }), Object.defineProperty(u.prototype, "hex", { get: function() { return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex }, set: function(e) { this.__state.space = "HEX", this.__state.hex = e } }), u }(n.color.interpret, n.color.math = function() { var e; return { hsv_to_rgb: function(e, t, n) { var i = Math.floor(e / 60) % 6,
                    r = e / 60 - Math.floor(e / 60),
                    o = n * (1 - t),
                    a = n * (1 - r * t),
                    s = n * (1 - (1 - r) * t),
                    u = [
                        [n, s, o],
                        [a, n, o],
                        [o, n, s],
                        [o, a, n],
                        [s, o, n],
                        [n, o, a]
                    ][i]; return { r: 255 * u[0], g: 255 * u[1], b: 255 * u[2] } }, rgb_to_hsv: function(e, t, n) { var i, r, o = Math.min(e, t, n),
                    a = Math.max(e, t, n),
                    s = a - o; return 0 == a ? { h: NaN, s: 0, v: 0 } : (r = s / a, i = e == a ? (t - n) / s : t == a ? 2 + (n - e) / s : 4 + (e - t) / s, i /= 6, 0 > i && (i += 1), { h: 360 * i, s: r, v: a / 255 }) }, rgb_to_hex: function(e, t, n) { var i = this.hex_with_component(0, 2, e); return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n) }, component_from_hex: function(e, t) { return e >> 8 * t & 255 }, hex_with_component: function(t, n, i) { return i << (e = 8 * n) | t & ~(255 << e) } } }(), n.color.toString, n.utils.common), n.color.interpret, n.utils.common), n.utils.requestAnimationFrame = function() { return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) { window.setTimeout(e, 1e3 / 60) } }(), n.dom.CenteredDiv = function(e, t) { var n = function() { this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear" }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement); var n = this;
            e.bind(this.backgroundElement, "click", function() { n.hide() }) }; return n.prototype.show = function() { var e = this;
            this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function() { e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)" }) }, n.prototype.hide = function() { var t = this,
                n = function() { t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n) };
            e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)" }, n.prototype.layout = function() { this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px" }, n }(n.dom.dom, n.utils.common), n.dom.dom, n.utils.common)
}, function(e, t) {
    function n() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0 }

    function i(e) { return "function" == typeof e }

    function r(e) { return "number" == typeof e }

    function o(e) { return "object" == typeof e && null !== e }

    function a(e) { return void 0 === e }
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) { if (!r(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number"); return this._maxListeners = e, this }, n.prototype.emit = function(e) {
        var t, n, r, s, u, l;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            throw TypeError('Uncaught, unspecified "error" event.')
        }
        if (n = this._events[e], a(n)) return !1;
        if (i(n)) switch (arguments.length) {
            case 1:
                n.call(this); break;
            case 2:
                n.call(this, arguments[1]); break;
            case 3:
                n.call(this, arguments[1], arguments[2]); break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s) } else if (o(n))
            for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), r = l.length, u = 0; r > u; u++) l[u].apply(this, s);
        return !0
    }, n.prototype.addListener = function(e, t) { var r; if (!i(t)) throw TypeError("listener must be a function"); return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, "function" == typeof console.trace)), this }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() { this.removeListener(e, n), r || (r = !0, t.apply(this, arguments)) } if (!i(t)) throw TypeError("listener must be a function"); var r = !1; return n.listener = t, this.on(e, n), this }, n.prototype.removeListener = function(e, t) { var n, r, a, s; if (!i(t)) throw TypeError("listener must be a function"); if (!this._events || !this._events[e]) return this; if (n = this._events[e], a = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(n)) { for (s = a; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) { r = s; break }
            if (0 > r) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t) } return this }, n.prototype.removeAllListeners = function(e) { var t, n; if (!this._events) return this; if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this; if (0 === arguments.length) { for (t in this._events) "removeListener" !== t && this.removeAllListeners(t); return this.removeAllListeners("removeListener"), this._events = {}, this } if (n = this._events[e], i(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]); return delete this._events[e], this }, n.prototype.listeners = function(e) { var t; return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [] }, n.prototype.listenerCount = function(e) { if (this._events) { var t = this._events[e]; if (i(t)) return 1; if (t) return t.length } return 0 }, n.listenerCount = function(e, t) { return e.listenerCount(t) }
}, function(e, t) {}, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(4); return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(4); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e }, r.identity = function(e) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e }, r.fromValues = function(e, t, n, r) { var o = new i.ARRAY_TYPE(4); return o[0] = e, o[1] = t, o[2] = n, o[3] = r, o }, r.set = function(e, t, n, i, r) { return e[0] = t, e[1] = n, e[2] = i, e[3] = r, e }, r.transpose = function(e, t) { if (e === t) { var n = t[1];
            e[1] = t[2], e[2] = n } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3]; return e }, r.invert = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = n * o - r * i; return a ? (a = 1 / a, e[0] = o * a, e[1] = -i * a, e[2] = -r * a, e[3] = n * a, e) : null }, r.adjoint = function(e, t) { var n = t[0]; return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = n, e }, r.determinant = function(e) { return e[0] * e[3] - e[2] * e[1] }, r.multiply = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = n[0],
            u = n[1],
            l = n[2],
            c = n[3]; return e[0] = i * s + o * u, e[1] = r * s + a * u, e[2] = i * l + o * c, e[3] = r * l + a * c, e }, r.mul = r.multiply, r.rotate = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = Math.sin(n),
            u = Math.cos(n); return e[0] = i * u + o * s, e[1] = r * u + a * s, e[2] = i * -s + o * u, e[3] = r * -s + a * u, e }, r.scale = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = n[0],
            u = n[1]; return e[0] = i * s, e[1] = r * s, e[2] = o * u, e[3] = a * u, e }, r.fromRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = i, e[1] = n, e[2] = -n, e[3] = i, e }, r.fromScaling = function(e, t) { return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e }, r.str = function(e) { return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")" }, r.frob = function(e) { return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2)) }, r.LDU = function(e, t, n, i) { return e[2] = i[2] / i[0], n[0] = i[0], n[1] = i[1], n[3] = i[3] - e[2] * n[1], [e, t, n] }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e }, r.sub = r.subtract, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = t[0],
            u = t[1],
            l = t[2],
            c = t[3]; return Math.abs(n - s) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(r - u) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(o - l) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) }, r.multiplyScalar = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e }, r.multiplyScalarAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e }, e.exports = r }, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(6); return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(6); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e }, r.identity = function(e) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e }, r.fromValues = function(e, t, n, r, o, a) { var s = new i.ARRAY_TYPE(6); return s[0] = e, s[1] = t, s[2] = n, s[3] = r, s[4] = o, s[5] = a, s }, r.set = function(e, t, n, i, r, o, a) { return e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = o, e[5] = a, e }, r.invert = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = n * o - i * r; return u ? (u = 1 / u, e[0] = o * u, e[1] = -i * u, e[2] = -r * u, e[3] = n * u, e[4] = (r * s - o * a) * u, e[5] = (i * a - n * s) * u, e) : null }, r.determinant = function(e) { return e[0] * e[3] - e[1] * e[2] }, r.multiply = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = n[0],
            c = n[1],
            f = n[2],
            h = n[3],
            d = n[4],
            v = n[5]; return e[0] = i * l + o * c, e[1] = r * l + a * c, e[2] = i * f + o * h, e[3] = r * f + a * h, e[4] = i * d + o * v + s, e[5] = r * d + a * v + u, e }, r.mul = r.multiply, r.rotate = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = Math.sin(n),
            c = Math.cos(n); return e[0] = i * c + o * l, e[1] = r * c + a * l, e[2] = i * -l + o * c, e[3] = r * -l + a * c, e[4] = s, e[5] = u, e }, r.scale = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = n[0],
            c = n[1]; return e[0] = i * l, e[1] = r * l, e[2] = o * c, e[3] = a * c, e[4] = s, e[5] = u, e }, r.translate = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = n[0],
            c = n[1]; return e[0] = i, e[1] = r, e[2] = o, e[3] = a, e[4] = i * l + o * c + s, e[5] = r * l + a * c + u, e }, r.fromRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = i, e[1] = n, e[2] = -n, e[3] = i, e[4] = 0, e[5] = 0, e }, r.fromScaling = function(e, t) { return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e }, r.fromTranslation = function(e, t) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e }, r.str = function(e) { return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")" }, r.frob = function(e) { return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + 1) }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e }, r.sub = r.subtract, r.multiplyScalar = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e }, r.multiplyScalarAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e }, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = t[0],
            c = t[1],
            f = t[2],
            h = t[3],
            d = t[4],
            v = t[5]; return Math.abs(n - l) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(r - c) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(o - f) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - h) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(s - d) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(u - v) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) }, e.exports = r }, function(e, t, n) {
    var i = n(15),
        r = { scalar: {}, SIMD: {} };
    r.create = function() { var e = new i.ARRAY_TYPE(16); return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(16); return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e }, r.fromValues = function(e, t, n, r, o, a, s, u, l, c, f, h, d, v, p, m) { var _ = new i.ARRAY_TYPE(16); return _[0] = e, _[1] = t, _[2] = n, _[3] = r, _[4] = o, _[5] = a, _[6] = s, _[7] = u, _[8] = l, _[9] = c, _[10] = f, _[11] = h, _[12] = d, _[13] = v, _[14] = p, _[15] = m, _ }, r.set = function(e, t, n, i, r, o, a, s, u, l, c, f, h, d, v, p, m) { return e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = o, e[5] = a, e[6] = s, e[7] = u, e[8] = l, e[9] = c, e[10] = f, e[11] = h, e[12] = d, e[13] = v, e[14] = p, e[15] = m, e }, r.identity = function(e) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.scalar.transpose = function(e, t) { if (e === t) { var n = t[1],
                i = t[2],
                r = t[3],
                o = t[6],
                a = t[7],
                s = t[11];
            e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = i, e[9] = o, e[11] = t[14], e[12] = r, e[13] = a, e[14] = s } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15]; return e }, r.SIMD.transpose = function(e, t) { var n, i, r, o, a, s, u, l, c, f; return n = SIMD.Float32x4.load(t, 0), i = SIMD.Float32x4.load(t, 4), r = SIMD.Float32x4.load(t, 8), o = SIMD.Float32x4.load(t, 12), a = SIMD.Float32x4.shuffle(n, i, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(r, o, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(e, 0, u), SIMD.Float32x4.store(e, 4, l), a = SIMD.Float32x4.shuffle(n, i, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(r, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), f = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(e, 8, c), SIMD.Float32x4.store(e, 12, f), e }, r.transpose = i.USE_SIMD ? r.SIMD.transpose : r.scalar.transpose, r.scalar.invert = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            f = t[9],
            h = t[10],
            d = t[11],
            v = t[12],
            p = t[13],
            m = t[14],
            _ = t[15],
            g = n * s - i * a,
            x = n * u - r * a,
            y = n * l - o * a,
            b = i * u - r * s,
            M = i * l - o * s,
            w = r * l - o * u,
            E = c * p - f * v,
            S = c * m - h * v,
            T = c * _ - d * v,
            P = f * m - h * p,
            A = f * _ - d * p,
            C = h * _ - d * m,
            I = g * C - x * A + y * P + b * T - M * S + w * E; return I ? (I = 1 / I, e[0] = (s * C - u * A + l * P) * I, e[1] = (r * A - i * C - o * P) * I, e[2] = (p * w - m * M + _ * b) * I, e[3] = (h * M - f * w - d * b) * I, e[4] = (u * T - a * C - l * S) * I, e[5] = (n * C - r * T + o * S) * I, e[6] = (m * y - v * w - _ * x) * I, e[7] = (c * w - h * y + d * x) * I, e[8] = (a * A - s * T + l * E) * I, e[9] = (i * T - n * A - o * E) * I, e[10] = (v * M - p * y + _ * g) * I, e[11] = (f * y - c * M - d * g) * I, e[12] = (s * S - a * P - u * E) * I, e[13] = (n * P - i * S + r * E) * I, e[14] = (p * x - v * b - m * g) * I, e[15] = (c * b - f * x + h * g) * I, e) : null }, r.SIMD.invert = function(e, t) { var n, i, r, o, a, s, u, l, c, f, h = SIMD.Float32x4.load(t, 0),
            d = SIMD.Float32x4.load(t, 4),
            v = SIMD.Float32x4.load(t, 8),
            p = SIMD.Float32x4.load(t, 12); return a = SIMD.Float32x4.shuffle(h, d, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(v, p, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, i, 0, 2, 4, 6), i = SIMD.Float32x4.shuffle(i, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(h, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(v, p, 2, 3, 6, 7), r = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(r, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.mul(i, a), u = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), s), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), a = SIMD.Float32x4.mul(i, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), c = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), r = SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), s), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(r, a)), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), c), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(r, a)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), l), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), u), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), c), f = SIMD.Float32x4.mul(n, s), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), f), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), f), a = SIMD.Float32x4.reciprocalApproximation(f), f = SIMD.Float32x4.sub(SIMD.Float32x4.add(a, a), SIMD.Float32x4.mul(f, SIMD.Float32x4.mul(a, a))), (f = SIMD.Float32x4.swizzle(f, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(e, 0, SIMD.Float32x4.mul(f, s)), SIMD.Float32x4.store(e, 4, SIMD.Float32x4.mul(f, u)), SIMD.Float32x4.store(e, 8, SIMD.Float32x4.mul(f, l)), SIMD.Float32x4.store(e, 12, SIMD.Float32x4.mul(f, c)), e) : null }, r.invert = i.USE_SIMD ? r.SIMD.invert : r.scalar.invert, r.scalar.adjoint = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            f = t[9],
            h = t[10],
            d = t[11],
            v = t[12],
            p = t[13],
            m = t[14],
            _ = t[15]; return e[0] = s * (h * _ - d * m) - f * (u * _ - l * m) + p * (u * d - l * h), e[1] = -(i * (h * _ - d * m) - f * (r * _ - o * m) + p * (r * d - o * h)), e[2] = i * (u * _ - l * m) - s * (r * _ - o * m) + p * (r * l - o * u), e[3] = -(i * (u * d - l * h) - s * (r * d - o * h) + f * (r * l - o * u)), e[4] = -(a * (h * _ - d * m) - c * (u * _ - l * m) + v * (u * d - l * h)), e[5] = n * (h * _ - d * m) - c * (r * _ - o * m) + v * (r * d - o * h), e[6] = -(n * (u * _ - l * m) - a * (r * _ - o * m) + v * (r * l - o * u)), e[7] = n * (u * d - l * h) - a * (r * d - o * h) + c * (r * l - o * u), e[8] = a * (f * _ - d * p) - c * (s * _ - l * p) + v * (s * d - l * f), e[9] = -(n * (f * _ - d * p) - c * (i * _ - o * p) + v * (i * d - o * f)), e[10] = n * (s * _ - l * p) - a * (i * _ - o * p) + v * (i * l - o * s), e[11] = -(n * (s * d - l * f) - a * (i * d - o * f) + c * (i * l - o * s)), e[12] = -(a * (f * m - h * p) - c * (s * m - u * p) + v * (s * h - u * f)), e[13] = n * (f * m - h * p) - c * (i * m - r * p) + v * (i * h - r * f), e[14] = -(n * (s * m - u * p) - a * (i * m - r * p) + v * (i * u - r * s)), e[15] = n * (s * h - u * f) - a * (i * h - r * f) + c * (i * u - r * s), e }, r.SIMD.adjoint = function(e, t) { var n, i, r, o, a, s, u, l, c, f, h, d, v, n = SIMD.Float32x4.load(t, 0),
            i = SIMD.Float32x4.load(t, 4),
            r = SIMD.Float32x4.load(t, 8),
            o = SIMD.Float32x4.load(t, 12); return c = SIMD.Float32x4.shuffle(n, i, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(r, o, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(c, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, c, 1, 3, 5, 7), c = SIMD.Float32x4.shuffle(n, i, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(r, o, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(c, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, c, 1, 3, 5, 7), c = SIMD.Float32x4.mul(u, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.mul(s, c), h = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), f), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), c = SIMD.Float32x4.mul(s, u), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), f), v = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)), v = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), v), v = SIMD.Float32x4.swizzle(v, 2, 3, 0, 1), c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), f), d = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(u, c)), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), c = SIMD.Float32x4.mul(a, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), d), v = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), v), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), d), v = SIMD.Float32x4.sub(v, SIMD.Float32x4.mul(u, c)), c = SIMD.Float32x4.mul(a, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(u, c)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), d), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(s, c)), c = SIMD.Float32x4.mul(a, u), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), h), v = SIMD.Float32x4.sub(v, SIMD.Float32x4.mul(s, c)), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, c)), v = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), v), SIMD.Float32x4.store(e, 0, f), SIMD.Float32x4.store(e, 4, h), SIMD.Float32x4.store(e, 8, d), SIMD.Float32x4.store(e, 12, v), e }, r.adjoint = i.USE_SIMD ? r.SIMD.adjoint : r.scalar.adjoint, r.determinant = function(e) { var t = e[0],
            n = e[1],
            i = e[2],
            r = e[3],
            o = e[4],
            a = e[5],
            s = e[6],
            u = e[7],
            l = e[8],
            c = e[9],
            f = e[10],
            h = e[11],
            d = e[12],
            v = e[13],
            p = e[14],
            m = e[15],
            _ = t * a - n * o,
            g = t * s - i * o,
            x = t * u - r * o,
            y = n * s - i * a,
            b = n * u - r * a,
            M = i * u - r * s,
            w = l * v - c * d,
            E = l * p - f * d,
            S = l * m - h * d,
            T = c * p - f * v,
            P = c * m - h * v,
            A = f * m - h * p; return _ * A - g * P + x * T + y * S - b * E + M * w }, r.SIMD.multiply = function(e, t, n) { var i = SIMD.Float32x4.load(t, 0),
            r = SIMD.Float32x4.load(t, 4),
            o = SIMD.Float32x4.load(t, 8),
            a = SIMD.Float32x4.load(t, 12),
            s = SIMD.Float32x4.load(n, 0),
            u = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(e, 0, u); var l = SIMD.Float32x4.load(n, 4),
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(e, 4, c); var f = SIMD.Float32x4.load(n, 8),
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(e, 8, h); var d = SIMD.Float32x4.load(n, 12),
            v = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), a)))); return SIMD.Float32x4.store(e, 12, v), e }, r.scalar.multiply = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = t[9],
            d = t[10],
            v = t[11],
            p = t[12],
            m = t[13],
            _ = t[14],
            g = t[15],
            x = n[0],
            y = n[1],
            b = n[2],
            M = n[3]; return e[0] = x * i + y * s + b * f + M * p, e[1] = x * r + y * u + b * h + M * m, e[2] = x * o + y * l + b * d + M * _, e[3] = x * a + y * c + b * v + M * g, x = n[4], y = n[5], b = n[6], M = n[7], e[4] = x * i + y * s + b * f + M * p, e[5] = x * r + y * u + b * h + M * m, e[6] = x * o + y * l + b * d + M * _, e[7] = x * a + y * c + b * v + M * g, x = n[8], y = n[9], b = n[10], M = n[11], e[8] = x * i + y * s + b * f + M * p, e[9] = x * r + y * u + b * h + M * m, e[10] = x * o + y * l + b * d + M * _, e[11] = x * a + y * c + b * v + M * g, x = n[12], y = n[13], b = n[14], M = n[15], e[12] = x * i + y * s + b * f + M * p, e[13] = x * r + y * u + b * h + M * m, e[14] = x * o + y * l + b * d + M * _, e[15] = x * a + y * c + b * v + M * g, e }, r.multiply = i.USE_SIMD ? r.SIMD.multiply : r.scalar.multiply, r.mul = r.multiply, r.scalar.translate = function(e, t, n) { var i, r, o, a, s, u, l, c, f, h, d, v, p = n[0],
            m = n[1],
            _ = n[2]; return t === e ? (e[12] = t[0] * p + t[4] * m + t[8] * _ + t[12], e[13] = t[1] * p + t[5] * m + t[9] * _ + t[13], e[14] = t[2] * p + t[6] * m + t[10] * _ + t[14], e[15] = t[3] * p + t[7] * m + t[11] * _ + t[15]) : (i = t[0], r = t[1], o = t[2], a = t[3], s = t[4], u = t[5], l = t[6], c = t[7], f = t[8], h = t[9], d = t[10], v = t[11], e[0] = i, e[1] = r, e[2] = o, e[3] = a, e[4] = s, e[5] = u, e[6] = l, e[7] = c, e[8] = f, e[9] = h, e[10] = d, e[11] = v, e[12] = i * p + s * m + f * _ + t[12], e[13] = r * p + u * m + h * _ + t[13], e[14] = o * p + l * m + d * _ + t[14], e[15] = a * p + c * m + v * _ + t[15]), e }, r.SIMD.translate = function(e, t, n) { var i = SIMD.Float32x4.load(t, 0),
            r = SIMD.Float32x4.load(t, 4),
            o = SIMD.Float32x4.load(t, 8),
            a = SIMD.Float32x4.load(t, 12),
            s = SIMD.Float32x4(n[0], n[1], n[2], 0);
        t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11]), i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0)), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2)); var u = SIMD.Float32x4.add(i, SIMD.Float32x4.add(r, SIMD.Float32x4.add(o, a))); return SIMD.Float32x4.store(e, 12, u), e }, r.translate = i.USE_SIMD ? r.SIMD.translate : r.scalar.translate, r.scalar.scale = function(e, t, n) { var i = n[0],
            r = n[1],
            o = n[2]; return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * o, e[9] = t[9] * o, e[10] = t[10] * o, e[11] = t[11] * o, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e }, r.SIMD.scale = function(e, t, n) { var i, r, o, a = SIMD.Float32x4(n[0], n[1], n[2], 0); return i = SIMD.Float32x4.load(t, 0), SIMD.Float32x4.store(e, 0, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0))), r = SIMD.Float32x4.load(t, 4), SIMD.Float32x4.store(e, 4, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1))), o = SIMD.Float32x4.load(t, 8), SIMD.Float32x4.store(e, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2))), e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e }, r.scale = i.USE_SIMD ? r.SIMD.scale : r.scalar.scale, r.rotate = function(e, t, n, r) { var o, a, s, u, l, c, f, h, d, v, p, m, _, g, x, y, b, M, w, E, S, T, P, A, C = r[0],
            I = r[1],
            D = r[2],
            F = Math.sqrt(C * C + I * I + D * D); return Math.abs(F) < i.EPSILON ? null : (F = 1 / F, C *= F, I *= F, D *= F, o = Math.sin(n), a = Math.cos(n), s = 1 - a, u = t[0], l = t[1], c = t[2], f = t[3], h = t[4], d = t[5], v = t[6], p = t[7], m = t[8], _ = t[9], g = t[10], x = t[11], y = C * C * s + a, b = I * C * s + D * o, M = D * C * s - I * o, w = C * I * s - D * o, E = I * I * s + a, S = D * I * s + C * o, T = C * D * s + I * o, P = I * D * s - C * o, A = D * D * s + a, e[0] = u * y + h * b + m * M, e[1] = l * y + d * b + _ * M, e[2] = c * y + v * b + g * M, e[3] = f * y + p * b + x * M, e[4] = u * w + h * E + m * S, e[5] = l * w + d * E + _ * S, e[6] = c * w + v * E + g * S, e[7] = f * w + p * E + x * S, e[8] = u * T + h * P + m * A, e[9] = l * T + d * P + _ * A, e[10] = c * T + v * P + g * A, e[11] = f * T + p * P + x * A, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e) }, r.scalar.rotateX = function(e, t, n) { var i = Math.sin(n),
            r = Math.cos(n),
            o = t[4],
            a = t[5],
            s = t[6],
            u = t[7],
            l = t[8],
            c = t[9],
            f = t[10],
            h = t[11]; return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = o * r + l * i, e[5] = a * r + c * i, e[6] = s * r + f * i, e[7] = u * r + h * i, e[8] = l * r - o * i, e[9] = c * r - a * i, e[10] = f * r - s * i, e[11] = h * r - u * i, e }, r.SIMD.rotateX = function(e, t, n) { var i = SIMD.Float32x4.splat(Math.sin(n)),
            r = SIMD.Float32x4.splat(Math.cos(n));
        t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]); var o = SIMD.Float32x4.load(t, 4),
            a = SIMD.Float32x4.load(t, 8); return SIMD.Float32x4.store(e, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), SIMD.Float32x4.store(e, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, r), SIMD.Float32x4.mul(o, i))), e }, r.rotateX = i.USE_SIMD ? r.SIMD.rotateX : r.scalar.rotateX, r.scalar.rotateY = function(e, t, n) { var i = Math.sin(n),
            r = Math.cos(n),
            o = t[0],
            a = t[1],
            s = t[2],
            u = t[3],
            l = t[8],
            c = t[9],
            f = t[10],
            h = t[11]; return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = o * r - l * i, e[1] = a * r - c * i, e[2] = s * r - f * i, e[3] = u * r - h * i, e[8] = o * i + l * r, e[9] = a * i + c * r, e[10] = s * i + f * r, e[11] = u * i + h * r, e }, r.SIMD.rotateY = function(e, t, n) { var i = SIMD.Float32x4.splat(Math.sin(n)),
            r = SIMD.Float32x4.splat(Math.cos(n));
        t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]); var o = SIMD.Float32x4.load(t, 0),
            a = SIMD.Float32x4.load(t, 8); return SIMD.Float32x4.store(e, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), SIMD.Float32x4.store(e, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), e }, r.rotateY = i.USE_SIMD ? r.SIMD.rotateY : r.scalar.rotateY, r.scalar.rotateZ = function(e, t, n) { var i = Math.sin(n),
            r = Math.cos(n),
            o = t[0],
            a = t[1],
            s = t[2],
            u = t[3],
            l = t[4],
            c = t[5],
            f = t[6],
            h = t[7]; return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = o * r + l * i, e[1] = a * r + c * i, e[2] = s * r + f * i, e[3] = u * r + h * i, e[4] = l * r - o * i, e[5] = c * r - a * i, e[6] = f * r - s * i, e[7] = h * r - u * i, e }, r.SIMD.rotateZ = function(e, t, n) { var i = SIMD.Float32x4.splat(Math.sin(n)),
            r = SIMD.Float32x4.splat(Math.cos(n));
        t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]); var o = SIMD.Float32x4.load(t, 0),
            a = SIMD.Float32x4.load(t, 4); return SIMD.Float32x4.store(e, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), SIMD.Float32x4.store(e, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, r), SIMD.Float32x4.mul(o, i))), e }, r.rotateZ = i.USE_SIMD ? r.SIMD.rotateZ : r.scalar.rotateZ, r.fromTranslation = function(e, t) { return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e }, r.fromScaling = function(e, t) { return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.fromRotation = function(e, t, n) { var r, o, a, s = n[0],
            u = n[1],
            l = n[2],
            c = Math.sqrt(s * s + u * u + l * l); return Math.abs(c) < i.EPSILON ? null : (c = 1 / c, s *= c, u *= c, l *= c, r = Math.sin(t), o = Math.cos(t), a = 1 - o, e[0] = s * s * a + o, e[1] = u * s * a + l * r, e[2] = l * s * a - u * r, e[3] = 0, e[4] = s * u * a - l * r, e[5] = u * u * a + o, e[6] = l * u * a + s * r, e[7] = 0, e[8] = s * l * a + u * r, e[9] = u * l * a - s * r, e[10] = l * l * a + o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e) }, r.fromXRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.fromYRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = i, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.fromZRotation = function(e, t) { var n = Math.sin(t),
            i = Math.cos(t); return e[0] = i, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.fromRotationTranslation = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = i + i,
            u = r + r,
            l = o + o,
            c = i * s,
            f = i * u,
            h = i * l,
            d = r * u,
            v = r * l,
            p = o * l,
            m = a * s,
            _ = a * u,
            g = a * l; return e[0] = 1 - (d + p), e[1] = f + g, e[2] = h - _, e[3] = 0, e[4] = f - g, e[5] = 1 - (c + p), e[6] = v + m, e[7] = 0, e[8] = h + _, e[9] = v - m, e[10] = 1 - (c + d), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e }, r.getTranslation = function(e, t) { return e[0] = t[12], e[1] = t[13], e[2] = t[14], e }, r.getRotation = function(e, t) { var n = t[0] + t[5] + t[10],
            i = 0; return n > 0 ? (i = 2 * Math.sqrt(n + 1), e[3] = .25 * i, e[0] = (t[6] - t[9]) / i, e[1] = (t[8] - t[2]) / i, e[2] = (t[1] - t[4]) / i) : t[0] > t[5] & t[0] > t[10] ? (i = 2 * Math.sqrt(1 + t[0] - t[5] - t[10]), e[3] = (t[6] - t[9]) / i, e[0] = .25 * i, e[1] = (t[1] + t[4]) / i, e[2] = (t[8] + t[2]) / i) : t[5] > t[10] ? (i = 2 * Math.sqrt(1 + t[5] - t[0] - t[10]), e[3] = (t[8] - t[2]) / i, e[0] = (t[1] + t[4]) / i, e[1] = .25 * i, e[2] = (t[6] + t[9]) / i) : (i = 2 * Math.sqrt(1 + t[10] - t[0] - t[5]), e[3] = (t[1] - t[4]) / i, e[0] = (t[8] + t[2]) / i, e[1] = (t[6] + t[9]) / i, e[2] = .25 * i), e }, r.fromRotationTranslationScale = function(e, t, n, i) { var r = t[0],
            o = t[1],
            a = t[2],
            s = t[3],
            u = r + r,
            l = o + o,
            c = a + a,
            f = r * u,
            h = r * l,
            d = r * c,
            v = o * l,
            p = o * c,
            m = a * c,
            _ = s * u,
            g = s * l,
            x = s * c,
            y = i[0],
            b = i[1],
            M = i[2]; return e[0] = (1 - (v + m)) * y, e[1] = (h + x) * y, e[2] = (d - g) * y, e[3] = 0, e[4] = (h - x) * b, e[5] = (1 - (f + m)) * b, e[6] = (p + _) * b, e[7] = 0, e[8] = (d + g) * M, e[9] = (p - _) * M, e[10] = (1 - (f + v)) * M, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e }, r.fromRotationTranslationScaleOrigin = function(e, t, n, i, r) { var o = t[0],
            a = t[1],
            s = t[2],
            u = t[3],
            l = o + o,
            c = a + a,
            f = s + s,
            h = o * l,
            d = o * c,
            v = o * f,
            p = a * c,
            m = a * f,
            _ = s * f,
            g = u * l,
            x = u * c,
            y = u * f,
            b = i[0],
            M = i[1],
            w = i[2],
            E = r[0],
            S = r[1],
            T = r[2]; return e[0] = (1 - (p + _)) * b, e[1] = (d + y) * b, e[2] = (v - x) * b, e[3] = 0, e[4] = (d - y) * M, e[5] = (1 - (h + _)) * M, e[6] = (m + g) * M, e[7] = 0, e[8] = (v + x) * w, e[9] = (m - g) * w, e[10] = (1 - (h + p)) * w, e[11] = 0, e[12] = n[0] + E - (e[0] * E + e[4] * S + e[8] * T), e[13] = n[1] + S - (e[1] * E + e[5] * S + e[9] * T), e[14] = n[2] + T - (e[2] * E + e[6] * S + e[10] * T), e[15] = 1, e }, r.fromQuat = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = n + n,
            s = i + i,
            u = r + r,
            l = n * a,
            c = i * a,
            f = i * s,
            h = r * a,
            d = r * s,
            v = r * u,
            p = o * a,
            m = o * s,
            _ = o * u; return e[0] = 1 - f - v, e[1] = c + _, e[2] = h - m, e[3] = 0, e[4] = c - _, e[5] = 1 - l - v, e[6] = d + p, e[7] = 0, e[8] = h + m, e[9] = d - p, e[10] = 1 - l - f, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e }, r.frustum = function(e, t, n, i, r, o, a) { var s = 1 / (n - t),
            u = 1 / (r - i),
            l = 1 / (o - a); return e[0] = 2 * o * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * o * u, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (r + i) * u, e[10] = (a + o) * l, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = a * o * 2 * l, e[15] = 0, e }, r.perspective = function(e, t, n, i, r) { var o = 1 / Math.tan(t / 2),
            a = 1 / (i - r); return e[0] = o / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (r + i) * a, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * r * i * a, e[15] = 0, e }, r.perspectiveFromFieldOfView = function(e, t, n, i) { var r = Math.tan(t.upDegrees * Math.PI / 180),
            o = Math.tan(t.downDegrees * Math.PI / 180),
            a = Math.tan(t.leftDegrees * Math.PI / 180),
            s = Math.tan(t.rightDegrees * Math.PI / 180),
            u = 2 / (a + s),
            l = 2 / (r + o); return e[0] = u, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = l, e[6] = 0, e[7] = 0, e[8] = -((a - s) * u * .5), e[9] = (r - o) * l * .5, e[10] = i / (n - i), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = i * n / (n - i), e[15] = 0, e }, r.ortho = function(e, t, n, i, r, o, a) { var s = 1 / (t - n),
            u = 1 / (i - r),
            l = 1 / (o - a); return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * u, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + n) * s, e[13] = (r + i) * u, e[14] = (a + o) * l, e[15] = 1, e }, r.lookAt = function(e, t, n, o) { var a, s, u, l, c, f, h, d, v, p, m = t[0],
            _ = t[1],
            g = t[2],
            x = o[0],
            y = o[1],
            b = o[2],
            M = n[0],
            w = n[1],
            E = n[2]; return Math.abs(m - M) < i.EPSILON && Math.abs(_ - w) < i.EPSILON && Math.abs(g - E) < i.EPSILON ? r.identity(e) : (h = m - M, d = _ - w, v = g - E, p = 1 / Math.sqrt(h * h + d * d + v * v), h *= p, d *= p, v *= p, a = y * v - b * d, s = b * h - x * v, u = x * d - y * h, p = Math.sqrt(a * a + s * s + u * u), p ? (p = 1 / p, a *= p, s *= p, u *= p) : (a = 0, s = 0, u = 0), l = d * u - v * s, c = v * a - h * u, f = h * s - d * a, p = Math.sqrt(l * l + c * c + f * f), p ? (p = 1 / p, l *= p, c *= p, f *= p) : (l = 0, c = 0, f = 0), e[0] = a, e[1] = l, e[2] = h, e[3] = 0, e[4] = s, e[5] = c, e[6] = d, e[7] = 0, e[8] = u, e[9] = f, e[10] = v, e[11] = 0, e[12] = -(a * m + s * _ + u * g), e[13] = -(l * m + c * _ + f * g), e[14] = -(h * m + d * _ + v * g), e[15] = 1, e) }, r.str = function(e) { return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")" }, r.frob = function(e) { return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2)) }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e }, r.sub = r.subtract, r.multiplyScalar = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e }, r.multiplyScalarAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e[2] = t[2] + n[2] * i, e[3] = t[3] + n[3] * i, e[4] = t[4] + n[4] * i, e[5] = t[5] + n[5] * i, e[6] = t[6] + n[6] * i, e[7] = t[7] + n[7] * i, e[8] = t[8] + n[8] * i, e[9] = t[9] + n[9] * i, e[10] = t[10] + n[10] * i, e[11] = t[11] + n[11] * i, e[12] = t[12] + n[12] * i, e[13] = t[13] + n[13] * i, e[14] = t[14] + n[14] * i, e[15] = t[15] + n[15] * i, e }, r.exactEquals = function(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
    }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = e[9],
            d = e[10],
            v = e[11],
            p = e[12],
            m = e[13],
            _ = e[14],
            g = e[15],
            x = t[0],
            y = t[1],
            b = t[2],
            M = t[3],
            w = t[4],
            E = t[5],
            S = t[6],
            T = t[7],
            P = t[8],
            A = t[9],
            C = t[10],
            I = t[11],
            D = t[12],
            F = t[13],
            k = t[14],
            L = t[15]; return Math.abs(n - x) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(x)) && Math.abs(r - y) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(y)) && Math.abs(o - b) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(a - M) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(M)) && Math.abs(s - w) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(w)) && Math.abs(u - E) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(l - S) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(c - T) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(f - P) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(h - A) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(A)) && Math.abs(d - C) <= i.EPSILON * Math.max(1, Math.abs(d), Math.abs(C)) && Math.abs(v - I) <= i.EPSILON * Math.max(1, Math.abs(v), Math.abs(I)) && Math.abs(p - D) <= i.EPSILON * Math.max(1, Math.abs(p), Math.abs(D)) && Math.abs(m - F) <= i.EPSILON * Math.max(1, Math.abs(m), Math.abs(F)) && Math.abs(_ - k) <= i.EPSILON * Math.max(1, Math.abs(_), Math.abs(k)) && Math.abs(g - L) <= i.EPSILON * Math.max(1, Math.abs(g), Math.abs(L)) }, e.exports = r
}, function(e, t, n) { var i = n(15),
        r = n(96),
        o = n(97),
        a = n(98),
        s = {};
    s.create = function() { var e = new i.ARRAY_TYPE(4); return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e }, s.rotationTo = function() { var e = o.create(),
            t = o.fromValues(1, 0, 0),
            n = o.fromValues(0, 1, 0); return function(i, r, a) { var u = o.dot(r, a); return -.999999 > u ? (o.cross(e, t, r), o.length(e) < 1e-6 && o.cross(e, n, r), o.normalize(e, e), s.setAxisAngle(i, e, Math.PI), i) : u > .999999 ? (i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 1, i) : (o.cross(e, r, a), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = 1 + u, s.normalize(i, i)) } }(), s.setAxes = function() { var e = r.create(); return function(t, n, i, r) { return e[0] = i[0], e[3] = i[1], e[6] = i[2], e[1] = r[0], e[4] = r[1], e[7] = r[2], e[2] = -n[0], e[5] = -n[1], e[8] = -n[2], s.normalize(t, s.fromMat3(t, e)) } }(), s.clone = a.clone, s.fromValues = a.fromValues, s.copy = a.copy, s.set = a.set, s.identity = function(e) { return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e }, s.setAxisAngle = function(e, t, n) { n = .5 * n; var i = Math.sin(n); return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = Math.cos(n), e }, s.getAxisAngle = function(e, t) { var n = 2 * Math.acos(t[3]),
            i = Math.sin(n / 2); return 0 != i ? (e[0] = t[0] / i, e[1] = t[1] / i, e[2] = t[2] / i) : (e[0] = 1, e[1] = 0, e[2] = 0), n }, s.add = a.add, s.multiply = function(e, t, n) { var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = n[0],
            u = n[1],
            l = n[2],
            c = n[3]; return e[0] = i * c + a * s + r * l - o * u, e[1] = r * c + a * u + o * s - i * l, e[2] = o * c + a * l + i * u - r * s, e[3] = a * c - i * s - r * u - o * l, e }, s.mul = s.multiply, s.scale = a.scale, s.rotateX = function(e, t, n) { n *= .5; var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = Math.sin(n),
            u = Math.cos(n); return e[0] = i * u + a * s, e[1] = r * u + o * s, e[2] = o * u - r * s, e[3] = a * u - i * s, e }, s.rotateY = function(e, t, n) { n *= .5; var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = Math.sin(n),
            u = Math.cos(n); return e[0] = i * u - o * s, e[1] = r * u + a * s, e[2] = o * u + i * s, e[3] = a * u - r * s, e }, s.rotateZ = function(e, t, n) { n *= .5; var i = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            s = Math.sin(n),
            u = Math.cos(n); return e[0] = i * u + r * s, e[1] = r * u - i * s, e[2] = o * u + a * s, e[3] = a * u - o * s, e }, s.calculateW = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2]; return e[0] = n, e[1] = i, e[2] = r, e[3] = Math.sqrt(Math.abs(1 - n * n - i * i - r * r)), e }, s.dot = a.dot, s.lerp = a.lerp, s.slerp = function(e, t, n, i) { var r, o, a, s, u, l = t[0],
            c = t[1],
            f = t[2],
            h = t[3],
            d = n[0],
            v = n[1],
            p = n[2],
            m = n[3]; return o = l * d + c * v + f * p + h * m, 0 > o && (o = -o, d = -d, v = -v, p = -p, m = -m), 1 - o > 1e-6 ? (r = Math.acos(o), a = Math.sin(r), s = Math.sin((1 - i) * r) / a, u = Math.sin(i * r) / a) : (s = 1 - i, u = i), e[0] = s * l + u * d, e[1] = s * c + u * v, e[2] = s * f + u * p, e[3] = s * h + u * m, e }, s.sqlerp = function() { var e = s.create(),
            t = s.create(); return function(n, i, r, o, a, u) { return s.slerp(e, i, a, u), s.slerp(t, r, o, u), s.slerp(n, e, t, 2 * u * (1 - u)), n } }(), s.invert = function(e, t) { var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3],
            a = n * n + i * i + r * r + o * o,
            s = a ? 1 / a : 0; return e[0] = -n * s, e[1] = -i * s, e[2] = -r * s, e[3] = o * s, e }, s.conjugate = function(e, t) { return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e }, s.length = a.length, s.len = s.length, s.squaredLength = a.squaredLength, s.sqrLen = s.squaredLength, s.normalize = a.normalize, s.fromMat3 = function(e, t) { var n, i = t[0] + t[4] + t[8]; if (i > 0) n = Math.sqrt(i + 1), e[3] = .5 * n, n = .5 / n, e[0] = (t[5] - t[7]) * n, e[1] = (t[6] - t[2]) * n, e[2] = (t[1] - t[3]) * n;
        else { var r = 0;
            t[4] > t[0] && (r = 1), t[8] > t[3 * r + r] && (r = 2); var o = (r + 1) % 3,
                a = (r + 2) % 3;
            n = Math.sqrt(t[3 * r + r] - t[3 * o + o] - t[3 * a + a] + 1), e[r] = .5 * n, n = .5 / n, e[3] = (t[3 * o + a] - t[3 * a + o]) * n, e[o] = (t[3 * o + r] + t[3 * r + o]) * n, e[a] = (t[3 * a + r] + t[3 * r + a]) * n } return e }, s.str = function(e) { return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")" }, s.exactEquals = a.exactEquals, s.equals = a.equals, e.exports = s }, function(e, t, n) { var i = n(15),
        r = {};
    r.create = function() { var e = new i.ARRAY_TYPE(2); return e[0] = 0, e[1] = 0, e }, r.clone = function(e) { var t = new i.ARRAY_TYPE(2); return t[0] = e[0], t[1] = e[1], t }, r.fromValues = function(e, t) { var n = new i.ARRAY_TYPE(2); return n[0] = e, n[1] = t, n }, r.copy = function(e, t) { return e[0] = t[0], e[1] = t[1], e }, r.set = function(e, t, n) { return e[0] = t, e[1] = n, e }, r.add = function(e, t, n) { return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e }, r.subtract = function(e, t, n) { return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e }, r.sub = r.subtract, r.multiply = function(e, t, n) { return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e }, r.mul = r.multiply, r.divide = function(e, t, n) { return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e }, r.div = r.divide, r.ceil = function(e, t) { return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e }, r.floor = function(e, t) { return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e }, r.min = function(e, t, n) { return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e }, r.max = function(e, t, n) { return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e }, r.round = function(e, t) { return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e }, r.scale = function(e, t, n) { return e[0] = t[0] * n, e[1] = t[1] * n, e }, r.scaleAndAdd = function(e, t, n, i) { return e[0] = t[0] + n[0] * i, e[1] = t[1] + n[1] * i, e }, r.distance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1]; return Math.sqrt(n * n + i * i) }, r.dist = r.distance, r.squaredDistance = function(e, t) { var n = t[0] - e[0],
            i = t[1] - e[1]; return n * n + i * i }, r.sqrDist = r.squaredDistance, r.length = function(e) { var t = e[0],
            n = e[1]; return Math.sqrt(t * t + n * n) }, r.len = r.length, r.squaredLength = function(e) { var t = e[0],
            n = e[1]; return t * t + n * n }, r.sqrLen = r.squaredLength, r.negate = function(e, t) { return e[0] = -t[0], e[1] = -t[1], e }, r.inverse = function(e, t) { return e[0] = 1 / t[0], e[1] = 1 / t[1], e }, r.normalize = function(e, t) { var n = t[0],
            i = t[1],
            r = n * n + i * i; return r > 0 && (r = 1 / Math.sqrt(r), e[0] = t[0] * r, e[1] = t[1] * r), e }, r.dot = function(e, t) { return e[0] * t[0] + e[1] * t[1] }, r.cross = function(e, t, n) { var i = t[0] * n[1] - t[1] * n[0]; return e[0] = e[1] = 0, e[2] = i, e }, r.lerp = function(e, t, n, i) { var r = t[0],
            o = t[1]; return e[0] = r + i * (n[0] - r), e[1] = o + i * (n[1] - o), e }, r.random = function(e, t) { t = t || 1; var n = 2 * i.RANDOM() * Math.PI; return e[0] = Math.cos(n) * t, e[1] = Math.sin(n) * t, e }, r.transformMat2 = function(e, t, n) { var i = t[0],
            r = t[1]; return e[0] = n[0] * i + n[2] * r, e[1] = n[1] * i + n[3] * r, e }, r.transformMat2d = function(e, t, n) { var i = t[0],
            r = t[1]; return e[0] = n[0] * i + n[2] * r + n[4], e[1] = n[1] * i + n[3] * r + n[5], e }, r.transformMat3 = function(e, t, n) { var i = t[0],
            r = t[1]; return e[0] = n[0] * i + n[3] * r + n[6], e[1] = n[1] * i + n[4] * r + n[7], e }, r.transformMat4 = function(e, t, n) { var i = t[0],
            r = t[1]; return e[0] = n[0] * i + n[4] * r + n[12], e[1] = n[1] * i + n[5] * r + n[13], e }, r.forEach = function() { var e = r.create(); return function(t, n, i, r, o, a) { var s, u; for (n || (n = 2), i || (i = 0), u = r ? Math.min(r * n + i, t.length) : t.length, s = i; u > s; s += n) e[0] = t[s], e[1] = t[s + 1], o(e, e, a), t[s] = e[0], t[s + 1] = e[1]; return t } }(), r.str = function(e) { return "vec2(" + e[0] + ", " + e[1] + ")" }, r.exactEquals = function(e, t) { return e[0] === t[0] && e[1] === t[1] }, r.equals = function(e, t) { var n = e[0],
            r = e[1],
            o = t[0],
            a = t[1]; return Math.abs(n - o) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) }, e.exports = r }, function(e, t) {
    (function(t) { "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : e.exports = {} }).call(t, function() { return this }()) }, function(e, t) { e.exports = function() { throw new Error("It appears that you're using glslify in browserify without its transform applied. Make sure that you've set up glslify as a source transform: https://github.com/substack/node-browserify#browserifytransform") } }, function(e, t) {
    function n(e) { var t = new Int32Array(e, 0, m); if (t[_] !== o) throw new Error("Invalid magic number in DDS header"); if (!t[w] & s) throw new Error("Unsupported format, must contain a FourCC code"); var n, i, T = t[E]; switch (T) {
            case u:
                n = 8, i = "dxt1"; break;
            case l:
                n = 16, i = "dxt3"; break;
            case c:
                n = 16, i = "dxt5"; break;
            case h:
                i = "rgba32f"; break;
            case f:
                var P = new Uint32Array(e.slice(128, 148));
                i = P[0]; var A = P[1];
                P[2], P[3], P[4]; if (A !== v || i !== p) throw new Error("Unsupported DX10 texture format " + i);
                i = "rgba32f"; break;
            default:
                throw new Error("Unsupported FourCC code: " + r(T)) } var C = t[x],
            I = 1;
        C & a && (I = Math.max(1, t[M])); var D = !1,
            F = t[S];
        F & d && (D = !0); var k, L = t[b],
            R = t[y],
            O = t[g] + 4,
            N = L,
            V = R,
            z = []; if (T === f && (O += 20), D)
            for (var B = 0; 6 > B; B++) { if ("rgba32f" !== i) throw new Error("Only RGBA32f cubemaps are supported"); var G = 16;
                L = N, R = V; for (var U = Math.log(L) / Math.log(2) + 1, j = 0; U > j; j++) k = L * R * G, z.push({ offset: O, length: k, shape: [L, R] }), I > j && (O += k), L = Math.floor(L / 2), R = Math.floor(R / 2) } else
                for (var j = 0; I > j; j++) k = Math.max(4, L) / 4 * Math.max(4, R) / 4 * n, z.push({ offset: O, length: k, shape: [L, R] }), O += k, L = Math.floor(L / 2), R = Math.floor(R / 2); return { shape: [N, V], images: z, format: i, flags: C, cubemap: D } }

    function i(e) { return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24) }

    function r(e) { return String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255) } var o = 542327876,
        a = 131072,
        s = 4,
        u = i("DXT1"),
        l = i("DXT3"),
        c = i("DXT5"),
        f = i("DX10"),
        h = 116,
        d = 512,
        v = 3,
        p = 2,
        m = 31,
        _ = 0,
        g = 1,
        x = 2,
        y = 3,
        b = 4,
        M = 7,
        w = 20,
        E = 21,
        S = 28;
    e.exports = n }, function(e, t) { "use strict";

    function n(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
    e.exports = function(e, t, i, r) { t = t || "&", i = i || "="; var o = {}; if ("string" != typeof e || 0 === e.length) return o; var a = /\+/g;
        e = e.split(t); var s = 1e3;
        r && "number" == typeof r.maxKeys && (s = r.maxKeys); var u = e.length;
        s > 0 && u > s && (u = s); for (var l = 0; u > l; ++l) { var c, f, h, d, v = e[l].replace(a, "%20"),
                p = v.indexOf(i);
            p >= 0 ? (c = v.substr(0, p), f = v.substr(p + 1)) : (c = v, f = ""), h = decodeURIComponent(c), d = decodeURIComponent(f), n(o, h) ? Array.isArray(o[h]) ? o[h].push(d) : o[h] = [o[h], d] : o[h] = d } return o } }, function(e, t) { "use strict"; var n = function(e) { switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return "" } };
    e.exports = function(e, t, i, r) { return t = t || "&", i = i || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function(r) { var o = encodeURIComponent(n(r)) + i; return Array.isArray(e[r]) ? e[r].map(function(e) { return o + encodeURIComponent(n(e)) }).join(t) : o + encodeURIComponent(n(e[r])) }).join(t) : r ? encodeURIComponent(n(r)) + i + encodeURIComponent(n(e)) : "" } }, function(e, t, n) { "use strict";
    t.decode = t.parse = n(234), t.encode = t.stringify = n(235) }, function(e, t) { e.exports = "// FXAA.frag\n\n#define SHADER_NAME FRAGMENT_FXAA\n\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float uWidth;\nuniform float uHeight;\n\n\nfloat FXAA_SUBPIX_SHIFT = 1.0/4.0;\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\n\n\nvec4 applyFXAA(vec2 fragCoord, sampler2D tex) {\n    vec4 color;\n    vec2 inverseVP = vec2(1.0 / uWidth, 1.0 / uHeight);\n    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbM  = texture2D(tex, fragCoord  * inverseVP).xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    //return texture2D(tex, fragCoord);\n    //return vec4(fragCoord, 0.0, 1.0);\n    //return vec4(rgbM, 1.0);\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, 1.0);\n    else\n        color = vec4(rgbB, 1.0);\n    return color;\n}\n\nvoid main(void) {\n	vec4 posPos = vec4(.0);\n\n	vec2 rcpFrame = vec2(1.0/uWidth, 1.0/uHeight);\n\n 	posPos.xy = vTextureCoord.xy;\n 	posPos.zw = vTextureCoord.xy - (rcpFrame * (0.5 + FXAA_SUBPIX_SHIFT));\n\n 	vec4 color = applyFXAA(posPos.xy * vec2(uWidth, uHeight), texture);\n 	gl_FragColor = color;\n 	// vec3 color = orgColor.rgb;\n}" }, function(e, t) { e.exports = "// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	// vec3 color = vNormal;\n	vec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}" }, function(e, t) { e.exports = "// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}" }, function(e, t) { e.exports = "// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n\n    vNormal = aNormal;\n}" }, function(e, t) { e.exports = "// reflection.vert\n\n#define SHADER_NAME PBR_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nuniform vec3 uPosition;\nuniform vec3 uScale;\n\nvarying vec2 vTextureCoord;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\n\nvoid main(void) {\n	vec3 position 			= aVertexPosition * uScale + uPosition;\n	vec4 worldSpacePosition	= uModelMatrix * vec4(position, 1.0);\n    vec4 viewSpacePosition	= uViewMatrix * worldSpacePosition;\n	\n    vNormal					= uNormalMatrix * aNormal;\n    vPosition				= viewSpacePosition.xyz;\n	vWsPosition				= worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace	= viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition			= -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	vWsNormal				= normalize( uModelViewMatrixInverse * vNormal );\n	\n    gl_Position				= uProjectionMatrix * viewSpacePosition;\n\n	vTextureCoord			= aTextureCoord;\n}\n" }, function(e, t) { e.exports = "// pbrColor.frag\n\n#define SHADER_NAME PBR_COLOR_FRAG\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D 	uAoMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform vec3		uBaseColor;\nuniform float		uRoughness;\nuniform float		uMetallic;\nuniform float		uSpecular;\n\nuniform float		uExposure;\nuniform float		uGamma;\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nvoid main() {\n	vec3 N 				= normalize( vWsNormal );\n	vec3 V 				= normalize( vEyePosition );\n	\n	vec3 color 			= getPbr(N, V, uBaseColor, uRoughness, uMetallic, uSpecular);\n\n	vec3 ao 			= texture2D(uAoMap, vTextureCoord).rgb;\n	color 				*= ao;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	// output the fragment color\n    gl_FragColor		= vec4( color, 1.0 );\n\n}\n\n" }, function(e, t) { e.exports = "// pbrTexture.frag\n\n#define SHADER_NAME PBR_TEXTURE_FRAG\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D 	uAoMap;\nuniform sampler2D 	uColorMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform float		uRoughness;\nuniform float		uMetallic;\nuniform float		uSpecular;\n\nuniform float		uExposure;\nuniform float		uGamma;\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nvoid main() {\n	vec3 N 				= normalize( vWsNormal );\n	vec3 V 				= normalize( vEyePosition );\n	vec3 baseColor		= texture2D( uColorMap, vTextureCoord).rgb;\n	\n	vec3 color 			= getPbr(N, V, baseColor, uRoughness, uMetallic, uSpecular);\n\n	vec3 ao 			= texture2D(uAoMap, vTextureCoord).rgb;\n	color 				*= ao;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	// output the fragment color\n    gl_FragColor		= vec4( color, 1.0 );\n\n}\n\n" }, function(e, t) { e.exports = "// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	mat4 matView = uViewMatrix;\n	matView[3][0] = 0.0;\n	matView[3][1] = 0.0;\n	matView[3][2] = 0.0;\n	\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}" }, function(e, t) { e.exports = "// eye.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float uOpacity;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\n#define center vec2(.5)\n\nvoid main(void) {\n\n	float d = min(distance(center, vTextureCoord), .5) / .5;\n	d = 1.0 - d;\n\n	d = pow(d, 2.25);\n\n\n    gl_FragColor = vec4(vec3(d), 1.0);\n    gl_FragColor *= uOpacity;\n}\n" }, function(e, t) { e.exports = "// filmGrain.frag\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nuniform float timer;\nuniform vec2 uResolution;\n\nconst float permTexUnit = 1.0/256.0;		// Perm texture texel-size\nconst float permTexUnitHalf = 0.5/256.0;	// Half perm texture texel-size\n\nconst float grainamount = 0.1; //grain amount\nbool colored = false; //colored noise?\n\n\n//a random texture generator, but you can also use a pre-computed perturbation texture\nvec4 rnm(in vec2 tc) \n{\n    float noise =  sin(dot(tc + vec2(timer,timer),vec2(12.9898,78.233))) * 43758.5453;\n\n	float noiseR =  fract(noise)*2.0-1.0;\n	float noiseG =  fract(noise*1.2154)*2.0-1.0; \n	float noiseB =  fract(noise*1.3453)*2.0-1.0;\n	float noiseA =  fract(noise*1.3647)*2.0-1.0;\n	\n	return vec4(noiseR,noiseG,noiseB,noiseA);\n}\n\nfloat fade(in float t) {\n	return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\nfloat pnoise3D(in vec3 p)\n{\n	vec3 pi = permTexUnit*floor(p)+permTexUnitHalf; // Integer part, scaled so +1 moves permTexUnit texel\n	// and offset 1/2 texel to sample texel centers\n	vec3 pf = fract(p);     // Fractional part for interpolation\n\n	// Noise contributions from (x=0, y=0), z=0 and z=1\n	float perm00 = rnm(pi.xy).a ;\n	vec3  grad000 = rnm(vec2(perm00, pi.z)).rgb * 4.0 - 1.0;\n	float n000 = dot(grad000, pf);\n	vec3  grad001 = rnm(vec2(perm00, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n	float n001 = dot(grad001, pf - vec3(0.0, 0.0, 1.0));\n\n	// Noise contributions from (x=0, y=1), z=0 and z=1\n	float perm01 = rnm(pi.xy + vec2(0.0, permTexUnit)).a ;\n	vec3  grad010 = rnm(vec2(perm01, pi.z)).rgb * 4.0 - 1.0;\n	float n010 = dot(grad010, pf - vec3(0.0, 1.0, 0.0));\n	vec3  grad011 = rnm(vec2(perm01, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n	float n011 = dot(grad011, pf - vec3(0.0, 1.0, 1.0));\n\n	// Noise contributions from (x=1, y=0), z=0 and z=1\n	float perm10 = rnm(pi.xy + vec2(permTexUnit, 0.0)).a ;\n	vec3  grad100 = rnm(vec2(perm10, pi.z)).rgb * 4.0 - 1.0;\n	float n100 = dot(grad100, pf - vec3(1.0, 0.0, 0.0));\n	vec3  grad101 = rnm(vec2(perm10, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n	float n101 = dot(grad101, pf - vec3(1.0, 0.0, 1.0));\n\n	// Noise contributions from (x=1, y=1), z=0 and z=1\n	float perm11 = rnm(pi.xy + vec2(permTexUnit, permTexUnit)).a ;\n	vec3  grad110 = rnm(vec2(perm11, pi.z)).rgb * 4.0 - 1.0;\n	float n110 = dot(grad110, pf - vec3(1.0, 1.0, 0.0));\n	vec3  grad111 = rnm(vec2(perm11, pi.z + permTexUnit)).rgb * 4.0 - 1.0;\n	float n111 = dot(grad111, pf - vec3(1.0, 1.0, 1.0));\n\n	// Blend contributions along x\n	vec4 n_x = mix(vec4(n000, n001, n010, n011), vec4(n100, n101, n110, n111), fade(pf.x));\n\n	// Blend contributions along y\n	vec2 n_xy = mix(n_x.xy, n_x.zw, fade(pf.y));\n\n	// Blend contributions along z\n	float n_xyz = mix(n_xy.x, n_xy.y, fade(pf.z));\n\n	// We're done, return the final noise value.\n	return n_xyz;\n}\n\nvoid main(void) {\n\n	// float width = uResolution.x;;\n	// float height = uResolution.y;\n\n	// vec3 noise = vec3(pnoise3D(vec3(vTextureCoord*vec2(width,height),0.0)));\n	// if (colored) {\n	// 	noise.g = pnoise3D(vec3(vTextureCoord*vec2(width,height),1.0));\n	// 	noise.b = pnoise3D(vec3(vTextureCoord*vec2(width,height),2.0));\n	// }\n\n //    gl_FragColor = vec4(vec3(noise*grainamount), 1.0);\n\n\n    vec2 uv = vTextureCoord;\n    float strength = 16.0;\n    float x = (uv.x + 4.0 ) * (uv.y + 4.0 ) * (timer * 10.0);\n	vec4 grain = vec4(mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01)-0.005) * strength;\n\n\n	gl_FragColor = grain;\n    \n}" }, function(e, t) { e.exports = "precision highp float;\n#define GLSLIFY 1\n\n\nuniform float alpha;\nuniform float ratio;\nuniform float uTime;\n// uniform float hide;\n// uniform sampler2D texture;\nvarying vec3 vPosition;\nvarying float vCounters;\n// varying float vCounters;\n// varying vec3 vColor;\n// uniform vec2 resolutions;\n\n\nvoid main() {\n\n  vec4 color = vec4(alpha);\n\n  // color *= smoothstep(vPosition.y,vPosition.y * 1.0, 1.);\n	// color *= smoothstep(hide,hide+0.15,1.-vT);\n  // vec4 color = vec4(1.0);\n  // vec4 colorEnd = color;\n\n  // if(colorEnd.a < .01){\n  //   discard;\n  // }\n\n  // colorEnd.a = 1.0;\n  // color *= texture2D( texture, vUV );\n\n  gl_FragColor = color;\n  gl_FragColor.a *= step(vCounters, ratio);\n\n}\n" }, function(e, t) { e.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float direction;\nattribute vec3 aPrevious;\nattribute vec3 aNext;\nattribute float width;\n// attribute vec4 a_offsets;\nattribute float aCounters;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uTime;\nuniform int animated;\n\n\nuniform float thickness;\nuniform float aspect;\n\nvarying vec2 vUV;\nvarying vec3 vPosition;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying float vCounters;\n\nvoid main() {\n\n  // float thickness = .1;\n  int miter = 0;\n\n  vec2 aspectVec = vec2(aspect, 1.0);\n  mat4 projViewModel = uProjectionMatrix * uViewMatrix * uModelMatrix;//projection * view * model;\n\n  vec4 previousProjected = projViewModel * vec4(aPrevious.x, -aPrevious.y, -aPrevious.z, 1.0);\n  vec4 currentProjected = projViewModel * vec4(aVertexPosition.x, -aVertexPosition.y, -aVertexPosition.z, 1.0);\n  vec4 nextProjected = projViewModel * vec4(aNext.x, -aNext.y, -aNext.z, 1.0);\n\n  // vec4 previousProjected = projViewModel * vec4(aPrevious, 1.0);\n  // vec4 currentProjected = projViewModel * vec4(aVertexPosition, 1.0);\n  // vec4 nextProjected = projViewModel * vec4(aNext, 1.0);\n\n  vPosition = currentProjected.xyz;\n  vNormal = aNormal;\n  vUV = aTextureCoord;\n  //get 2D screen space with W divide and aspect correction\n  vec2 currentScreen = currentProjected.xy / currentProjected.w * aspectVec;\n  vec2 previousScreen = previousProjected.xy / previousProjected.w * aspectVec;\n  vec2 nextScreen = nextProjected.xy / nextProjected.w * aspectVec;\n\n  vCounters = aCounters;\n\n  float len = thickness *  sin(width+uTime) * (1.-smoothstep(.9,1.,vUV.x*1.));\n\n\n\n  // float len = thickness *  sin(width+uTime) * (1.-smoothstep(.9,1.,vUV.x*1.));\n  // len *= smoothstep(vUV.x * 2.,vUV.y * 2.+2.,-uTime);;\n\n\n  float orientation = direction;\n\n  //starting point uses (next - current)\n  vColor = vec3(1.0, .0, 0.0);\n  vec2 dir = vec2(0.0);\n  if (currentScreen == previousScreen) {\n    dir = normalize(nextScreen - currentScreen);\n    // vColor = vec3(1.0, 0.0, 0.0);\n  }\n  //ending point uses (current - previous)\n  else if (currentScreen == nextScreen) {\n    dir = normalize(currentScreen - previousScreen);\n    // vColor = vec3(0.0, 1.0, 0.0);\n  }\n  //somewhere in middle, needs a join\n  else {\n    //get directions from (C - B) and (B - A)\n\n    vec2 dirA = normalize((currentScreen - previousScreen));\n    if (miter == 1) {\n      vec2 dirB = normalize((nextScreen - currentScreen));\n      //now compute the miter join normal and length\n      vec2 tangent = normalize(dirA + dirB);\n      vec2 perp = vec2(-dirA.y, dirA.x);\n      vec2 miter = vec2(-tangent.y, tangent.x);\n      dir = tangent;\n      len = thickness / dot(miter, perp);\n    } else {\n      dir = dirA;\n\n    }\n  }\n  vec2 normal = vec2(-dir.y, dir.x);\n  vColor = vec3(normal, 1.0);\n  normal.x /= aspect;\n  normal *= len/2.0;\n\n  vec4 offset =  vec4(normal * orientation, 0.0, 0.0);\n  // vColor = vec3(orientation);\n\n\n\n\n\n\n\n  gl_Position = currentProjected + offset;\n  gl_PointSize = 1.0;\n}\n" }, 248, function(e, t) {
    e.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float direction;\nattribute vec3 aPrevious;\nattribute vec3 aNext;\nattribute float width;\n// attribute vec4 a_offsets;\nattribute float aCounters;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uTime;\nuniform float thickness;\n\n\nuniform float aspect;\n\nvarying vec2 vUV;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying float vCounters;\n\nvoid main() {\n\n  // float thickness = 1. * width;\n  int miter = 0;\n\n  vec2 aspectVec = vec2(aspect, 1.0);\n  mat4 projViewModel = uProjectionMatrix * uViewMatrix * uModelMatrix;//projection * view * model;\n\n  vec4 previousProjected = projViewModel * vec4(aPrevious.x, -aPrevious.y, -aPrevious.z, 1.0);\n  vec4 currentProjected = projViewModel * vec4(aVertexPosition.x, -aVertexPosition.y, -aVertexPosition.z, 1.0);\n  vec4 nextProjected = projViewModel * vec4(aNext.x, -aNext.y, -aNext.z, 1.0);\n\n  // vec4 previousProjected = projViewModel * vec4(aPrevious, 1.0);\n  // vec4 currentProjected = projViewModel * vec4(aVertexPosition, 1.0);\n  // vec4 nextProjected = projViewModel * vec4(aNext, 1.0);\n\n  vNormal = aNormal;\n  vUV = aTextureCoord;\n  //get 2D screen space with W divide and aspect correction\n  vec2 currentScreen = currentProjected.xy / currentProjected.w * aspectVec;\n  vec2 previousScreen = previousProjected.xy / previousProjected.w * aspectVec;\n  vec2 nextScreen = nextProjected.xy / nextProjected.w * aspectVec;\n\n  vCounters = aCounters;\n\n  float len = thickness * width * (1.-smoothstep(.9,1.,vUV.x*1.));\n  // len *= smoothstep(vUV.x*2.,vUV.y*2.+2.,-uTime*2000.);;\n  // len *= smoothstep(vUV.x * 2., vUV.y * 2.+ 1., -uTime*2000.);\n\n  float orientation = direction;\n\n  //starting point uses (next - current)\n  vColor = vec3(1.0, .0, 0.0);\n  vec2 dir = vec2(0.0);\n  if (currentScreen == previousScreen) {\n    dir = normalize(nextScreen - currentScreen);\n    // vColor = vec3(1.0, 0.0, 0.0);\n  }\n  //ending point uses (current - previous)\n  else if (currentScreen == nextScreen) {\n    dir = normalize(currentScreen - previousScreen);\n    // vColor = vec3(0.0, 1.0, 0.0);\n  }\n  //somewhere in middle, needs a join\n  else {\n    //get directions from (C - B) and (B - A)\n\n    vec2 dirA = normalize((currentScreen - previousScreen));\n    if (miter == 1) {\n      vec2 dirB = normalize((nextScreen - currentScreen));\n      //now compute the miter join normal and length\n      vec2 tangent = normalize(dirA + dirB);\n      vec2 perp = vec2(-dirA.y, dirA.x);\n      vec2 miter = vec2(-tangent.y, tangent.x);\n      dir = tangent;\n      len = thickness / dot(miter, perp);\n    } else {\n      dir = dirA;\n\n    }\n  }\n  vec2 normal = vec2(-dir.y, dir.x);\n  vColor = vec3(normal, 1.0);\n  normal.x /= aspect;\n  normal *= len/2.0;\n\n  vec4 offset =  vec4(normal * orientation, 0.0, 0.0);\n  // vColor = vec3(orientation);\n\n\n\n\n\n\n\n  gl_Position = currentProjected + offset;\n  gl_PointSize = 1.0;\n}\n";
}, function(e, t) { e.exports = "// press.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor *= uOpacity;\n}" }, function(e, t) { e.exports = "precision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	vec3 pos = uModelViewMatrixInverse * aVertexPosition;\n	pos.y -= 0.5;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}" }, function(e, t) { e.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 vColor;\nvarying vec3 vPosition;\nvarying vec3 vExtra;\n\nuniform float uClipY;\nuniform float uDir;\nuniform float time;\n\n#define center vec2(.5)\n\nvoid main(void) {\n	if(vPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}\n\n	float dist = distance(gl_PointCoord, vec2(.5));\n\n	if(dist > .5) discard;\n\n	float a = pow(1.0 - dist/.5, 1.5 * ( 1.0 + vExtra.r) + sin(time * 0.2 * vExtra.g) * 0.5);\n\n    gl_FragColor = vColor;\n    gl_FragColor *= a;\n}" }, function(e, t) { e.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float percent;\nuniform float time;\nuniform vec2 uViewport;\nuniform float uFogDensity;\nuniform vec3 uFogColor;\n\nvarying vec4 vColor;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vExtra;\n\nconst float radius = 0.01;\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvoid main(void) {\n	vec2 uv      = aVertexPosition.xy;\n	vec3 posCurr = texture2D(textureCurr, uv).rgb;\n	vec3 posNext = texture2D(textureNext, uv).rgb;\n	vec3 pos     = mix(posCurr, posNext, percent);\n	vec3 extra   = texture2D(textureExtra, uv).rgb;\n	vec4 viewSpace = uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	gl_Position  = uProjectionMatrix * viewSpace;\n	\n\n	float g 	 = sin(extra.r + time * mix(extra.b, 1.0, .5) * 0.5);\n	g 			 = smoothstep(0.0, 1.0, g);\n	g 			 = mix(g, 1.0, .5);\n	vec3 color 	 = vec3(g);\n\n	float fogDistance 	= length(viewSpace);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n	\n	vColor       = vec4(color, 1.0);\n\n	float distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n    gl_PointSize = distOffset * (1.0 + extra.x * 1.0);\n\n	vNormal 	 = aNormal;\n	vPosition 	 = pos;\n	vExtra 		 = extra;\n}" }, function(e, t) { e.exports = "// save.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n    gl_FragData[0] = vec4(vColor, 1.0);\n    gl_FragData[1] = vec4(0.0, 0.0, 0.0, 1.0);\n    gl_FragData[2] = vec4(vExtra, 1.0);\n    gl_FragData[3] = vec4(0.5, 0.5, 0.5, 1.0);\n}" }, function(e, t) { e.exports = "// save.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\n\nvoid main(void) {\n	vColor       = aVertexPosition;\n	vec3 pos     = vec3(aTextureCoord, 0.0);\n	gl_Position  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	\n	gl_PointSize = 1.0;\n	\n	vNormal      = aNormal;\n	vExtra       = aExtra;\n}" }, function(e, t) { e.exports = "// sim.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform float time;\nuniform float maxRadius;\n\nuniform vec3 gamepad0;\nuniform vec3 gamepad1;\n\nuniform float gamepad0Force;\nuniform float gamepad1Force;\n\n\n#define PI 3.141592657\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 permute(vec4 x) {  return mod289(((x*34.0)+1.0)*x);  }\n\nvec4 taylorInvSqrt(vec4 r) {  return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v) { \n	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n	vec3 i  = floor(v + dot(v, C.yyy) );\n	vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n	vec3 g = step(x0.yzx, x0.xyz);\n	vec3 l = 1.0 - g;\n	vec3 i1 = min( g.xyz, l.zxy );\n	vec3 i2 = max( g.xyz, l.zxy );\n\n	vec3 x1 = x0 - i1 + C.xxx;\n	vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n	vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n	i = mod289(i); \n	vec4 p = permute( permute( permute( \n						 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n					 + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n					 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n	float n_ = 0.142857142857; // 1.0/7.0\n	vec3  ns = n_ * D.wyz - D.xzx;\n\n	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n	vec4 x_ = floor(j * ns.z);\n	vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n	vec4 x = x_ *ns.x + ns.yyyy;\n	vec4 y = y_ *ns.x + ns.yyyy;\n	vec4 h = 1.0 - abs(x) - abs(y);\n\n	vec4 b0 = vec4( x.xy, y.xy );\n	vec4 b1 = vec4( x.zw, y.zw );\n\n	vec4 s0 = floor(b0)*2.0 + 1.0;\n	vec4 s1 = floor(b1)*2.0 + 1.0;\n	vec4 sh = -step(h, vec4(0.0));\n\n	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n	vec3 p0 = vec3(a0.xy,h.x);\n	vec3 p1 = vec3(a0.zw,h.y);\n	vec3 p2 = vec3(a1.xy,h.z);\n	vec3 p3 = vec3(a1.zw,h.w);\n\n	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n	p0 *= norm.x;\n	p1 *= norm.y;\n	p2 *= norm.z;\n	p3 *= norm.w;\n\n	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n	m = m * m;\n	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n																dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n	float s  = snoise(vec3( x ));\n	float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n	float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n	vec3 c = vec3( s , s1 , s2 );\n	return c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n	\n	const float e = .1;\n	vec3 dx = vec3( e   , 0.0 , 0.0 );\n	vec3 dy = vec3( 0.0 , e   , 0.0 );\n	vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n	vec3 p_x0 = snoiseVec3( p - dx );\n	vec3 p_x1 = snoiseVec3( p + dx );\n	vec3 p_y0 = snoiseVec3( p - dy );\n	vec3 p_y1 = snoiseVec3( p + dy );\n	vec3 p_z0 = snoiseVec3( p - dz );\n	vec3 p_z1 = snoiseVec3( p + dz );\n\n	float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n	float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n	float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n	const float divisor = 1.0 / ( 2.0 * e );\n	return normalize( vec3( x , y , z ) * divisor );\n\n}\n\nvec2 rotate(vec2 v, float a) {\n	float s = sin(a);\n	float c = cos(a);\n	mat2 m = mat2(c, -s, s, c);\n	return m * v;\n}\n\nvoid main(void) {\n	vec3 pos        = texture2D(texturePos, vTextureCoord).rgb;\n	vec3 vel        = texture2D(textureVel, vTextureCoord).rgb;\n	vec3 extra      = texture2D(textureExtra, vTextureCoord).rgb;\n	float posOffset = mix(extra.r, 1.0, 0.5) * (.1 + sin(cos(time)) * 0.05);\n	vec3 acc        = curlNoise(pos * posOffset + time * .3);\n	\n	vel += acc * .005;\n\n	float dist = length(pos.xz);\n	if(dist > maxRadius) {\n		float f = (dist - maxRadius) * .005;\n		vel.xz -= normalize(pos.xz) * f;\n	}\n\n\n	const float minPadRadius = 2.0;\n	const float pullinForce = 0.03;\n	vec3 dir;\n	dist = distance(pos, gamepad0);\n	if(dist < minPadRadius) {\n		dir = normalize(gamepad0 - pos);\n		float f = 1.0 - dist / minPadRadius;\n		vel += dir * pullinForce * f * gamepad0Force;\n	}\n\n	dist = distance(pos, gamepad1);\n	if(dist < minPadRadius) {\n		dir = normalize(gamepad1 - pos);\n		float f = 1.0 - dist / minPadRadius;\n		vel += dir * pullinForce * f * gamepad1Force;\n	}\n\n	const float minY = 1.5;\n	if(pos.y < minY) {\n		float f = (minY - pos.y) / minY;\n		vel.y += pow(f, 4.0) * 10.0;\n	}\n\n	const float maxY = 2.0;\n	if(pos.y > maxY) {\n		float f = maxY - pos.y;\n		vel.y += f * (0.01 + extra.g * 0.005) * 0.01;\n	}\n\n	vec2 xz = normalize(pos.xz);\n	xz = rotate(xz, -PI * 0.6);\n	vel.xz += xz * 0.005 * mix(extra.b, 1.0, .5);\n\n	const float decrease = .93;\n	vel *= decrease;\n\n	gl_FragData[0] = vec4(pos + vel, 1.0);\n	gl_FragData[1] = vec4(vel, 1.0);\n	gl_FragData[2] = vec4(extra, 1.0);\n	gl_FragData[3] = vec4(0.0, 0.0, 0.0, 1.0);\n}" }, function(e, t) { e.exports = "// softlight.vert\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform sampler2D textureGradient;\nuniform sampler2D textureGradientMap;\nuniform float offset;\n\n\nfloat luma(vec3 color) {\n    return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n    return mix(\n        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), \n        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), \n        step(base, vec3(0.5))\n    );\n}\n\nvoid main(void) {\n    vec3 color = texture2D(texture, vTextureCoord).rgb;\n    float br = luma(color);\n    vec3 colorMap = texture2D(textureGradientMap, vec2(br, .5)).rgb;\n    color = mix(color, colorMap, .5 * offset);\n\n\n    vec3 colorGradient = texture2D(textureGradient, vTextureCoord).rgb;\n    vec3 colorBlend = blendSoftLight(color, colorGradient);\n\n    color = mix(color, colorBlend, 0.25 * offset);\n\n    gl_FragColor = vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// terrain.frag\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D textureHeight;\nuniform sampler2D textureNormal;\nuniform sampler2D textureNoise;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform float		uExposure;\nuniform float		uGamma;\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\n\n{{UNIFORMS}}\n\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}\n	\n	vec3 N 				= texture2D( textureNormal, vTextureCoord ).rgb * 2.0 - 1.0;\n	vec3 noise 			= texture2D( textureNoise, vTextureCoord * 30.0).rgb * 2.0 - 1.0;\n	N 					= normalize( N + noise * 0.2);\n	vec3 V 				= normalize( vEyePosition );\n	\n	vec3 color 			= getPbr(N, V, baseColor, roughness, metallic, specular);\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// terrain.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nuniform sampler2D textureHeight;\n\n{{UNIFORMS}}\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\nvoid main(void) {\n\n	vec3 position = aVertexPosition;\n\n	float height = texture2D(textureHeight, aTextureCoord).r;\n	position.y += height * maxHeight;\n\n	vec4 worldSpacePosition	= uModelMatrix * vec4(position, 1.0);\n	vec4 viewSpacePosition	= uViewMatrix * worldSpacePosition;\n	\n	vNormal					= uNormalMatrix * aNormal;\n	vPosition				= viewSpacePosition.xyz;\n	vWsPosition				= worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace	= viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition			= -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	vWsNormal				= normalize( uModelViewMatrixInverse * vNormal );\n	\n	gl_Position				= uProjectionMatrix * viewSpacePosition;\n\n	vTextureCoord			= aTextureCoord;\n}" }, function(e, t) { e.exports = "// terrain.frag\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D textureHeight;\nuniform sampler2D textureNormal;\nuniform sampler2D textureNoise;\nuniform sampler2D textureEnv;\n\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\nuniform float		uExposure;\nuniform float		uGamma;\n\n{{UNIFORMS}}\n\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\nconst float PI = 3.141592653;\nconst float TwoPI = PI * 2.0;\nconst vec3 LIGHT = vec3(1.0, .5, 1.0);\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvec2 envMapEquirect(vec3 wcNormal, float flipEnvMap) {\n  //I assume envMap texture has been flipped the WebGL way (pixel 0,0 is a the bottom)\n  //therefore we flip wcNorma.y as acos(1) = 0\n  float phi = acos(-wcNormal.y);\n  float theta = atan(flipEnvMap * wcNormal.x, wcNormal.z) + PI;\n  return vec2(theta / TwoPI, phi / PI);\n}\n\nvec2 envMapEquirect(vec3 wcNormal) {\n    //-1.0 for left handed coordinate system oriented texture (usual case)\n    return envMapEquirect(wcNormal, -1.0);\n}\n\nfloat diffuse(vec3 N, vec3 L) {\n	return max(dot(N, normalize(L)), 0.0);\n}\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n	return diffuse(N, L) * C;\n}\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}\n	\n	vec3 N 				= texture2D( textureNormal, vTextureCoord ).rgb * 2.0 - 1.0;\n	vec3 noise 			= texture2D( textureNoise, vTextureCoord * 30.0).rgb * 2.0 - 1.0;\n	N 					= normalize( N + noise * 0.2);\n	\n	vec3 color 			= baseColor;\n	float _diffuse 		= diffuse(N, LIGHT);\n	color 				*= mix(_diffuse, 1.0, .5);\n\n	vec2 uvEnv 			= envMapEquirect(N);\n	vec3 colorEnv 		= texture2D(textureEnv, uvEnv).rgb;\n	color 				*= mix(colorEnv, vec3(1.0), .25);\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// title.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float uOpacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= uOpacity;\n}" }, function(e, t) { e.exports = "// treeFallback.frag\n// trees.frag\n\nprecision highp float;\n#define GLSLIFY 1\nuniform sampler2D texture;\n\nuniform sampler2D textureTree;\nuniform sampler2D textureNoise;\nuniform sampler2D textureEnv;\n\nuniform float		uExposure;\nuniform float		uGamma;\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\n\n{{UNIFORMS}}\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\nconst float TwoPI = PI * 2.0;\nconst vec3 LIGHT = vec3(1.0, .5, 1.0);\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvec2 envMapEquirect(vec3 wcNormal, float flipEnvMap) {\n  //I assume envMap texture has been flipped the WebGL way (pixel 0,0 is a the bottom)\n  //therefore we flip wcNorma.y as acos(1) = 0\n  float phi = acos(-wcNormal.y);\n  float theta = atan(flipEnvMap * wcNormal.x, wcNormal.z) + PI;\n  return vec2(theta / TwoPI, phi / PI);\n}\n\nvec2 envMapEquirect(vec3 wcNormal) {\n    //-1.0 for left handed coordinate system oriented texture (usual case)\n    return envMapEquirect(wcNormal, -1.0);\n}\n\nfloat diffuse(vec3 N, vec3 L) {\n	return max(dot(N, normalize(L)), 0.0);\n}\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n	return diffuse(N, L) * C;\n}\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}	\n\n	vec2 uv  			= vTextureCoord * vec2(1.0, 20.0);\n\n    vec3 N 				= vNormal;\n	vec3 noise 			= texture2D( textureNoise, uv * 30.0).rgb * 2.0 - 1.0;\n	vec3 colorTree 	    = texture2D( textureTree, uv).rgb;\n	N 					= normalize( N + noise * 0.2);\n	\n	vec3 color 			= colorTree;\n	float _diffuse 		= diffuse(N, LIGHT);\n	color 				*= mix(_diffuse, 1.0, .5);\n\n	vec2 uvEnv 			= envMapEquirect(N);\n	vec3 colorEnv 		= texture2D(textureEnv, uvEnv).rgb;\n	color 				*= mix(colorEnv, vec3(1.0), .25);\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// trees.frag\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\nuniform sampler2D texture;\n\nuniform sampler2D textureTree;\nuniform sampler2D textureNoise;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform float		uExposure;\nuniform float		uGamma;\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\n\n{{UNIFORMS}}\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}	\n\n	vec2 uv  			= vTextureCoord * vec2(1.0, 20.0);\n\n    vec3 N 				= vNormal;\n	vec3 noise 			= texture2D( textureNoise, uv * 30.0).rgb * 2.0 - 1.0;\n	vec3 colorTree 	    = texture2D( textureTree, uv).rgb;\n	N 					= normalize( N + noise * 0.2);\n	vec3 V 				= normalize( vEyePosition );\n	\n	vec3 color 			= getPbr(N, V, baseColor + colorTree, roughness, metallic, specular);\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// trees.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aPosOffset;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\nvec2 rotate(vec2 v, float a) {\n	float s = sin(a);\n	float c = cos(a);\n	mat2 m = mat2(c, -s, s, c);\n	return m * v;\n}\n\n\nvec3 rotate(vec3 v) {\n	v.xy = rotate(v.xy, aExtra.x);\n	v.xz = rotate(v.xz, aExtra.y);\n\n	return v;\n}\n\nvoid main(void) {\n	vec3 position           = aVertexPosition;\n	position.xz             *= aExtra.z;\n	position                = rotate(position);\n	position                += aPosOffset;\n	\n	vec4 worldSpacePosition = uModelMatrix * vec4(position, 1.0);\n	vec4 viewSpacePosition  = uViewMatrix * worldSpacePosition;\n	\n	vPosition               = viewSpacePosition.xyz;\n	vWsPosition             = worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace    = viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition            = -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	\n	vec3 N                  = aNormal * 0.0001;\n	N                       += normalize(vec3(aVertexPosition.x, 0.0, aVertexPosition.z));\n	vNormal                 = rotate(N);\n	\n	vWsNormal               = normalize( uModelViewMatrixInverse * vNormal );\n	\n	gl_Position             = uProjectionMatrix * viewSpacePosition;\n	\n	vTextureCoord           = aTextureCoord;\n}" }, function(e, t) { e.exports = "// trees.frag\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\nuniform sampler2D texture;\n\nuniform sampler2D textureTree;\nuniform sampler2D textureNoise;\nuniform sampler2D textureAO;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform float		uExposure;\nuniform float		uGamma;\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\n\n{{UNIFORMS}}\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}	\n\n	vec2 uv  			= vTextureCoord * vec2(1.0, 20.0);\n\n    vec3 N 				= vNormal;\n	vec3 noise 			= texture2D( textureNoise, uv * 30.0).rgb * 2.0 - 1.0;\n	N 					= normalize( N + noise * 0.2);\n	vec3 V 				= normalize( vEyePosition );\n	\n	vec3 color 			= getPbr(N, V, baseColor, roughness, metallic, specular);\n\n	vec3 ao 			= texture2D(textureAO, vTextureCoord).rgb;\n	color 				*= ao;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) {
    e.exports = "// reflection.vert\n\n#define SHADER_NAME REFLECTION_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\nuniform vec3 uPosition;\nuniform vec3 uScale;\n\nvarying vec2 vTextureCoord;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\n\nvoid main(void) {\n	vec3 position 			= aVertexPosition * uScale + uPosition;\n	vec4 worldSpacePosition	= uModelMatrix * vec4(position, 1.0);\n	vec4 viewSpacePosition	= uViewMatrix * worldSpacePosition;\n	\n	vNormal					= uNormalMatrix * aNormal;\n	vPosition				= viewSpacePosition.xyz;\n	vWsPosition				= worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace	= viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition			= -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	vWsNormal				= normalize( uModelViewMatrixInverse * vNormal );\n	\n	gl_Position				= uProjectionMatrix * viewSpacePosition;\n\n	vTextureCoord			= aTextureCoord;\n}\n";
}, function(e, t) { e.exports = "// trunkFallback.frag\n\n// treeFallback.frag\n// trees.frag\n\nprecision highp float;\n#define GLSLIFY 1\nuniform sampler2D texture;\n\nuniform sampler2D textureAO;\nuniform sampler2D textureTree;\nuniform sampler2D textureNoise;\nuniform sampler2D textureEnv;\n\nuniform float		uExposure;\nuniform float		uGamma;\nuniform float 		uClipY;\nuniform float 		uDir;\nuniform float 		uFogDensity;\nuniform vec3 		uFogColor;\n\n{{UNIFORMS}}\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\nconst float TwoPI = PI * 2.0;\nconst vec3 LIGHT = vec3(1.0, .5, 1.0);\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvec2 envMapEquirect(vec3 wcNormal, float flipEnvMap) {\n  //I assume envMap texture has been flipped the WebGL way (pixel 0,0 is a the bottom)\n  //therefore we flip wcNorma.y as acos(1) = 0\n  float phi = acos(-wcNormal.y);\n  float theta = atan(flipEnvMap * wcNormal.x, wcNormal.z) + PI;\n  return vec2(theta / TwoPI, phi / PI);\n}\n\nvec2 envMapEquirect(vec3 wcNormal) {\n    //-1.0 for left handed coordinate system oriented texture (usual case)\n    return envMapEquirect(wcNormal, -1.0);\n}\n\nfloat diffuse(vec3 N, vec3 L) {\n	return max(dot(N, normalize(L)), 0.0);\n}\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n	return diffuse(N, L) * C;\n}\n\nvoid main(void) {\n	if(vWsPosition.y * uDir > uClipY * uDir) {\n		discard;\n	}	\n\n	vec2 uv  			= vTextureCoord * vec2(1.0, 20.0);\n\n    vec3 N 				= vNormal;\n	vec3 noise 			= texture2D( textureNoise, uv * 30.0).rgb * 2.0 - 1.0;\n	// vec3 colorTree 	    = texture2D( textureTree, uv).rgb;\n	vec3 ao 			= texture2D( textureAO, vTextureCoord).rgb;\n	N 					= normalize( N + noise * 0.2);\n	\n	vec3 color 			= baseColor * ao * vec3(1.0, 1.2, 1.0);\n	float _diffuse 		= diffuse(N, LIGHT);\n	color 				*= mix(_diffuse, 1.0, .5);\n\n	vec2 uvEnv 			= envMapEquirect(N);\n	vec3 colorEnv 		= texture2D(textureEnv, uvEnv).rgb;\n	color 				*= colorEnv;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	float fogDistance 	= length(vPosition);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color 				= mix(color, uFogColor, fogAmount);\n\n    gl_FragColor 		= vec4(color, 1.0);\n}" }, function(e, t) { e.exports = "// water.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D textureReflection;\nuniform float uFogDensity;\nuniform vec3 uFogColor;\n\nvarying vec4 vClipSpace;\nvarying vec4 vViewSpace;\n\nfloat fogFactorExp2(const float dist, const float density) {\n	const float LOG2 = -1.442695;\n	float d = density * dist;\n	return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);\n}\n\nvoid main(void) {\n	vec2 ndc = vClipSpace.xy / vClipSpace.w;\n	ndc = ndc * 0.5 + 0.5;\n\n	vec2 uvReflect = vec2(ndc.x, 1.0-ndc.y);\n	vec4 color = texture2D(textureReflection, uvReflect);\n	color.rgb *= vec3(0.65, 0.65, 0.70);\n\n	float fogDistance 	= length(vViewSpace);\n	float fogAmount 	= fogFactorExp2(fogDistance, uFogDensity);\n	color.rgb 			= mix(color.rgb, uFogColor, fogAmount);\n\n    gl_FragColor = color;\n}" }, function(e, t) { e.exports = "// water.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uSeaLevel;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec4 vClipSpace;\nvarying vec4 vViewSpace;\n\nvoid main(void) {\n	vec3 position = aVertexPosition + vec3(0.0, uSeaLevel, 0.0);\n	vViewSpace	  = uViewMatrix * uModelMatrix * vec4(position, 1.0);\n	vClipSpace    = uProjectionMatrix * vViewSpace;\n	gl_Position   = vClipSpace;\n	vTextureCoord = aTextureCoord;\n	vNormal       = aNormal;\n}" }, function(e, t, n) {
    function i(e, t, n) { var i = "https://api.soundcloud.com/resolve.json?" + r.stringify({ url: t, client_id: e });
        o({ uri: i, method: "GET" }, function(t, i, r) { if (t) return n(t); try { r = JSON.parse(r) } catch (o) { return n(o) } if (r.errors) return n(new Error(r.errors[0].error_message)); var a = "track" === r.kind && r.stream_url + "?client_id=" + e; return n(null, r, a) }) } var r = n(236),
        o = n(274);
    e.exports = i }, function(e, t) { var n = function() {
        function e(e) { return r.appendChild(e.dom), e }

        function t(e) { for (var t = 0; t < r.children.length; t++) r.children[t].style.display = t === e ? "block" : "none";
            i = e } var i = 0,
            r = document.createElement("div");
        r.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", r.addEventListener("click", function(e) { e.preventDefault(), t(++i % r.children.length) }, !1); var o = (performance || Date).now(),
            a = o,
            s = 0,
            u = e(new n.Panel("FPS", "#0ff", "#002")),
            l = e(new n.Panel("MS", "#0f0", "#020")); if (self.performance && self.performance.memory) var c = e(new n.Panel("MB", "#f08", "#201")); return t(0), { REVISION: 16, dom: r, addPanel: e, showPanel: t, begin: function() { o = (performance || Date).now() }, end: function() { s++; var e = (performance || Date).now(); if (l.update(e - o, 200), e > a + 1e3 && (u.update(1e3 * s / (e - a), 100), a = e, s = 0, c)) { var t = performance.memory;
                    c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576) } return e }, update: function() { o = this.end() }, domElement: r, setMode: t } };
    n.Panel = function(e, t, n) { var i = 1 / 0,
            r = 0,
            o = Math.round,
            a = o(window.devicePixelRatio || 1),
            s = 80 * a,
            u = 48 * a,
            l = 3 * a,
            c = 2 * a,
            f = 3 * a,
            h = 15 * a,
            d = 74 * a,
            v = 30 * a,
            p = document.createElement("canvas");
        p.width = s, p.height = u, p.style.cssText = "width:80px;height:48px"; var m = p.getContext("2d"); return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = n, m.fillRect(0, 0, s, u), m.fillStyle = t, m.fillText(e, l, c), m.fillRect(f, h, d, v), m.fillStyle = n, m.globalAlpha = .9, m.fillRect(f, h, d, v), { dom: p, update: function(u, _) { i = Math.min(i, u), r = Math.max(r, u), m.fillStyle = n, m.globalAlpha = 1, m.fillRect(0, 0, s, h), m.fillStyle = t, m.fillText(o(u) + " " + e + " (" + o(i) + "-" + o(r) + ")", l, c), m.drawImage(p, f + a, h, d - a, v, f, h, d - a, v), m.fillRect(f + d - a, h, a, v), m.fillStyle = n, m.globalAlpha = .9, m.fillRect(f + d - a, h, a, o((1 - u / _) * v)) } } }, "object" == typeof e && (e.exports = n) }, function(e, t, n) {
    function i(e, t) {
        function n() { 4 === c.readyState && i() }

        function i() { var e = null,
                n = c.statusCode = c.status,
                i = c.body = c.response || c.responseText || c.responseXML; if (0 === n || n >= 400 && 600 > n) { var r = c.responseText || s[String(c.status).charAt(0)];
                e = new Error(r), e.statusCode = c.status } if (p) try { i = c.body = JSON.parse(i) } catch (o) {}
            t(e, c, i) }

        function o(e) { t(e, c) } "string" == typeof e && (e = { uri: e }), e = e || {}, t = a(t); var c;
        c = e.cors ? new l : new u; var f = c.url = e.uri,
            h = c.method = e.method || "GET",
            d = e.body || e.data,
            v = c.headers = e.headers || {},
            p = !1; return "json" in e && (p = !0, v["Content-Type"] = "application/json", d = JSON.stringify(e.json)), c.onreadystatechange = n, c.onload = i, c.onerror = o, c.onprogress = function() {}, c.ontimeout = r, c.open(h, f), e.cors && (c.withCredentials = !0), c.timeout = "timeout" in e ? e.timeout : 5e3, c.setRequestHeader && Object.keys(v).forEach(function(e) { c.setRequestHeader(e, v[e]) }), c.send(d), c }

    function r() {} var o = n(231),
        a = n(275),
        s = { 0: "Internal XMLHttpRequest Error", 4: "4xx Client Error", 5: "5xx Server Error" },
        u = o.XMLHttpRequest || r,
        l = "withCredentials" in new u ? o.XMLHttpRequest : o.XDomainRequest;
    e.exports = i }, function(e, t) {
    function n(e) { var t = !1; return function() { return t ? void 0 : (t = !0, e.apply(this, arguments)) } }
    e.exports = n, n.proto = n(function() { Object.defineProperty(Function.prototype, "once", { value: function() { return n(this) }, configurable: !0 }) }) }]));