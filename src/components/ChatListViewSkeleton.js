export function ChatListViewSkeleton() {
  const skeletonItem = `
    <div class="flex items-center gap-4 min-h-[72px] px-4 py-2">
      <div class="h-14 w-14 rounded-full bg-gray-700 animate-pulse"></div>
      <div class="flex flex-col flex-1 gap-2">
        <div class="flex justify-between w-full">
          <div class="h-4 w-1/2 bg-gray-700 rounded animate-pulse"></div>
          <div class="h-3 w-10 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div class="flex justify-between w-full">
          <div class="h-3 w-2/3 bg-gray-700 rounded animate-pulse"></div>
          <div class="h-4 w-4 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  `;

  return {
    template: `
      <div id="chatListViewSkeleton" class="chat-list-view w-full h-full flex flex-col text-white overflow-hidden">
        <div class="chat-list-header flex justify-between items-center p-4 mb-3">
          <div class="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div class="flex gap-4">
            <div class="h-6 w-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="h-6 w-6 bg-gray-700 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div class="px-4 mb-2">
          <div class="h-10 w-full bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div class="px-4 mb-2">
          <div class="h-8 w-full bg-gray-700 rounded animate-pulse"></div>
        </div>

        <ul class="chat-list flex-1 py-2 overflow-y-hidden">
          <div class="archive-btn text-md flex gap-6 pl-4 py-2 mx-4 mb-2">
            <div class="h-6 w-6 bg-gray-700 rounded-full animate-pulse"></div>
            <div class="flex-1 h-5 bg-gray-700 rounded animate-pulse"></div>
            <div class="h-5 w-5 bg-gray-700 rounded-full animate-pulse"></div>
          </div>

          ${skeletonItem.repeat(5)}
        </ul>
      </div>
    `,
    bindEvents: () => {
      // No events to bind during loading
    }
  };
}
