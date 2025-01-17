import { useNavigate } from "react-router-dom";
import { useScrollTop } from "../components/UseScrollTop";
import { Footer } from "../components/Footer";

export const Contract = () => {
  useScrollTop();
  const navigate = useNavigate();

  return (
    <>
      <main className="main"
        style={{height : "100%"}}
      >
        <article className="content-wrap">
          <section className="content-header">
            <h2>개인 약관 이용 및 정책</h2>
          </section>

          <section className="content-body" 

            >

            <div
              style={{ 
                padding:"1rem 0.8rem",
                overflow:"scroll",
                height:`calc(60vh)`,
                background:"#f5f5f5",
                whiteSpace: "pre-wrap",
                marginTop:"20px",
                }}
            >

            <h3>제1장 총 칙</h3>
            <h4>제1조 (목적)</h4>
            <p>
              이 약관(이하 “약관”이라 합니다)은 ㈜좀쉼쉼(이하 “회사”라 합니다)와 이용 고객(이하 “회원”이라 합니다)간에 회사가 제공하는 서비스(이하 “서비스”라 합니다)를 이용함에 있어 회원과 회사간의 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
            </p>
  <br />
            <h4>제2조 (용어의 정의)</h4>
            <p>
              본 약관에서 사용되는 용어의 정의는 다음과 같습니다.
              <br />
              (1) “서비스” : 회사가 제공하는 여가(숙박∙레저∙티켓∙클래스 등으로 이에 한정되지 않음) 관련 상품∙용역∙서비스 등(이하 “상품등”이라 합니다)에 대한 예약∙구매∙정보제공∙추천 등을 위한 온라인 플랫폼 서비스를 의미합니다. 서비스는 구현되는 장치나 단말기(PC, TV, 휴대형 단말기 등의 각종 유무선 장치를 포함하며 이에 한정되지 않음)와 상관 없이 좀쉼쉼 및 좀쉼쉼 관련 웹(Web)∙앱(App) 등의 제반 서비스를 의미하며, 회사가 공개한 API를 이용하여 제3자가 개발 또는 구축한 프로그램이나 서비스를 통하여 이용자에게 제공되는 경우를 포함합니다. 서비스는 여가 문화가 변하고 기술이 발전함에 따라 지속적으로 함께 변화∙성장해 나갑니다.
              <br />
              (2) “회원” : 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말하며, 회원계정(ID/PW)을 생성하지 않은 일반 고객(일명 비회원 고객)도 포함됩니다. 단, 회사는 별도 정책에 따라 회원에게 등급을 부여할 수 있고, 각 등급별로 혜택을 제공할 수 있습니다.
              <br />
              (3) “판매자” : 회사가 제공하는 서비스를 이용하여 자신의 상품∙용역∙서비스 등을 판매하는 자를 의미하며, 회사로부터 예약∙판매 대행, 광고 서비스 등을 제공받는 자를 말합니다.
              <br />
              (4) “게시물” : 회원 및 이용 고객이 서비스에 게시 또는 등록하는 부호(URL 포함), 문자, 음성, 음향, 영상(동영상 포함), 이미지(사진 포함), 파일 등을 말합니다.
              <br />
              (5) “쿠폰” : 회원이 서비스를 이용할 때 표시된 금액 또는 비율만큼 이용 금액을 할인 받을 수 있는 할인권∙우대권 등(온라인∙모바일∙오프라인 등 형태를 불문)를 말합니다. 쿠폰의 종류 및 내용은 회사의 정책에 따라 달라질 수 있습니다.
              <br />
              (6) “포인트” : 회사가 회원의 서비스 이용에 따른 혜택 또는 서비스 이용상 편의를 위해 회원에게 제공하는 것으로서 서비스 내 상품 등 결제시 활용할 수 있는 수치화 된 가상의 데이터를 말합니다. 구체적인 이용 방법, 그 명칭(예: 마일리지 등) 및 현금 환급가능성 등은 회사의 정책에 따라 달라질 수 있습니다.
              <br />
              (7) "좀쉼쉼 코인" : 포인트로 교환하여 사용할 수 있는 수치화 된 가상의 데이터를 말합니다. 구체적인 이용 방법, 그 명칭 등은 회사의 정책에 따라 달라질 수 있습니다.
            </p>
            <br />
            <h4>제3조 (약관의 효력 및 변경)</h4>
            <p>
              ① 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생하며, 본 약관에 동의하지 않거나 본 약관을 준수하지 않는 경우 회사의 웹 ∙ 앱에 대한 접근 및 모든 서비스의 이용은 금지됩니다. 단, 일부 특정 서비스의 경우 본 약관이 아닌 회사에 해당 서비스를 제공하는 사업자의 약관이 적용됩니다(자세한 안내는 각 서비스 영역에 별도 표시).
              <br />
              ② 회원은 회사의 웹 ∙ 앱에 접근하여 서비스를 이용할 경우 본 약관 및 관련 운영 정책을 확인하고 준수하여야 하며, 회사는 회원이 서비스 이용 시 약관을 확인할 수 있도록 회사 홈페이지 또는 앱 내의 서비스 초기 하단 화면 등에 본 약관을 게시하여야 합니다.
              <br />
              ③ 회사는 『약관의 규제에 관한 법률』, 『전자상거래 등에서의 소비자보호에 관한 법률』, 『정보통신망 이용촉진 및 정보보호(이하 “정보통신망법”이라 합니다)』,  『소비자기본법』, 『전자문서 및 전자거래 기본법』 등 관련법에 위배되지 않는 범위 내에서 본 약관을 개정할 수 있습니다.
              <br />
              ④ 회사가 약관을 변경할 경우에는 적용일자, 변경사유를 명시하여 적용일로부터 7일 이전부터 공지합니다. 다만, 회원에게 불리한 약관 변경인 경우에는 그 적용일로부터 30일전부터 위와 같은 방법으로 공지하고, E-mail 등으로 회원에게 개별 통지합니다. 단, 회원의 연락처 미기재, 변경 후 미수정 등으로 인하여 개별 통지가 어려운 경우 공지를 개별 통지로 간주합니다.
              <br />
              ⑤ 회사가 제4항에 따라 개정약관을 공지 또는 통지하면서, 회원에게 약관 변경 적용일 까지 거부의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 회원이 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하는 경우 회원이 개정약관에 동의한 것으로 간주합니다.
              <br />
              ⑥ 회원은 변경된 약관에 동의하지 아니하는 경우 서비스의 이용을 중단하고 이용계약을 해지할 수 있습니다.
              <br />
              ⑦ 회원은 약관 변경에 대하여 주의의무를 다하여야 하며, 변경된 약관의 부지로 인한 회원의 피해는 회사가 책임지지 않습니다.
            </p>
            <br />
            <h4>제4조 (약관 외 준칙 및 관련법령과의 관계)</h4>
            <p>
              ① 본 약관 또는 개별약관에서 정하지 않은 사항은 『전기통신사업법』, 『전자문서 및 전자거래 기본법』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『전자상거래 등에서의 소비자보호에 관한 법률』, 『개인정보보호법』 등 관련 법의 규정 및 회사가 정한 서비스의 세부이용지침 등의 규정에 따릅니다. 또한 본 약관에서 정한 회사의 책임 제한 규정은 관련 법령이 허용하는 최대한도의 범위 내에서 적용됩니다.
              <br />
              ② 회사는 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙을 정할 수 있으며, 본 약관과 개별약관 또는 운영원칙의 내용이 상충되는 경우에는 개별약관 또는 운영원칙을 내용이 우선 적용됩니다.
            </p>
            <br /><br />
            <h3>제2장 이용계약의 체결</h3>
            <br />
            <h4>제5조 (이용계약의 성립)</h4>
            <p>
              ① 이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 약관의 내용에 동의를 하고, 회사가 정한 가입 양식에 따라 회원정보를 기입하여 회원가입신청을 하고 회사가 이러한 신청에 대하여 승인함으로써 체결됩니다.
              <br />
              ② 회원은 다수의 아이디(ID)를 생성하여 사용할 수 있으나, 본인인증이 필요한 일부 서비스의 경우, 단일한 휴대폰번호로 하나의 아이디(ID)로만 가입, 이용할 수 있습니다.
              <br />
              ③ 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
              <br />
              1. 가입신청서의 내용을 허위로 기재하거나 기재누락 및 오기가 있는 경우
              <br />
              2. 가입신청자가 이전에 회원 자격을 상실한 적이 있는 경우. 다만, 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함
              <br />
              3. 부정한 용도 또는 영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우
              <br />
              4. 본 서비스와 경쟁관계에 있는 자가 신청하는 경우
              <br />
              5. 기타 본 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우, 회사는 이를 승낙하지 아니할 수 있습니다.
              <br />
              ④ 제1항에 따른 신청에 있어 회사는 전문기관을 통한 회원의 실명확인 및 본인인증을 요청할 수 있습니다.
              <br />
              ⑤ 회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.
              <br />
              ⑥ 회사가 회원가입 신청을 승인하지 아니하거나 유보한 경우, 회사는 원칙적으로 이를 가입신청자에게 알리도록 합니다.
              <br />
              ⑦ 이용계약의 성립 시기는 회사가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.
            </p>
            <br />
            <h4>제6조 (이용계약의 종료)</h4>
            <p>
              ① 회원의 해지
              <br />
              1. 회원은 언제든지 회사에게 해지의사를 통지함으로써 이용계약을 해지할 수 있습니다. 이용계약은 회원의 해지의사가 회사에 도달한 때에 종료됩니다.
              <br />
              2. 회원이 계약을 해지하는 경우, 회원이 작성한 게시물 등은 삭제되지 않으니 사전에 삭제 후 탈퇴하시기 바랍니다.
              <br />
              ② 회사의 해지
              <br />
              1. 회사는 다음과 같은 사유가 발생하거나 확인된 경우 이용계약을 해지할 수 있습니다.
              <br />
              - 회원이 법령 또는 본 약관의 의무를 위반하거나, 공서양속에 반하는 행위를 한 경우
              <br />
              - 회원이 제5조 제3항의 승낙거부 사유가 있음이 확인된 경우
              <br />
              2. 회사가 해지하는 경우 회사는 회원에게 이메일, 전화, 기타의 방법을 통하여 해지사유를 밝혀 해지의사를 통지합니다. 이 경우 회사는 해당 회원에게 사전에 해지사유에 대한 의견진술의 기회를 부여할 수 있습니다.
              <br />
              3. 이용계약은 회사의 해지의사가 회원에게 도달한 때에 종료됩니다.
              <br />
              4. 본 항에서 정한 바에 따라 해지를 한 회사는 회원에게 별도의 통지 없이도 이용계약의 해지와 동시에 회원과 관련된 모든 정보를 삭제할 수 있습니다.
            </p>
            <br />
            <h4>제7조 (회원에 대한 통지)</h4>
            <p>
              ① 회사가 회원에 대한 통지를 하는 경우 회원이 지정한 이메일주소 또는 SMS 등으로 할 수 있습니다.
              <br />
              ② 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 회사의 웹사이트 또는 앱 내의 공지사항 등에 게시함으로써 개별 통지에 갈음할 수 있습니다.
            </p>
            <br />
            <h4>제8조 (회원정보의 변경)</h4>
            <p>
              ① 회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.
              <br />
              ② 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 이메일 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.
              <br />
              ③ 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
            </p>
          </div>
          </section>
          <p
            style={{
              marginTop:"20px"
            }}
          >위와 같은 내용을 준수하고 있습니다.</p>
        <button
            style={{ marginBottom: "20px" }}
            className="content-back-btn"
            onClick={() => navigate('/mypage')}
            >
            뒤로
          </button>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Contract;
