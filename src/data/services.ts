export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: 'detailed-cleaning',
    title: '裝潢後細緻清潔',
    subtitle: '比屋主更在意角落',
    description:
      '針對裝潢完工後殘留的細微粉塵、抽屜軌道、五金夾縫、矽利康邊條徹底處理，讓設計師辛苦規劃的細節，能以最乾淨的樣貌呈現給屋主。',
    features: [
      '微塵粉塵全面清除',
      '抽屜軌道與五金夾縫',
      '矽利康邊條清潔',
      '玻璃、鋁窗擦拭',
      '廚衛設備細清',
      '燈具開關清潔',
    ],
    icon: 'sparkles',
  },
  {
    id: 'material-care',
    title: '建材特殊處理',
    subtitle: '熟悉昂貴建材，精準選用工法',
    description:
      '對石材、進口五金、特殊木皮、超耐磨地板、不鏽鋼、烤漆面板等高價建材，使用對應的清潔藥劑與工法，避免錯用造成損傷。',
    features: [
      '天然石材清潔',
      '進口五金保養',
      '特殊木皮處理',
      '超耐磨地板維護',
      '不鏽鋼拋光',
      '烤漆面板清理',
    ],
    icon: 'gem',
  },
  {
    id: 'protection-removal',
    title: '保護工程拆除',
    subtitle: '完整撤除，無殘膠不留痕',
    description:
      '完工後負責撤除地坪、牆面、門框、衛浴等保護工程，並進行殘膠清除與邊角處理，還原乾淨建材表面，讓屋主直接入住。',
    features: [
      '地坪保護板拆除',
      '牆面護角拆除',
      '門框、踢腳板保護撤除',
      '殘膠專業清除',
      '邊角細部處理',
      '保護材料回收',
    ],
    icon: 'shield',
  },
  {
    id: 'waste-removal',
    title: '廢棄物清運',
    subtitle: '還原乾淨空間',
    description:
      '協助清運工地剩餘料件、保護材、包裝紙箱與一般垃圾，依規定分類處理，讓現場淨空，避免影響後續驗收與入厝。',
    features: [
      '工地廢料清運',
      '保護材回收',
      '包裝箱、紙板處理',
      '一般垃圾清運',
      '依規定分類',
      '當日清運不留宿',
    ],
    icon: 'trash',
  },
  {
    id: 'stone-care',
    title: '石材美容維護',
    subtitle: '專業養護，提升空間質感',
    description:
      '針對大理石、花崗石、人造石、磐多魔等地坪與檯面提供晶化、研磨、結晶處理，恢復原有光澤，提升整體質感。',
    features: [
      '大理石晶化研磨',
      '花崗石結晶處理',
      '人造石拋光',
      '磐多魔養護',
      '黃斑、水痕去除',
      '長期保養計畫',
    ],
    icon: 'layers',
  },
  {
    id: 'disinfection',
    title: '環境消毒',
    subtitle: '專業消毒，打造安心健康空間',
    description:
      '針對辦公室、商場、工廠、住宅等空間提供專業消毒服務，有效滅菌防疫，維護健康安全的生活與工作環境。',
    features: [
      '辦公室全面消毒',
      '商場公共區域消毒',
      '工廠廠房殺菌',
      '冷氣出風口消毒',
      '細菌病毒防治',
      '定期消毒排程',
    ],
    icon: 'shield-check',
  },
  {
    id: 'floor-waxing',
    title: '洗地打蠟',
    subtitle: '恢復地板光澤，延長使用壽命',
    description:
      '專業洗地機具搭配適合各材質的清潔劑，徹底去除頑固污垢，再施以高品質蠟膜保護，讓地板重現亮麗光澤。',
    features: [
      '拋光石英磚洗地',
      '木地板維護',
      '環氧樹脂地板清潔',
      '打蠟護膜處理',
      '頑固污垢去除',
      '防滑處理',
    ],
    icon: 'spray-can',
  },
  {
    id: 'carpet-cleaning',
    title: '地毯清潔',
    subtitle: '深層去污，消除異味過敏原',
    description:
      '採用專業地毯蒸洗設備，深層清除塵蟎、細菌、頑固污漬，有效消除異味，還原地毯的乾淨與舒適。',
    features: [
      '高溫蒸汽殺菌',
      '深層污漬去除',
      '塵蟎防治',
      '異味消除',
      '速乾處理',
      '地毯維護保養',
    ],
    icon: 'brush',
  },
  {
    id: 'stationed-cleaner',
    title: '社區與商辦清潔員派駐',
    subtitle: '專人駐點，持續維護整潔',
    description:
      '為社區管委會、大樓物業、商辦企業提供專業清潔人員長期駐點服務，按排程維護公共區域，讓住戶與員工每日享有乾淨舒適的環境。',
    features: [
      '每日定時清潔',
      '公共走廊維護',
      '電梯清潔消毒',
      '停車場清潔',
      '垃圾場管理',
      '緊急清潔支援',
    ],
    icon: 'users',
  },
];
