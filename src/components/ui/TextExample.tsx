import { Text } from "./text";

// Text 컴포넌트 사용 예시
export default function TextExample() {
  return (
    <div className="p-8 space-y-6 bg-gray-900">
      {/* Display 타입 */}
      <Text type="display">Display Text</Text>

      {/* 헤딩 타입들 */}
      <Text type="h1">Heading 1</Text>
      <Text type="h2">Heading 2</Text>
      <Text type="h3">Heading 3</Text>
      <Text type="h4">Heading 4</Text>

      {/* 제목 및 부제목 */}
      <Text type="title">Title Text</Text>
      <Text type="subtitle1">Subtitle 1</Text>
      <Text type="subtitle2">Subtitle 2</Text>

      {/* 본문 텍스트 */}
      <Text type="body1">
        Body 1 텍스트입니다. 일반적인 본문에 사용되는 스타일입니다.
      </Text>
      <Text type="body2">
        Body 2 텍스트입니다. 좀 더 작은 본문에 사용됩니다.
      </Text>

      {/* 강조 텍스트 */}
      <Text type="accent">Accent Text</Text>

      {/* 작은 텍스트들 */}
      <Text type="caption">Caption text</Text>
      <Text type="small">Small text</Text>

      {/* 커스텀 스타일 예시 */}
      <Text
        type="body1"
        fontWeight="bold"
        color="#ff6b6b"
        className="border-l-4 border-red-500 pl-4"
      >
        커스텀 스타일이 적용된 텍스트
      </Text>

      {/* as prop 사용 예시 */}
      <Text type="h2" as="span">
        h2 스타일이지만 span 태그로 렌더링
      </Text>
    </div>
  );
}
