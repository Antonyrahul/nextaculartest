import Content from '@/components/Content/index';
import Meta from '@/components/Meta/index';
import { AccountLayout } from '@/layouts/index';
import { useWorkspace } from '@/providers/workspace';

const Workspace = () => {
  const { workspace } = useWorkspace();

  console.log(workspace)

  return (
    workspace && (
      <AccountLayout>
        <Meta title={`Nextacular - ${workspace.name} | Dashboard`} />
        <Content.Title
          title={workspace.name}
          subtitle="This is your project's workspace"

        />
        <Content.Divider />
        <Content.Container


        />
        <Content>
          <p>Please select the editor that you want to use </p>

          <div class="flex mb-4">
            <button class="w-1/4 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-solid border-2 border-indigo-600 rounded" onClick={() => { window.open(`http://localhost:3006/loadwpace/${workspace.workspaceCode}`) }}>GrapesJS</button>
            <button class="w-1/4 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-solid border-2 border-indigo-600 rounded">BuilderJs</button>
            <button class="w-1/4 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-solid border-2 border-indigo-600 rounded">Beefree</button>
            <button class="w-1/4 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-solid border-2 border-indigo-600 rounded">Editorjs</button>
          </div>


        </Content>
      </AccountLayout>
    )
  );
};

export default Workspace;
