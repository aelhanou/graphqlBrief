

export const endpointUrl = 'http://localhost:4000/graphql'


export const fetcher =
    <TData, TVariables>(query: string, variables?: TVariables, options?: HeadersInit): (() => Promise<TData>) =>
        async () => {

            const requestHeaders: HeadersInit = new Headers();
            requestHeaders.set('Content-Type', 'application/json');
            requestHeaders.set('Accept', 'application/json');

            if (localStorage.getItem("token")) {
                let token = "Bearer" + localStorage.getItem("token")
                requestHeaders.set("Authorization", token)
            }

            const requestOptions: RequestInit = {
                method: 'POST',

                headers: requestHeaders,
                body: JSON.stringify({
                    query,
                    variables,
                    options
                })
            };

            const response = await fetch(endpointUrl, requestOptions);

            const json = await response.json();

            if (json.errors) {
                const { message } = json.errors[0];

                throw new Error(message);
            }

            return json.data;
        }
