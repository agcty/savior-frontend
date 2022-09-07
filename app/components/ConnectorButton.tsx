import { ClientOnly } from "remix-utils";
import { useConnect } from "wagmi";

export function ConnectorButton() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <ClientOnly>
      {() => (
        <div>
          {connectors.map((connector) => (
            <button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </button>
          ))}

          {error && <div>{error.message}</div>}
        </div>
      )}
    </ClientOnly>
  );
}
