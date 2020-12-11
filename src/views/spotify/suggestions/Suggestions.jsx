import React, { useState, useEffect } from 'react';
import { fetchSuggestions } from '../../../services/spotifyservice';
import { Suggestion, DefaultErrorMessage } from '../../common';
import './style.css';

import { Spinner } from '../../common';
import useDataHook from '../../../hooks/useDataHook';

function Suggestions() {
  const [baseContent, setBaseContent] = '';
  const [suggestionsRequest, setSuggestionsRequest] = useState(() => () =>
    fetchSuggestions(baseContent),
  );
  const { data: suggestions, isLoading, hasError } = useDataHook(suggestionsRequest);

  useEffect(() => {
    if (baseContent !== '') {
      setSuggestionsRequest(() => () => fetchSuggestions(baseContent));
    }
  }, [baseContent]);

  if (hasError) return <DefaultErrorMessage />;
  if (!suggestions > 0 && isLoading !== false) return <Spinner />;

  const renderSuggestions = () => {
    return suggestions.map((suggestion, index) => {
      return Suggestion(suggestion, index);
    });
  };

  return (
    <div className="suggestions">
      <h1 className="site-title">Let us show you songs you might like!</h1>

      <div className="suggestions-content">{renderSuggestions()}</div>
    </div>
  );
}

export default Suggestions;
