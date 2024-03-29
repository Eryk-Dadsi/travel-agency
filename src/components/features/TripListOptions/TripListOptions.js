import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.scss';

import { Row, Col } from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag, checked) {


    if (checked) {
      this.props.filters.tags.push(tag);
      this.props.changeSearchTags(this.props.filters.tags);
    } else {
      const tagIndex = this.props.filters.tags.indexOf(tag);
      this.props.filters.tags.splice(tagIndex, 1);
      this.props.changeSearchTags(this.props.filters.tags);
    }
  }

  handleDuration(type, value) {

    let duration = {};

    if (type == 'from') {
      duration = {
        from: Number(value),
        to: this.props.filters.duration.to,
      };
    } else if (type == 'to') {
      duration = {
        from: this.props.filters.duration.from,
        to: Number(value),
      };
    }

    this.props.changeSearchDuration(duration);
  }

  handleSearch(phrase) {
    this.props.changeSearchPhrase(phrase);
  }

  render() {
    const { tags, filters } = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max='14' onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min='1' max='14' onChange={event => this.handleDuration('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  tags: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  changeSearchDuration: PropTypes.func,
  changeSearchTags: PropTypes.func,
};

export default TripListOptions;
