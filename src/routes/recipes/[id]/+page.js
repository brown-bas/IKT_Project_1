import recipes from '$lib/recipes.json';
export async function load({ params }) {
	return {
		data: recipes.filter((x) => x.id.toString() == params.id)[0]
	};
}
