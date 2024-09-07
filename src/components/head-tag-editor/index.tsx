import { Helmet } from 'react-helmet-async';
import { isDarkishTheme } from '../../utils';

type HeadTagEditorProps = {
  googleAnalyticsId?: string;
  appliedTheme: string;
};

const HeadTagEditor: React.FC<HeadTagEditorProps> = ({
  googleAnalyticsId,
  appliedTheme,
}) => {
  return (
    <Helmet>
      <meta
        name="theme-color"
        content={isDarkishTheme(appliedTheme) ? '#000000' : '#ffffff'}
      />
      {googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
`}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default HeadTagEditor;
