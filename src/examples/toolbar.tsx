import React from 'react'
import {
  AdmonitionDirectiveDescriptor,
  MDXEditor,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  Separator,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertImage,
  ListsToggle,
  KitchenSinkToolbar,
  StrikeThroughSupSubToggles,
  CodeToggle
} from '..'
import { ALL_PLUGINS, YoutubeDirectiveDescriptor, virtuosoSampleSandpackConfig } from './_boilerplate'
import kitchenSinkMarkdown from './assets/kitchen-sink.md?raw'
import './dark-editor.css'
import { basicDark } from 'cm6-theme-basic-dark'
import type { Story } from '@ladle/react'
export const Basics = () => {
  return <MDXEditor markdown={kitchenSinkMarkdown} plugins={ALL_PLUGINS} />
}

export const ReadOnly: Story<{ readOnly: boolean }> = ({ readOnly }) => {
  return <MDXEditor markdown={kitchenSinkMarkdown} readOnly={readOnly} plugins={ALL_PLUGINS} />
}

ReadOnly.args = { readOnly: true }
ReadOnly.argTypes = {
  readOnly: {
    name: 'Read only',
    defaultValue: true,
    control: { type: 'boolean' }
  }
}

export const CustomTheming = () => {
  return (
    <MDXEditor
      className="dark-theme dark-editor"
      markdown={kitchenSinkMarkdown}
      plugins={[
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({ imageAutocompleteSuggestions: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'] }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' },
          codeMirrorExtensions: [basicDark]
        }),
        directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo', codeMirrorExtensions: [basicDark] }),
        markdownShortcutPlugin()
      ]}
    />
  )
}

export const ConditionalToolbar = () => {
  const [outsideState, setOutsideState] = React.useState('foo')
  return (
    <>
      <button
        onClick={() => {
          setOutsideState('bar')
        }}
      >
        Toggle outside state
      </button>
      {outsideState}
      <MDXEditor
        markdown={'hello world'}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                  {outsideState}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <ListsToggle />
                  <Separator />
                  <BlockTypeSelect />
                  <CreateLink />
                  <InsertImage />
                  <Separator />
                </DiffSourceToggleWrapper>
              </>
            )
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          // codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
          // sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
          // codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text' } }),
          directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
          markdownShortcutPlugin()
        ]}
      />
    </>
  )
}

export const SimpleToolbar = () => {
  return (
    <section> 

    <MDXEditor
    markdown={"dkoqwdpoqw"}
    plugins={[
      toolbarPlugin({ 
        toolbarContents: () => (
          <div style={{
            backgroundColor: '#0F172A',
            borderColor: '#334155',  
            color: 'white',
            flexDirection: 'row',
            display: 'flex',
            borderRadius: '12px',
            width: 'fit-content',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '1px',
            borderStyle: 'solid',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}>
            <UndoRedo />
            <BoldItalicUnderlineToggles />
            <StrikeThroughSupSubToggles />
            <ListsToggle />
            <CodeToggle />
            <CreateLink />
            <InsertImage />            
            
          </div>
        )
      }),
      listsPlugin(),
      quotePlugin(),
      headingsPlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      imagePlugin(),
      tablePlugin(),
      thematicBreakPlugin(),
      frontmatterPlugin(),
      codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
      codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text' } }),
      diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
      markdownShortcutPlugin()
    ]}
    ref={null}
   
  />
  </section>
  )
}
  