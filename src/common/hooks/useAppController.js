import { useEffect, useMemo, useState } from 'react';

/**
 * Simple controller for admin app layout/sidebar.
 * Keeps track of:
 * - active menu key
 * - collapsed state (optional)
 */
export default function useAppController({ initialKey = '', keys = [] } = {}) {
  const allowedKeys = useMemo(() => new Set(keys), [keys]);
  const [activeKey, setActiveKey] = useState(() => {
    if (initialKey && allowedKeys.has(initialKey)) return initialKey;
    return keys?.[0] || '';
  });


  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Keep activeKey in sync with initialKey without triggering state updates
    if (!initialKey) return;
    if (!allowedKeys.has(initialKey)) return;

    setActiveKey((prev) => (prev === initialKey ? prev : initialKey));
  }, [initialKey, allowedKeys]);


  const select = (nextKey) => {
    if (!nextKey) return;
    if (!allowedKeys.size || allowedKeys.has(nextKey)) setActiveKey(nextKey);
  };

  return {
    activeKey,
    setActiveKey: select,
    collapsed,
    setCollapsed,
    toggleCollapsed: () => setCollapsed((v) => !v),
  };
}

