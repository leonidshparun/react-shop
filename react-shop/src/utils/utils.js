export const chunk = (array, size) => {
	const chunked_arr = [];
	let index = 0;
	while (index < array.length) {
		chunked_arr.push(array.slice(index, size + index));
		index += size;
	}
	return chunked_arr;
};

export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	};
};