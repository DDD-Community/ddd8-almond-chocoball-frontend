import React from 'react';
import GoodBadCount from '../../components/MyPageDetail/GoodBadCount';
import styles from './MyPageDetail.module.css';
import { TagList } from '../../components/common/Tags';
function MyPageDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          이번주에 여행가는데 어떤 스타일이 제일 괜찮나요?
        </div>

        <div className={styles.goodBadCountContainer}>
          <GoodBadCount goodOrBad="good" count={2000} />
          <GoodBadCount goodOrBad="bad" count={2000} />
        </div>

        <div className={styles.tagListContainer}>
          <TagList textList={['여행', '여행', '여행', '여행', '여행']} />
        </div>

        <div className={styles.mainTextContainer}>
          이번주에 친구들이랑 강릉 여행가는데 어떤 옷을 입을지 고민되네여,,,
          이렇게 입고 가면 추울까요? 1번 룩과 2번 룩 중에 골라주세요. 최대 4줄로
          할까? 글자 수 100자로 제한?
        </div>
      </div>
    </div>
  );
}

export default MyPageDetail;
