// Discovery only: a title match never proves seniority, degree or Taiwan eligibility.
export const ROLE_FILTER_VERSION='2026-11-12-expanded-v1';
const families=[
 ['it_support',/\bIT\b|help[ -]?desk|service[ -]?desk|desktop support|technical support|product support|application support|implementation|technical operations|資訊|技術支援|情シス|テクニカルサポート/i],
 ['software',/software (engineer|developer)|\b(developer|programmer)\b|frontend|front.end|backend|back.end|full.stack|graduate.*engineer|junior.*engineer|ソフトウェア|プログラマ|開発エンジニア/i],
 ['customer',/customer (support|service|success|care|experience|advocate)|client (support|success|services)|onboarding|カスタマー|顧客|客服|客戶成功/i],
 ['operations',/operations?|coordinator|coordination|project assistant|administrative|business support|programme? assistant|營運|營運支援|協調|コーディネーター|運営/i],
 ['games_quality',/player (support|experience|engagement)|game (support|operations|tester)|gaming support|quality assurance|\bQA\b|locali[sz]ation|community (support|moderator|manager)|trust.{0,5}safety|遊戲|ゲーム|テスター/i]
];
const senior=/\b(senior|sr\.?|staff|principal|director|head of|vice president|vp|chief|lead)\b|資深|主管|シニア/i;
const peopleManager=/\b(engineering|support|operations?|project|program|programme|product|sales) manager\b|manager[, -]+customer success|manager of|team manager/i;
export function roleDecision(title=''){
 const matched=families.filter(([,re])=>re.test(title)).map(([name])=>name);
 if(!matched.length)return {relevant:false,families:[],reason:'outside_discovery_role_families'};
 if(senior.test(title)||peopleManager.test(title))return {relevant:false,families:matched,reason:'explicit_seniority_or_people_management'};
 return {relevant:true,families:matched,reason:'candidate_for_requirement_review',seniority_unverified:true};
}
export const relevant=title=>roleDecision(title).relevant;
