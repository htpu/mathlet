import { n, s as sel } from '../types';
import { vfield2d } from '../../templates/vfield2d';
const fields:Record<string,(p:any)=>(x:number,y:number)=>[number,number]>={
  source:p=>(x,y)=>[(p.k as number)*x,(p.k as number)*y],
  rotation:p=>(x,y)=>[-(p.k as number)*y,(p.k as number)*x],
  shear:p=>(x,y)=>[(p.k as number)*y, 0],
  saddle:p=>(x,y)=>[(p.k as number)*x, -(p.k as number)*y],
};
export default vfield2d({
  meta:{slug:'div-curl',title:'散度与旋度',domain:'vectorfield',level:4,tex:'\\nabla\\cdot F,\\nabla\\times F',blurb:'源/旋/剪/鞍 4 类原型场。'},
  params:[sel('field','场','rotation',[{value:'source',label:'径向源'},{value:'rotation',label:'旋转'},{value:'shear',label:'剪切'},{value:'saddle',label:'鞍'}]), n('k','强度 k',1,-2,2,0.01)],
  field:p=>fields[p.field as string](p),
  view:{cx:0,cy:0,scale:30},
});
