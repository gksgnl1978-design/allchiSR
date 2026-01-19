
import { CaseData, ThemeType } from './types';

export const CASE_STUDIES: CaseData[] = [
  {
    id: 'case-1',
    theme: ThemeType.STRAWBERRY,
    duration: '3개월 복용',
    weightLoss: '-12.4kg 감량',
    weightChange: {
      from: '78.5kg',
      to: '66.1kg'
    },
    stats: [
      { label: '체지방량', change: '-8.2kg', percentage: 45, colorClass: 'bg-pink-400' },
      { label: '골격근량', change: '+1.1kg', percentage: 75, colorClass: 'bg-emerald-400' }
    ],
    patient: {
      name: '김OO',
      age: 32,
      job: '직장인'
    },
    testimonial: '잦은 회식과 야식 때문에 몸무게가 인생 최대치를 찍고 한의원을 찾았습니다. 처음엔 한약 특유의 향이 걱정이었는데, 크기가 작고 냄새가 거의 없어서 목넘김이 정말 편했어요. 무엇보다 신기했던 건 식욕이 자연스럽게 줄어든다는 점이었습니다. 스트레스 없이 체지방 위주로 쏙쏙 빠져서 현재도 아주 만족스럽게 유지 중입니다.'
  },
  {
    id: 'case-2',
    theme: ThemeType.GRAPE,
    duration: '3개월 복용',
    weightLoss: '-7.5kg 감량',
    weightChange: {
      from: '62.3kg',
      to: '54.8kg'
    },
    stats: [
      { label: '체지방량', change: '-5.8kg', percentage: 38, colorClass: 'bg-purple-400' },
      { label: '골격근량', change: '-0.2kg', percentage: 62, colorClass: 'bg-gray-300' }
    ],
    patient: {
      name: '이OO',
      age: 28,
      job: '취준생'
    },
    testimonial: '취업 준비하면서 활동량은 줄고 군것질만 늘어나서 살이 갑자기 쪘었어요. 다른 다이어트 약들은 가슴이 두근거리거나 잠이 안 와서 힘들었는데, 올치환은 저한테 정말 잘 맞았습니다. 내원할 때마다 꼼꼼하게 상담해주셔서 끝까지 완주할 수 있었어요. 이제는 예전에 입던 옷들이 다 커져서 쇼핑하는 재미로 살고 있습니다!'
  },
  {
    id: 'case-3',
    theme: ThemeType.STRAWBERRY,
    duration: '4개월 복용',
    weightLoss: '-15.2kg 감량',
    weightChange: {
      from: '85.0kg',
      to: '69.8kg'
    },
    stats: [
      { label: '체지방량', change: '-11.5kg', percentage: 55, colorClass: 'bg-pink-400' },
      { label: '골격근량', change: '+0.8kg', percentage: 68, colorClass: 'bg-emerald-400' }
    ],
    patient: {
      name: '박OO',
      age: 52,
      job: '주부'
    },
    testimonial: '나이가 드니 예전만큼 굶어도 살이 안 빠지더라고요. 건강을 위해서라도 감량이 시급했는데 원장님 덕분에 큰 도움 받았습니다. 무엇보다 몸이 가볍고 좋아진 느낌입니다. 무릎 통증도 줄어들고 혈색이 좋아졌다는 소리를 자주 듣습니다. 단순한 미용 목적을 넘어 제 건강을 되찾아준 소중한 경험이었습니다.'
  }
];
