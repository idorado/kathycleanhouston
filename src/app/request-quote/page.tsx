"use server"

export default async function RequestQuote() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2 sm:px-4">
      <div className="w-full rounded shadow-lg overflow-hidden bg-white border mx-auto my-8">
        <div className="relative w-full" style={{ paddingBottom: '70%', height: 0 }}>
          <iframe
            src="https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/new?source=new_webpage"
            title="Request a Service"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              border: "none",
              background: "transparent",
              display: "block",
            }}
            allow="clipboard-write"
          />
        </div>
      </div>
    </main>
  );
}
