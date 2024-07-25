import { useState, useCallback } from "react";

function useQueue() {
	const [queue, setQueue] = useState([]);

	const enqueue = useCallback((item) => {
		setQueue((q) => [...q, item]);
	}, []);

	const dequeue = useCallback(() => {
		setQueue((q) => q.slice(1));
	}, []);

	return { queue, enqueue, dequeue };
}
export default useQueue;
