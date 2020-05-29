import PropTypes from "prop-types";
import HistogramContainer from "../addons/HistogramContainer";
import "./WunderSlider.css";
import React from "react";
import Rheostat from "rheostat";

const propTypes = {
  showHistogram: PropTypes.bool,
  onChange: PropTypes.func,
  histogramRange: PropTypes.array,
  currentMinValue: PropTypes.number,
  currentMaxValue: PropTypes.number,
  maxCount: PropTypes.number,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  values: PropTypes.array.isRequired,
};

const WunderSlider = ({
  showHistogram,
  onChange,
  histogramRange,
  currentMinValue,
  currentMaxValue,
  maxCount,
  minValue,
  maxValue,
  values,
}) => {
  const sliderAlgorithm = {
    getPosition(value, min, max) {
      if (value < min) {
        return 0;
      }
      if (value > max) {
        return 100;
      }

      let currMin = min;
      let currMax = max;
      let currItemIndex = 0;
      const barWidth = 100 / histogramRange.length;
      for (let i = histogramRange.length - 1; i >= 0; i--) {
        if (value > histogramRange[i].price) {
          currMin = histogramRange[i].price;
          currMax = histogramRange[i + 1].price;
          currItemIndex = i;
          break;
        }
      }

      const currPosInBar = (value - currMin) / (currMax - currMin);
      const relativePos = barWidth * currPosInBar;
      const res = currItemIndex * barWidth + relativePos;
      return res;
    },
    getValue(pos, min, max) {
      const decimal = pos / 100;

      if (pos === 0) {
        return min;
      }

      if (pos === 100) {
        return max;
      }

      if (showHistogram) {
        const barWidth = 100 / histogramRange.length;
        const rangeIndex = Math.floor(pos / barWidth); // get the index of the current element in the range array
        const leftStart = rangeIndex * barWidth; // left % position of the current bar
        const positionInBar = (pos - leftStart) / barWidth; // slider % position inside current bar (0...1)
        const lastIndex = histogramRange.length - 1;
        console.log(rangeIndex, lastIndex);
        const priceRange =
          rangeIndex < lastIndex
            ? histogramRange[rangeIndex + 1].price -
              histogramRange[rangeIndex].price
            : max - histogramRange[lastIndex].price; // Price range current bar represents
        // Calculate priceDifference: priceRange relative to positionInBar
        const priceDifference = priceRange * positionInBar;
        // Add priceDifference to current bar price, this is our result
        const currentPrice = histogramRange[rangeIndex].price + priceDifference;
        return Math.round(currentPrice);
      }

      return Math.round((max - min) * decimal + min);
    },
  };
  return (
    <div>
      {showHistogram && (
        <HistogramContainer
          range={histogramRange}
          currentMinValue={currentMinValue}
          currentMaxValue={currentMaxValue}
          maxCount={maxCount}
        />
      )}
      <Rheostat
        values={values}
        min={minValue}
        max={maxValue}
        onValuesUpdated={onChange}
        algorithm={sliderAlgorithm}
      />
    </div>
  );
};

WunderSlider.propTypes = propTypes;

export default WunderSlider;
