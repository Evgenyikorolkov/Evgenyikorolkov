имя: PR Update Reminder
on:
 workflow_dispatch:
 толкать:
 филиалы:
 - main
 - dev
     
env:
 GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

:
 pr_update:
 запуски: ubuntu-последние
    шаги:
 - использует: действия/проверка@v2
 - name: Get current branch
        id: current_branch
        run: echo ::set-output name=short_ref::${GITHUB_REF#refs/*/}
 - name: добавить комментарий, чтобы напомнить авторам
        shell: bash
        run: |
 all_open_prs=$(gh pr list --base ${{ steps.current_branch.outputs.short_ref }} --json author,number)
 prs_count=$(echo "$all_open_prs" | jq length)
 Echo "здесь $prs_count данный момент открыта"
 к (( с=0; с<$prs_count; с++ )); делать
 pr_id=$(базовое имя "$(Эхо "$all_open_prs" | jq не .["с"].число)")
 автор=$(Эхо "$all_open_prs" | jq не .["с"].автор.логин | тр -д '"')
 Эхо "автор для пиара $pr_id составляет $автор"
 гр пр комментировать $pr_id --тело "Эй @$автор 👋🏽 дружеское напоминание для обновления по связям с общественностью филиала потому что там был недавно совершал ($(ЖКТ Рэв-анализа руководитель)) к основанию филиал"
 сделано
