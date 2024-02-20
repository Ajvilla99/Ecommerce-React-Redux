
export const extractSlugFromUrl = (pathname) => {
    const slug = pathname.substring(pathname.lastIndexOf('/') + 1);
    const parts = slug.split('-');
    const id = parts[0]
    return id;
}