/*! For license information please see twgl-full-module.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([["vendors/twgl-full-module"],{141:(t,n,e)=>{e.d(n,{qX:()=>$,EK:()=>Xt,y0:()=>Yt,m4:()=>b,Lo:()=>Qt,o8:()=>Wt,N9:()=>Dt});let r=Float32Array;function o(t,n,e){const o=new r(3);return t&&(o[0]=t),n&&(o[1]=n),e&&(o[2]=e),o}function i(t,n,e){return(e=e||new r(3))[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function s(t,n,e){e=e||new r(3);const o=t[2]*n[0]-t[0]*n[2],i=t[0]*n[1]-t[1]*n[0];return e[0]=t[1]*n[2]-t[2]*n[1],e[1]=o,e[2]=i,e}function u(t,n){n=n||new r(3);const e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],o=Math.sqrt(e);return o>1e-5?(n[0]=t[0]/o,n[1]=t[1]/o,n[2]=t[2]/o):(n[0]=0,n[1]=0,n[2]=0),n}let a,c,f,l=Float32Array;function y(t,n){return(n=n||new l(16))[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function m(t){return(t=t||new l(16))[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,n){n=n||new l(16);const e=t[0],r=t[1],o=t[2],i=t[3],s=t[4],u=t[5],a=t[6],c=t[7],f=t[8],y=t[9],m=t[10],d=t[11],p=t[12],h=t[13],b=t[14],A=t[15],v=m*A,g=b*d,w=a*A,x=b*c,z=a*d,T=m*c,M=o*A,S=b*i,C=o*d,P=m*i,E=o*c,k=a*i,U=f*h,I=p*y,F=s*h,B=p*u,O=s*y,$=f*u,L=e*h,_=p*r,j=e*y,R=f*r,V=e*u,D=s*r,N=v*u+x*y+z*h-(g*u+w*y+T*h),W=g*r+M*y+P*h-(v*r+S*y+C*h),G=w*r+S*u+E*h-(x*r+M*u+k*h),H=T*r+C*u+k*y-(z*r+P*u+E*y),X=1/(e*N+s*W+f*G+p*H);return n[0]=X*N,n[1]=X*W,n[2]=X*G,n[3]=X*H,n[4]=X*(g*s+w*f+T*p-(v*s+x*f+z*p)),n[5]=X*(v*e+S*f+C*p-(g*e+M*f+P*p)),n[6]=X*(x*e+M*s+k*p-(w*e+S*s+E*p)),n[7]=X*(z*e+P*s+E*f-(T*e+C*s+k*f)),n[8]=X*(U*c+B*d+O*A-(I*c+F*d+$*A)),n[9]=X*(I*i+L*d+R*A-(U*i+_*d+j*A)),n[10]=X*(F*i+_*c+V*A-(B*i+L*c+D*A)),n[11]=X*($*i+j*c+D*d-(O*i+R*c+V*d)),n[12]=X*(F*m+$*b+I*a-(O*b+U*a+B*m)),n[13]=X*(j*b+U*o+_*m-(L*m+R*b+I*o)),n[14]=X*(L*a+D*b+B*o-(V*b+F*o+_*a)),n[15]=X*(V*m+O*o+R*a-(j*a+D*m+$*o)),n}function p(t,n,e){e=e||o();const r=n[0],i=n[1],s=n[2],u=r*t[3]+i*t[7]+s*t[11]+t[15];return e[0]=(r*t[0]+i*t[4]+s*t[8]+t[12])/u,e[1]=(r*t[1]+i*t[5]+s*t[9]+t[13])/u,e[2]=(r*t[2]+i*t[6]+s*t[10]+t[14])/u,e}function h(t,n,e){e=e||o();const r=n[0],i=n[1],s=n[2];return e[0]=r*t[0]+i*t[4]+s*t[8],e[1]=r*t[1]+i*t[5]+s*t[9],e[2]=r*t[2]+i*t[6]+s*t[10],e}var b=Object.freeze({__proto__:null,axisRotate:function(t,n,e,r){r=r||new l(16);let o=n[0],i=n[1],s=n[2];const u=Math.sqrt(o*o+i*i+s*s);o/=u,i/=u,s/=u;const a=o*o,c=i*i,f=s*s,y=Math.cos(e),m=Math.sin(e),d=1-y,p=a+(1-a)*y,h=o*i*d+s*m,b=o*s*d-i*m,A=o*i*d-s*m,v=c+(1-c)*y,g=i*s*d+o*m,w=o*s*d+i*m,x=i*s*d-o*m,z=f+(1-f)*y,T=t[0],M=t[1],S=t[2],C=t[3],P=t[4],E=t[5],k=t[6],U=t[7],I=t[8],F=t[9],B=t[10],O=t[11];return r[0]=p*T+h*P+b*I,r[1]=p*M+h*E+b*F,r[2]=p*S+h*k+b*B,r[3]=p*C+h*U+b*O,r[4]=A*T+v*P+g*I,r[5]=A*M+v*E+g*F,r[6]=A*S+v*k+g*B,r[7]=A*C+v*U+g*O,r[8]=w*T+x*P+z*I,r[9]=w*M+x*E+z*F,r[10]=w*S+x*k+z*B,r[11]=w*C+x*U+z*O,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},axisRotation:function(t,n,e){e=e||new l(16);let r=t[0],o=t[1],i=t[2];const s=Math.sqrt(r*r+o*o+i*i);r/=s,o/=s,i/=s;const u=r*r,a=o*o,c=i*i,f=Math.cos(n),y=Math.sin(n),m=1-f;return e[0]=u+(1-u)*f,e[1]=r*o*m+i*y,e[2]=r*i*m-o*y,e[3]=0,e[4]=r*o*m-i*y,e[5]=a+(1-a)*f,e[6]=o*i*m+r*y,e[7]=0,e[8]=r*i*m+o*y,e[9]=o*i*m-r*y,e[10]=c+(1-c)*f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},copy:y,create:function(){return new l(16).fill(0)},frustum:function(t,n,e,r,o,i,s){const u=n-t,a=r-e,c=o-i;return(s=s||new l(16))[0]=2*o/u,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2*o/a,s[6]=0,s[7]=0,s[8]=(t+n)/u,s[9]=(r+e)/a,s[10]=i/c,s[11]=-1,s[12]=0,s[13]=0,s[14]=o*i/c,s[15]=0,s},getAxis:function(t,n,e){const r=4*n;return(e=e||o())[0]=t[r+0],e[1]=t[r+1],e[2]=t[r+2],e},getTranslation:function(t,n){return(n=n||o())[0]=t[12],n[1]=t[13],n[2]=t[14],n},identity:m,inverse:d,lookAt:function(t,n,e,i){return i=i||new l(16),a=a||o(),c=c||o(),f=f||o(),u(function(t,n,e){return(e=e||new r(3))[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}(t,n,f),f),u(s(e,f,a),a),u(s(f,a,c),c),i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=0,i[4]=c[0],i[5]=c[1],i[6]=c[2],i[7]=0,i[8]=f[0],i[9]=f[1],i[10]=f[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i},multiply:function(t,n,e){e=e||new l(16);const r=t[0],o=t[1],i=t[2],s=t[3],u=t[4],a=t[5],c=t[6],f=t[7],y=t[8],m=t[9],d=t[10],p=t[11],h=t[12],b=t[13],A=t[14],v=t[15],g=n[0],w=n[1],x=n[2],z=n[3],T=n[4],M=n[5],S=n[6],C=n[7],P=n[8],E=n[9],k=n[10],U=n[11],I=n[12],F=n[13],B=n[14],O=n[15];return e[0]=r*g+u*w+y*x+h*z,e[1]=o*g+a*w+m*x+b*z,e[2]=i*g+c*w+d*x+A*z,e[3]=s*g+f*w+p*x+v*z,e[4]=r*T+u*M+y*S+h*C,e[5]=o*T+a*M+m*S+b*C,e[6]=i*T+c*M+d*S+A*C,e[7]=s*T+f*M+p*S+v*C,e[8]=r*P+u*E+y*k+h*U,e[9]=o*P+a*E+m*k+b*U,e[10]=i*P+c*E+d*k+A*U,e[11]=s*P+f*E+p*k+v*U,e[12]=r*I+u*F+y*B+h*O,e[13]=o*I+a*F+m*B+b*O,e[14]=i*I+c*F+d*B+A*O,e[15]=s*I+f*F+p*B+v*O,e},negate:function(t,n){return(n=n||new l(16))[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n[4]=-t[4],n[5]=-t[5],n[6]=-t[6],n[7]=-t[7],n[8]=-t[8],n[9]=-t[9],n[10]=-t[10],n[11]=-t[11],n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=-t[15],n},ortho:function(t,n,e,r,o,i,s){return(s=s||new l(16))[0]=2/(n-t),s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/(r-e),s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=2/(o-i),s[11]=0,s[12]=(n+t)/(t-n),s[13]=(r+e)/(e-r),s[14]=(i+o)/(o-i),s[15]=1,s},perspective:function(t,n,e,r,o){o=o||new l(16);const i=Math.tan(.5*Math.PI-.5*t),s=1/(e-r);return o[0]=i/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(e+r)*s,o[11]=-1,o[12]=0,o[13]=0,o[14]=e*r*s*2,o[15]=0,o},rotateX:function(t,n,e){e=e||new l(16);const r=t[4],o=t[5],i=t[6],s=t[7],u=t[8],a=t[9],c=t[10],f=t[11],y=Math.cos(n),m=Math.sin(n);return e[4]=y*r+m*u,e[5]=y*o+m*a,e[6]=y*i+m*c,e[7]=y*s+m*f,e[8]=y*u-m*r,e[9]=y*a-m*o,e[10]=y*c-m*i,e[11]=y*f-m*s,t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},rotateY:function(t,n,e){e=e||new l(16);const r=t[0],o=t[1],i=t[2],s=t[3],u=t[8],a=t[9],c=t[10],f=t[11],y=Math.cos(n),m=Math.sin(n);return e[0]=y*r-m*u,e[1]=y*o-m*a,e[2]=y*i-m*c,e[3]=y*s-m*f,e[8]=y*u+m*r,e[9]=y*a+m*o,e[10]=y*c+m*i,e[11]=y*f+m*s,t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},rotateZ:function(t,n,e){e=e||new l(16);const r=t[0],o=t[1],i=t[2],s=t[3],u=t[4],a=t[5],c=t[6],f=t[7],y=Math.cos(n),m=Math.sin(n);return e[0]=y*r+m*u,e[1]=y*o+m*a,e[2]=y*i+m*c,e[3]=y*s+m*f,e[4]=y*u-m*r,e[5]=y*a-m*o,e[6]=y*c-m*i,e[7]=y*f-m*s,t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},rotationX:function(t,n){n=n||new l(16);const e=Math.cos(t),r=Math.sin(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rotationY:function(t,n){n=n||new l(16);const e=Math.cos(t),r=Math.sin(t);return n[0]=e,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rotationZ:function(t,n){n=n||new l(16);const e=Math.cos(t),r=Math.sin(t);return n[0]=e,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},scale:function(t,n,e){e=e||new l(16);const r=n[0],o=n[1],i=n[2];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=r*t[3],e[4]=o*t[4],e[5]=o*t[5],e[6]=o*t[6],e[7]=o*t[7],e[8]=i*t[8],e[9]=i*t[9],e[10]=i*t[10],e[11]=i*t[11],t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},scaling:function(t,n){return(n=n||new l(16))[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},setAxis:function(t,n,e,r){r!==t&&(r=y(t,r));const o=4*e;return r[o+0]=n[0],r[o+1]=n[1],r[o+2]=n[2],r},setDefaultType:function(t){const n=l;return l=t,n},setTranslation:function(t,n,e){return t!==(e=e||m())&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11]),e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},transformDirection:h,transformNormal:function(t,n,e){e=e||o();const r=d(t),i=n[0],s=n[1],u=n[2];return e[0]=i*r[0]+s*r[1]+u*r[2],e[1]=i*r[4]+s*r[5]+u*r[6],e[2]=i*r[8]+s*r[9]+u*r[10],e},transformPoint:p,translate:function(t,n,e){e=e||new l(16);const r=n[0],o=n[1],i=n[2],s=t[0],u=t[1],a=t[2],c=t[3],f=t[4],y=t[5],m=t[6],d=t[7],p=t[8],h=t[9],b=t[10],A=t[11],v=t[12],g=t[13],w=t[14],x=t[15];return t!==e&&(e[0]=s,e[1]=u,e[2]=a,e[3]=c,e[4]=f,e[5]=y,e[6]=m,e[7]=d,e[8]=p,e[9]=h,e[10]=b,e[11]=A),e[12]=s*r+f*o+p*i+v,e[13]=u*r+y*o+h*i+g,e[14]=a*r+m*o+b*i+w,e[15]=c*r+d*o+A*i+x,e},translation:function(t,n){return(n=n||new l(16))[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n},transpose:function(t,n){if((n=n||new l(16))===t){let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,n}const e=t[0],r=t[1],o=t[2],i=t[3],s=t[4],u=t[5],a=t[6],c=t[7],f=t[8],y=t[9],m=t[10],d=t[11],p=t[12],h=t[13],b=t[14],A=t[15];return n[0]=e,n[1]=s,n[2]=f,n[3]=p,n[4]=r,n[5]=u,n[6]=y,n[7]=h,n[8]=o,n[9]=a,n[10]=m,n[11]=b,n[12]=i,n[13]=c,n[14]=d,n[15]=A,n}});const A=5120,v=5121,g=5124;{const t={};t[A]=Int8Array,t[5121]=Uint8Array,t[5122]=Int16Array,t[5123]=Uint16Array,t[g]=Int32Array,t[5125]=Uint32Array,t[5126]=Float32Array,t[32819]=Uint16Array,t[32820]=Uint16Array,t[33635]=Uint16Array,t[5131]=Uint16Array,t[33640]=Uint32Array,t[35899]=Uint32Array,t[35902]=Uint32Array,t[36269]=Uint32Array,t[34042]=Uint32Array}function w(t){if(t instanceof Int8Array)return A;if(t instanceof Uint8Array)return v;if(t instanceof Uint8ClampedArray)return v;if(t instanceof Int16Array)return 5122;if(t instanceof Uint16Array)return 5123;if(t instanceof Int32Array)return g;if(t instanceof Uint32Array)return 5125;if(t instanceof Float32Array)return 5126;throw new Error("unsupported typed array type")}const x="undefined"!=typeof SharedArrayBuffer?function(t){return t&&t.buffer&&(t.buffer instanceof ArrayBuffer||t.buffer instanceof SharedArrayBuffer)}:function(t){return t&&t.buffer&&t.buffer instanceof ArrayBuffer};function z(t,n){return"undefined"!=typeof WebGLTexture&&n instanceof WebGLTexture}const T=34962,M="";function S(t,n,e,r){if("undefined"!=typeof WebGLBuffer&&n instanceof WebGLBuffer)return n;e=e||T;const o=t.createBuffer();return function(t,n,e,r,o){t.bindBuffer(n,e),t.bufferData(n,r,o||35044)}(t,e,o,n,r),o}function C(t){return"indices"===t}function P(t){return t.length?t:t.data}const E=/coord|texture/i,k=/color|colour/i;function U(t,n){let e;if(e=E.test(t)?2:k.test(t)?4:3,n%e>0)throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${e} but ${n} values is not evenly divisible by ${e}. You should specify it.`);return e}function I(t,n){return t.numComponents||t.size||U(n,P(t).length)}function F(t,n){if(x(t))return t;if(x(t.data))return t.data;Array.isArray(t)&&(t={data:t});let e=t.type;return e||(e=C(n)?Uint16Array:Float32Array),new e(t.data)}function B(t,n){const e={};return Object.keys(n).forEach((function(r){if(!C(r)){const i=n[r],s=i.attrib||i.name||i.attribName||M+r;if(i.value){if(!Array.isArray(i.value)&&!x(i.value))throw new Error("array.value is not array or typedarray");e[s]={value:i.value}}else{let n,u,a,c;if(i.buffer&&i.buffer instanceof WebGLBuffer)n=i.buffer,c=i.numComponents||i.size,u=i.type,a=i.normalize;else if("number"==typeof i||"number"==typeof i.data){const e=i.data||i,s=i.type||Float32Array,f=e*s.BYTES_PER_ELEMENT;u=function(t){if(t===Int8Array)return A;if(t===Uint8Array)return v;if(t===Uint8ClampedArray)return v;if(t===Int16Array)return 5122;if(t===Uint16Array)return 5123;if(t===Int32Array)return g;if(t===Uint32Array)return 5125;if(t===Float32Array)return 5126;throw new Error("unsupported typed array type")}(s),a=void 0!==i.normalize?i.normalize:(o=s)===Int8Array||o===Uint8Array,c=i.numComponents||i.size||U(r,e),n=t.createBuffer(),t.bindBuffer(T,n),t.bufferData(T,f,i.drawType||35044)}else{const e=F(i,r);n=S(t,e,void 0,i.drawType),u=w(e),a=void 0!==i.normalize?i.normalize:function(t){return t instanceof Int8Array||t instanceof Uint8Array}(e),c=I(i,r)}e[s]={buffer:n,numComponents:c,type:u,normalize:a,stride:i.stride||0,offset:i.offset||0,divisor:void 0===i.divisor?void 0:i.divisor,drawType:i.drawType}}}var o})),t.bindBuffer(T,null),e}const O=["position","positions","a_position"];function $(t,n,e){const r=B(t,n),o=Object.assign({},e||{});o.attribs=Object.assign({},e?e.attribs:{},r);const i=n.indices;if(i){const n=F(i,"indices");o.indices=S(t,n,34963),o.numElements=n.length,o.elementType=w(n)}else o.numElements||(o.numElements=function(t,n){let e,r;for(r=0;r<O.length&&(e=O[r],!(e in n))&&(e=M+e,!(e in n));++r);r===O.length&&(e=Object.keys(n)[0]);const o=n[e];if(!o.buffer)return 1;t.bindBuffer(T,o.buffer);const i=t.getBufferParameter(T,34660);var s;t.bindBuffer(T,null);const u=i/(5120===(s=o.type)||5121===s?1:5122===s||5123===s?2:5124===s||5125===s||5126===s?4:0),a=o.numComponents||o.size,c=u/a;if(c%1!=0)throw new Error(`numComponents ${a} not correct for length ${length}`);return c}(t,o.attribs));return o}function L(t,n){const e={};return Object.keys(n).forEach((function(r){e[r]=function(t,n,e){const r="indices"===e?34963:T;return S(t,F(n,e),r)}(t,n[r],r)})),n.indices?(e.numElements=n.indices.length,e.elementType=w(F(n.indices))):e.numElements=function(t){let n,e;for(e=0;e<O.length&&(n=O[e],!(n in t));++e);e===O.length&&(n=Object.keys(t)[0]);const r=t[n],o=P(r).length;if(void 0===o)return 1;const i=I(r,n),s=o/i;if(o%i>0)throw new Error(`numComponents ${i} not correct for length ${o}`);return s}(n),e}function _(t,n,e){return function(t,n){let e=0;return t.push=function(){for(let n=0;n<arguments.length;++n){const r=arguments[n];if(r instanceof Array||x(r))for(let n=0;n<r.length;++n)t[e++]=r[n];else t[e++]=r}},t.reset=function(t){e=t||0},t.numComponents=n,Object.defineProperty(t,"numElements",{get:function(){return this.length/this.numComponents|0}}),t}(new(e||Float32Array)(t*n),t)}function j(t,n,e){const r=t.length,o=new Float32Array(3);for(let i=0;i<r;i+=3)e(n,[t[i],t[i+1],t[i+2]],o),t[i]=o[0],t[i+1]=o[1],t[i+2]=o[2]}function R(t,n,e){e=e||o();const r=n[0],i=n[1],s=n[2];return e[0]=r*t[0]+i*t[1]+s*t[2],e[1]=r*t[4]+i*t[5]+s*t[6],e[2]=r*t[8]+i*t[9]+s*t[10],e}function V(t,n){return Object.keys(t).forEach((function(e){const r=t[e];e.indexOf("pos")>=0?function(t,n){j(t,n,p)}(r,n):e.indexOf("tan")>=0||e.indexOf("binorm")>=0?function(t,n){j(t,n,h)}(r,n):e.indexOf("norm")>=0&&function(t,n){j(t,d(n),R)}(r,n)})),t}function D(t,n,e){return t=t||2,{position:{numComponents:2,data:[(n=n||0)+-1*(t*=.5),(e=e||0)+-1*t,n+1*t,e+-1*t,n+-1*t,e+1*t,n+1*t,e+1*t]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function N(t,n,e,r,o){t=t||1,n=n||1,e=e||1,r=r||1,o=o||m();const i=(e+1)*(r+1),s=_(3,i),u=_(3,i),a=_(2,i);for(let o=0;o<=r;o++)for(let i=0;i<=e;i++){const c=i/e,f=o/r;s.push(t*c-.5*t,0,n*f-.5*n),u.push(0,1,0),a.push(c,f)}const c=e+1,f=_(3,e*r*2,Uint16Array);for(let t=0;t<r;t++)for(let n=0;n<e;n++)f.push((t+0)*c+n,(t+1)*c+n,(t+0)*c+n+1),f.push((t+1)*c+n,(t+1)*c+n+1,(t+0)*c+n+1);return V({position:s,normal:u,texcoord:a,indices:f},o)}function W(t,n,e,r,o,i,s){if(n<=0||e<=0)throw new Error("subdivisionAxis and subdivisionHeight must be > 0");r=r||0,i=i||0;const u=(o=o||Math.PI)-r,a=(s=s||2*Math.PI)-i,c=(n+1)*(e+1),f=_(3,c),l=_(3,c),y=_(2,c);for(let o=0;o<=e;o++)for(let s=0;s<=n;s++){const c=s/n,m=o/e,d=a*c+i,p=u*m+r,h=Math.sin(d),b=Math.cos(d),A=Math.sin(p),v=b*A,g=Math.cos(p),w=h*A;f.push(t*v,t*g,t*w),l.push(v,g,w),y.push(1-c,m)}const m=n+1,d=_(3,n*e*2,Uint16Array);for(let t=0;t<n;t++)for(let n=0;n<e;n++)d.push((n+0)*m+t,(n+0)*m+t+1,(n+1)*m+t),d.push((n+1)*m+t,(n+0)*m+t+1,(n+1)*m+t+1);return{position:f,normal:l,texcoord:y,indices:d}}const G=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];function H(t){const n=(t=t||1)/2,e=[[-n,-n,-n],[+n,-n,-n],[-n,+n,-n],[+n,+n,-n],[-n,-n,+n],[+n,-n,+n],[-n,+n,+n],[+n,+n,+n]],r=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],o=[[1,0],[0,0],[0,1],[1,1]],i=_(3,24),s=_(3,24),u=_(2,24),a=_(3,12,Uint16Array);for(let t=0;t<6;++t){const n=G[t];for(let a=0;a<4;++a){const c=e[n[a]],f=r[t],l=o[a];i.push(c),s.push(f),u.push(l)}const c=4*t;a.push(c+0,c+1,c+2),a.push(c+0,c+2,c+3)}return{position:i,normal:s,texcoord:u,indices:a}}function X(t,n,e,r,o,i,s){if(r<3)throw new Error("radialSubdivisions must be 3 or greater");if(o<1)throw new Error("verticalSubdivisions must be 1 or greater");const u=void 0===i||i,a=void 0===s||s,c=(u?2:0)+(a?2:0),f=(r+1)*(o+1+c),l=_(3,f),y=_(3,f),m=_(2,f),d=_(3,r*(o+c/2)*2,Uint16Array),p=r+1,h=Math.atan2(t-n,e),b=Math.cos(h),A=Math.sin(h),v=o+(a?2:0);for(let i=u?-2:0;i<=v;++i){let s,u=i/o,a=e*u;i<0?(a=0,u=1,s=t):i>o?(a=e,u=1,s=n):s=t+i/o*(n-t),-2!==i&&i!==o+2||(s=0,u=0),a-=e/2;for(let t=0;t<p;++t){const n=Math.sin(t*Math.PI*2/r),e=Math.cos(t*Math.PI*2/r);l.push(n*s,a,e*s),i<0?y.push(0,-1,0):i>o?y.push(0,1,0):0===s?y.push(0,0,0):y.push(n*b,A,e*b),m.push(t/r,1-u)}}for(let t=0;t<o+c;++t)if(!(1===t&&u||t===o+c-2&&a))for(let n=0;n<r;++n)d.push(p*(t+0)+0+n,p*(t+0)+1+n,p*(t+1)+1+n),d.push(p*(t+0)+0+n,p*(t+1)+1+n,p*(t+1)+0+n);return{position:l,normal:y,texcoord:m,indices:d}}function Y(t,n){n=n||[];const e=[];for(let r=0;r<t.length;r+=4){const o=t[r],i=t.slice(r+1,r+4);i.push.apply(i,n);for(let t=0;t<o;++t)e.push.apply(e,i)}return e}function q(){const t=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],n=Y([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),e=Y([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),r=t.length/3,o={position:_(3,r),texcoord:_(2,r),normal:_(3,r),color:_(4,r,Uint8Array),indices:_(3,r/3,Uint16Array)};o.position.push(t),o.texcoord.push([.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0]),o.normal.push(n),o.color.push(e);for(let t=0;t<r;++t)o.indices.push(t);return o}function K(t,n,e,o,s,u,a){if(s<=0)throw new Error("subdivisionDown must be > 0");const c=(a=a||1)-(u=u||0),f=2*(s+1)*4,l=_(3,f),y=_(3,f),m=_(2,f);function d(t,n,e){return t+(n-t)*e}function p(n,e,a,f,p,h){for(let g=0;g<=s;g++){const w=e/1,x=g/s,z=2*(w-.5),T=(u+x*c)*Math.PI,M=Math.sin(T),S=Math.cos(T),C=d(t,n,M),P=z*o,E=S*t,k=M*C;l.push(P,E,k);const U=i((b=[0,M,S],A=a,(v=(v=void 0)||new r(3))[0]=b[0]*A[0],v[1]=b[1]*A[1],v[2]=b[2]*A[2],v),f);y.push(U),m.push(w*p+h,x)}var b,A,v}for(let t=0;t<2;t++){const r=2*(t/1-.5);p(n,t,[1,1,1],[0,0,0],1,0),p(n,t,[0,0,0],[r,0,0],0,0),p(e,t,[1,1,1],[0,0,0],1,0),p(e,t,[0,0,0],[r,0,0],0,1)}const h=_(3,2*s*4,Uint16Array);function b(t,n){for(let e=0;e<s;++e)h.push(t+e+0,t+e+1,n+e+0),h.push(t+e+1,n+e+1,n+e+0)}const A=s+1;return b(0*A,4*A),b(5*A,7*A),b(6*A,2*A),b(3*A,1*A),{position:l,normal:y,texcoord:m,indices:h}}function Z(t,n,e,r,o,i){return X(t,t,n,e,r,o,i)}function J(t,n,e,r,o,i){if(e<3)throw new Error("radialSubdivisions must be 3 or greater");if(r<3)throw new Error("verticalSubdivisions must be 3 or greater");o=o||0;const s=(i=i||2*Math.PI)-o,u=e+1,a=r+1,c=u*a,f=_(3,c),l=_(3,c),y=_(2,c),m=_(3,e*r*2,Uint16Array);for(let i=0;i<a;++i){const a=i/r,c=a*Math.PI*2,m=Math.sin(c),d=t+m*n,p=Math.cos(c),h=p*n;for(let t=0;t<u;++t){const n=t/e,r=o+n*s,i=Math.sin(r),u=Math.cos(r),c=i*d,b=u*d,A=i*m,v=u*m;f.push(c,h,b),l.push(A,p,v),y.push(n,1-a)}}for(let t=0;t<r;++t)for(let n=0;n<e;++n){const e=1+n,r=1+t;m.push(u*t+n,u*r+n,u*t+e),m.push(u*r+n,u*r+e,u*t+e)}return{position:f,normal:l,texcoord:y,indices:m}}function Q(t,n,e,r,o){if(n<3)throw new Error("divisions must be at least 3");o=o||1,r=r||0;const i=(n+1)*((e=e||1)+1),s=_(3,i),u=_(3,i),a=_(2,i),c=_(3,e*n*2,Uint16Array);let f=0;const l=t-r,y=n+1;for(let t=0;t<=e;++t){const i=r+l*Math.pow(t/e,o);for(let r=0;r<=n;++r){const o=2*Math.PI*r/n,l=i*Math.cos(o),m=i*Math.sin(o);if(s.push(l,0,m),u.push(0,1,0),a.push(1-r/n,t/e),t>0&&r!==n){const t=f+(r+1),n=f+r,e=f+r-y,o=f+(r+1)-y;c.push(t,n,e),c.push(t,e,o)}}f+=n+1}return{position:s,normal:u,texcoord:a,indices:c}}function tt(t){return function(n){const e=t.apply(this,Array.prototype.slice.call(arguments,1));return L(n,e)}}function nt(t){return function(n){const e=t.apply(null,Array.prototype.slice.call(arguments,1));return $(n,e)}}function et(t){return!!t.texStorage2D}nt(q),tt(q),nt(H),tt(H),nt(N),tt(N),nt(W),tt(W),nt(X),tt(X),nt(D),tt(D),nt(K),tt(K),nt(Z),tt(Z),nt(J),tt(J),nt(Q),tt(Q);const rt=function(){const t={},n={};return function(e,r){return function(e){const r=e.constructor.name;if(!t[r]){for(const t in e)if("number"==typeof e[t]){const r=n[e[t]];n[e[t]]=r?`${r} | ${t}`:t}t[r]=!0}}(e),n[r]||("number"==typeof r?`0x${r.toString(16)}`:r)}}();new Uint8Array([128,192,255,255]);{const t={};t[6406]={numColorComponents:1},t[6409]={numColorComponents:1},t[6410]={numColorComponents:2},t[6407]={numColorComponents:3},t[6408]={numColorComponents:4},t[6403]={numColorComponents:1},t[36244]={numColorComponents:1},t[33319]={numColorComponents:2},t[33320]={numColorComponents:2},t[6407]={numColorComponents:3},t[36248]={numColorComponents:3},t[6408]={numColorComponents:4},t[36249]={numColorComponents:4},t[6402]={numColorComponents:1},t[34041]={numColorComponents:2}}const ot=function(...t){console.error(...t)};function it(t){return"undefined"!=typeof document&&document.getElementById?document.getElementById(t):null}const st=33984,ut=34962,at=3553,ct=34067,ft=32879,lt=35866,yt={};function mt(t,n){return yt[n].bindPoint}function dt(t,n){return function(e){t.uniform1i(n,e)}}function pt(t,n){return function(e){t.uniform1iv(n,e)}}function ht(t,n){return function(e){t.uniform2iv(n,e)}}function bt(t,n){return function(e){t.uniform3iv(n,e)}}function At(t,n){return function(e){t.uniform4iv(n,e)}}function vt(t,n,e,r){const o=mt(0,n);return et(t)?function(n){let i,s;z(0,n)?(i=n,s=null):(i=n.texture,s=n.sampler),t.uniform1i(r,e),t.activeTexture(st+e),t.bindTexture(o,i),t.bindSampler(e,s)}:function(n){t.uniform1i(r,e),t.activeTexture(st+e),t.bindTexture(o,n)}}function gt(t,n,e,r,o){const i=mt(0,n),s=new Int32Array(o);for(let t=0;t<o;++t)s[t]=e+t;return et(t)?function(n){t.uniform1iv(r,s),n.forEach((function(n,r){let o,u;t.activeTexture(st+s[r]),z(0,n)?(o=n,u=null):(o=n.texture,u=n.sampler),t.bindSampler(e,u),t.bindTexture(i,o)}))}:function(n){t.uniform1iv(r,s),n.forEach((function(n,e){t.activeTexture(st+s[e]),t.bindTexture(i,n)}))}}function wt(t,n){return function(e){if(e.value)switch(t.disableVertexAttribArray(n),e.value.length){case 4:t.vertexAttrib4fv(n,e.value);break;case 3:t.vertexAttrib3fv(n,e.value);break;case 2:t.vertexAttrib2fv(n,e.value);break;case 1:t.vertexAttrib1fv(n,e.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else t.bindBuffer(ut,e.buffer),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,e.numComponents||e.size,e.type||5126,e.normalize||!1,e.stride||0,e.offset||0),void 0!==e.divisor&&t.vertexAttribDivisor(n,e.divisor)}}function xt(t,n){return function(e){if(e.value){if(t.disableVertexAttribArray(n),4!==e.value.length)throw new Error("The length of an integer constant value must be 4!");t.vertexAttrib4iv(n,e.value)}else t.bindBuffer(ut,e.buffer),t.enableVertexAttribArray(n),t.vertexAttribIPointer(n,e.numComponents||e.size,e.type||5124,e.stride||0,e.offset||0),void 0!==e.divisor&&t.vertexAttribDivisor(n,e.divisor)}}function zt(t,n){return function(e){if(e.value){if(t.disableVertexAttribArray(n),4!==e.value.length)throw new Error("The length of an unsigned integer constant value must be 4!");t.vertexAttrib4uiv(n,e.value)}else t.bindBuffer(ut,e.buffer),t.enableVertexAttribArray(n),t.vertexAttribIPointer(n,e.numComponents||e.size,e.type||5125,e.stride||0,e.offset||0),void 0!==e.divisor&&t.vertexAttribDivisor(n,e.divisor)}}function Tt(t,n,e){const r=e.size,o=e.count;return function(e){t.bindBuffer(ut,e.buffer);const i=e.size||e.numComponents||r,s=i/o,u=e.type||5126,a=yt[u].size*i,c=e.normalize||!1,f=e.offset||0,l=a/o;for(let r=0;r<o;++r)t.enableVertexAttribArray(n+r),t.vertexAttribPointer(n+r,s,u,c,a,f+l*r),void 0!==e.divisor&&t.vertexAttribDivisor(n+r,e.divisor)}}yt[5126]={Type:Float32Array,size:4,setter:function(t,n){return function(e){t.uniform1f(n,e)}},arraySetter:function(t,n){return function(e){t.uniform1fv(n,e)}}},yt[35664]={Type:Float32Array,size:8,setter:function(t,n){return function(e){t.uniform2fv(n,e)}},cols:2},yt[35665]={Type:Float32Array,size:12,setter:function(t,n){return function(e){t.uniform3fv(n,e)}},cols:3},yt[35666]={Type:Float32Array,size:16,setter:function(t,n){return function(e){t.uniform4fv(n,e)}},cols:4},yt[5124]={Type:Int32Array,size:4,setter:dt,arraySetter:pt},yt[35667]={Type:Int32Array,size:8,setter:ht,cols:2},yt[35668]={Type:Int32Array,size:12,setter:bt,cols:3},yt[35669]={Type:Int32Array,size:16,setter:At,cols:4},yt[5125]={Type:Uint32Array,size:4,setter:function(t,n){return function(e){t.uniform1ui(n,e)}},arraySetter:function(t,n){return function(e){t.uniform1uiv(n,e)}}},yt[36294]={Type:Uint32Array,size:8,setter:function(t,n){return function(e){t.uniform2uiv(n,e)}},cols:2},yt[36295]={Type:Uint32Array,size:12,setter:function(t,n){return function(e){t.uniform3uiv(n,e)}},cols:3},yt[36296]={Type:Uint32Array,size:16,setter:function(t,n){return function(e){t.uniform4uiv(n,e)}},cols:4},yt[35670]={Type:Uint32Array,size:4,setter:dt,arraySetter:pt},yt[35671]={Type:Uint32Array,size:8,setter:ht,cols:2},yt[35672]={Type:Uint32Array,size:12,setter:bt,cols:3},yt[35673]={Type:Uint32Array,size:16,setter:At,cols:4},yt[35674]={Type:Float32Array,size:32,setter:function(t,n){return function(e){t.uniformMatrix2fv(n,!1,e)}},rows:2,cols:2},yt[35675]={Type:Float32Array,size:48,setter:function(t,n){return function(e){t.uniformMatrix3fv(n,!1,e)}},rows:3,cols:3},yt[35676]={Type:Float32Array,size:64,setter:function(t,n){return function(e){t.uniformMatrix4fv(n,!1,e)}},rows:4,cols:4},yt[35685]={Type:Float32Array,size:32,setter:function(t,n){return function(e){t.uniformMatrix2x3fv(n,!1,e)}},rows:2,cols:3},yt[35686]={Type:Float32Array,size:32,setter:function(t,n){return function(e){t.uniformMatrix2x4fv(n,!1,e)}},rows:2,cols:4},yt[35687]={Type:Float32Array,size:48,setter:function(t,n){return function(e){t.uniformMatrix3x2fv(n,!1,e)}},rows:3,cols:2},yt[35688]={Type:Float32Array,size:48,setter:function(t,n){return function(e){t.uniformMatrix3x4fv(n,!1,e)}},rows:3,cols:4},yt[35689]={Type:Float32Array,size:64,setter:function(t,n){return function(e){t.uniformMatrix4x2fv(n,!1,e)}},rows:4,cols:2},yt[35690]={Type:Float32Array,size:64,setter:function(t,n){return function(e){t.uniformMatrix4x3fv(n,!1,e)}},rows:4,cols:3},yt[35678]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:at},yt[35680]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ct},yt[35679]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ft},yt[35682]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:at},yt[36289]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:lt},yt[36292]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:lt},yt[36293]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ct},yt[36298]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:at},yt[36299]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ft},yt[36300]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ct},yt[36303]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:lt},yt[36306]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:at},yt[36307]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ft},yt[36308]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:ct},yt[36311]={Type:null,size:0,setter:vt,arraySetter:gt,bindPoint:lt};const Mt={};Mt[5126]={size:4,setter:wt},Mt[35664]={size:8,setter:wt},Mt[35665]={size:12,setter:wt},Mt[35666]={size:16,setter:wt},Mt[5124]={size:4,setter:xt},Mt[35667]={size:8,setter:xt},Mt[35668]={size:12,setter:xt},Mt[35669]={size:16,setter:xt},Mt[5125]={size:4,setter:zt},Mt[36294]={size:8,setter:zt},Mt[36295]={size:12,setter:zt},Mt[36296]={size:16,setter:zt},Mt[35670]={size:4,setter:xt},Mt[35671]={size:8,setter:xt},Mt[35672]={size:12,setter:xt},Mt[35673]={size:16,setter:xt},Mt[35674]={size:4,setter:Tt,count:2},Mt[35675]={size:9,setter:Tt,count:3},Mt[35676]={size:16,setter:Tt,count:4};const St=/ERROR:\s*\d+:(\d+)/gi,Ct=/^[ \t]*\n/;function Pt(t){let n=0;return Ct.test(t)&&(n=1,t=t.replace(Ct,"")),{lineOffset:n,shaderSource:t}}function Et(t,n){return t.errorCallback(n),t.callback&&setTimeout((()=>{t.callback(`${n}\n${t.errors.join("\n")}`)})),null}function kt(t,n,e,r){const o=t.createShader(e);return t.shaderSource(o,Pt(n).shaderSource),t.compileShader(o),r.callback||function(t,n,e,r){r=r||ot;const o=t.getShaderParameter(e,35713);if(!o){const o=t.getShaderInfoLog(e),{lineOffset:i,shaderSource:s}=Pt(t.getShaderSource(e));r(`${function(t,n="",e=0){const r=[...n.matchAll(St)],o=new Map(r.map(((t,e)=>{const o=parseInt(t[1]),i=r[e+1],s=i?i.index:n.length;return[o-1,n.substring(t.index,s)]})));return t.split("\n").map(((t,n)=>{const r=o.get(n);return`${n+1+e}: ${t}${r?`\n\n^^^ ${r}`:""}`})).join("\n")}(s,o,i)}\nError compiling ${rt(t,n)}: ${o}`)}return o}(t,e,o,r.errorCallback)?o:(t.deleteShader(o),null)}function Ut(t,n,e){let r,o,i;if("function"==typeof n&&(e=n,n=void 0),"function"==typeof t)e=t,t=void 0;else if(t&&!Array.isArray(t)){if(t.errorCallback&&t.errors)return t;const n=t;e=n.errorCallback,t=n.attribLocations,r=n.transformFeedbackVaryings,o=n.transformFeedbackMode,i=n.callback}const s=e||ot,u=[],a={errorCallback(t,...n){u.push(t),s(t,...n)},transformFeedbackVaryings:r,transformFeedbackMode:o,callback:i,errors:u};if(t){let e={};Array.isArray(t)?t.forEach((function(t,r){e[t]=n?n[r]:r})):e=t,a.attribLocations=e}return a}const It=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ft(t,n){n.forEach((function(n){t.deleteShader(n)}))}const Bt=(t=0)=>new Promise((n=>setTimeout(n,t)));function Ot(t,n,e){e=e||ot;const r=t.getProgramParameter(n,35714);return r||e(`Error in program linking: ${t.getProgramInfoLog(n)}`),r}function $t(t,n,e,r,o){const i=Ut(e,r,o),s=[];for(let e=0;e<n.length;++e){const r=kt(t,n[e],t[It[e]],i);if(!i.callback&&!r)return null;s.push(r)}return function(t,n,e,r,o){const i=Ut(e,r,o),s=[],u=[];for(let e=0;e<n.length;++e){let r=n[e];if("string"==typeof r){const n=it(r),o=n?n.text:r;let s=t[It[e]];n&&n.type&&(s=((a=n.type).indexOf("frag")>=0?35632:a.indexOf("vert")>=0?35633:void 0)||s),r=kt(t,o,s,i),u.push(r)}"undefined"!=typeof WebGLShader&&r instanceof WebGLShader&&s.push(r)}var a;if(s.length!==n.length)return Ft(t,u),Et(i,"not enough shaders for program");const c=t.createProgram();s.forEach((function(n){t.attachShader(c,n)})),i.attribLocations&&Object.keys(i.attribLocations).forEach((function(n){t.bindAttribLocation(c,i.attribLocations[n],n)}));let f=i.transformFeedbackVaryings;return f&&(f.attribs&&(f=f.attribs),Array.isArray(f)||(f=Object.keys(f)),t.transformFeedbackVaryings(c,f,i.transformFeedbackMode||35981)),t.linkProgram(c),i.callback?(async function(t,n,e){const r=t.getExtension("KHR_parallel_shader_compile"),o=r?(t,n)=>t.getProgramParameter(n,r.COMPLETION_STATUS_KHR):()=>!0;let i=0;do{await Bt(i),i=1e3/60}while(!o(t,n));const s=Ot(t,n,e.errorCallback),u=s?void 0:e.errors.join("\n");s||((e.errorCallback||ot)(u),t.deleteProgram(n),n=null),e.callback(u,n)}(t,c,i),null):Ot(t,c,i.errorCallback)?c:(t.deleteProgram(c),Ft(t,u),null)}(t,s,i)}function Lt(t){const n=t.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const _t=/(\.|\[|]|\w+)/g;function jt(t,n,e,r){const o=t.split(_t).filter((t=>""!==t));let i=0,s="";for(;;){const t=o[i++];s+=t;const a=(u=t[0])>="0"&&u<="9",c=a?parseInt(t):t;if(a&&(s+=o[i++]),i===o.length){e[c]=n;break}{const t=o[i++],n="["===t,u=e[c]||(n?[]:{});e[c]=u,e=u,r[s]=r[s]||function(t){return function(n){Vt(t,n)}}(u),s+=t}}var u}function Rt(t,n){let e=0;function r(n,r,o){const i=r.name.endsWith("[0]"),s=r.type,u=yt[s];if(!u)throw new Error(`unknown type: 0x${s.toString(16)}`);let a;if(u.bindPoint){const n=e;e+=r.size,a=i?u.arraySetter(t,s,n,o,r.size):u.setter(t,s,n,o,r.size)}else a=u.arraySetter&&i?u.arraySetter(t,o):u.setter(t,o);return a.location=o,a}const o={},i={},s=t.getProgramParameter(n,35718);for(let e=0;e<s;++e){const s=t.getActiveUniform(n,e);if(Lt(s))continue;let u=s.name;u.endsWith("[0]")&&(u=u.substr(0,u.length-3));const a=t.getUniformLocation(n,s.name);if(a){const t=r(0,s,a);o[u]=t,jt(u,t,i,o)}}return o}function Vt(t,n){for(const e in n){const r=t[e];"function"==typeof r?r(n[e]):Vt(t[e],n[e])}}function Dt(t,...n){const e=t.uniformSetters||t,r=n.length;for(let t=0;t<r;++t){const r=n[t];if(Array.isArray(r)){const t=r.length;for(let n=0;n<t;++n)Dt(e,r[n])}else for(const t in r){const n=e[t];n&&n(r[t])}}}function Nt(t,n){const e={},r=t.getProgramParameter(n,35721);for(let o=0;o<r;++o){const r=t.getActiveAttrib(n,o);if(Lt(r))continue;const i=t.getAttribLocation(n,r.name),s=Mt[r.type],u=s.setter(t,i,s);u.location=i,e[r.name]=u}return e}function Wt(t,n,e){e.vertexArrayObject?t.bindVertexArray(e.vertexArrayObject):(function(t,n){for(const e in n){const r=t[e];r&&r(n[e])}}(n.attribSetters||n,e.attribs),e.indices&&t.bindBuffer(34963,e.indices))}function Gt(t,n){const e={program:n,uniformSetters:Rt(t,n),attribSetters:Nt(t,n)};return et(t)&&(e.uniformBlockSpec=function(t,n){const e=t.getProgramParameter(n,35718),r=[],o=[];for(let i=0;i<e;++i){o.push(i),r.push({});const e=t.getActiveUniform(n,i);r[i].name=e.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach((function(e){const i=e[0],s=e[1];t.getActiveUniforms(n,o,t[i]).forEach((function(t,n){r[n][s]=t}))}));const i={},s=t.getProgramParameter(n,35382);for(let e=0;e<s;++e){const r=t.getActiveUniformBlockName(n,e),o={index:t.getUniformBlockIndex(n,r),usedByVertexShader:t.getActiveUniformBlockParameter(n,e,35396),usedByFragmentShader:t.getActiveUniformBlockParameter(n,e,35398),size:t.getActiveUniformBlockParameter(n,e,35392),uniformIndices:t.getActiveUniformBlockParameter(n,e,35395)};o.used=o.usedByVertexShader||o.usedByFragmentShader,i[r]=o}return{blockSpecs:i,uniformData:r}}(t,n),e.transformFeedbackInfo=function(t,n){const e={},r=t.getProgramParameter(n,35971);for(let o=0;o<r;++o){const r=t.getTransformFeedbackVarying(n,o);e[r.name]={index:o,type:r.type,size:r.size}}return e}(t,n)),e}const Ht=/\s|{|}|;/;function Xt(t,n,e,r,o){const i=Ut(e,r,o),s=[];if(n=n.map((function(t){if(!Ht.test(t)){const n=it(t);if(n)t=n.text;else{const n=`no element with id: ${t}`;i.errorCallback(n),s.push(n)}}return t})),s.length)return Et(i,"");const u=i.callback;u&&(i.callback=(n,e)=>{let r;n||(r=Gt(t,e)),u(n,r)});const a=$t(t,n,i);return a?Gt(t,a):null}function Yt(t,n,e,r,o,i){e=void 0===e?4:e;const s=n.indices,u=n.elementType,a=void 0===r?n.numElements:r;o=void 0===o?0:o,u||s?void 0!==i?t.drawElementsInstanced(e,a,void 0===u?5123:n.elementType,o,i):t.drawElements(e,a,void 0===u?5123:n.elementType,o):void 0!==i?t.drawArraysInstanced(e,o,a,i):t.drawArrays(e,o,a)}const qt=36096,Kt=33306,Zt={};Zt[34041]=Kt,Zt[6401]=36128,Zt[36168]=36128,Zt[6402]=qt,Zt[33189]=qt,Zt[33190]=qt,Zt[36012]=qt,Zt[35056]=Kt,Zt[36013]=Kt;const Jt={};function Qt(t,n){n=n||1,n=Math.max(0,n);const e=t.clientWidth*n|0,r=t.clientHeight*n|0;return(t.width!==e||t.height!==r)&&(t.width=e,t.height=r,!0)}Jt[32854]=!0,Jt[32855]=!0,Jt[36194]=!0,Jt[34041]=!0,Jt[33189]=!0,Jt[6401]=!0,Jt[36168]=!0}}]);
//# sourceMappingURL=twgl-full-module.bundle.js.map