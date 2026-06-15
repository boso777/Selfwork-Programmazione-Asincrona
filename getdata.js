export async function get_data(url) { 
    const response = await fetch(url);
    return await response.json();   
}