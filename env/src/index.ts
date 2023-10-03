// unknown
/**
 * 타입을 미리 알 수 없는 어떤 값이 있을 때 any 대신 unknown을 사용
 * 타입을 검사해 정재(refine)하기 전까지 타입스크립트가 unknown타입의 값을 사용하지 못하도록 강제한다.
 * (==, ===, ||, &&, ?, !) 연산을 지원한다.
 */
const a: unknown = 30;
const b = a === 123;
// const c = a + 10;

if (typeof a === 'number') {
  const d = a + 10;
}
