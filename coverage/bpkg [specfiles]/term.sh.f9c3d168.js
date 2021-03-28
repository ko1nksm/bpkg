var data = {lines:[
{"lineNum":"    1","line":"#!/bin/bash"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"## version"},
{"lineNum":"    4","line":"VERSION=\"0.0.1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    5","line":""},
{"lineNum":"    6","line":"## coords"},
{"lineNum":"    7","line":"let _x=0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    8","line":"let _y=0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    9","line":""},
{"lineNum":"   10","line":"## output error to stderr"},
{"lineNum":"   11","line":"error () {"},
{"lineNum":"   12","line":"  printf >&2 \"error: %s\\n\" \"${@}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   13","line":"}"},
{"lineNum":"   14","line":""},
{"lineNum":"   15","line":"## output usage"},
{"lineNum":"   16","line":"usage () {"},
{"lineNum":"   17","line":"  echo \"usage: term [-hV] <command> [args]\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   18","line":"}"},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"## write code to terminal"},
{"lineNum":"   21","line":"term_write () {"},
{"lineNum":"   22","line":"  local let c=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   23","line":"  ## ensure"},
{"lineNum":"   24","line":"  if [ -z \"${c}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   25","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   26","line":"  fi"},
{"lineNum":"   27","line":"  printf \"\\e[${c}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   28","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   29","line":"}"},
{"lineNum":"   30","line":""},
{"lineNum":"   31","line":"## cursor operations"},
{"lineNum":"   32","line":"term_cursor () {"},
{"lineNum":"   33","line":"  local op=\"$1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   34","line":"  if [ -z \"${op}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   35","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   36","line":"  fi"},
{"lineNum":"   37","line":"  case \"${op}\" in","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   38","line":"    hide) term write \"?25l\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   39","line":"    show) term write \"?25h\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   40","line":"    *) return 1 ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   41","line":"  esac"},
{"lineNum":"   42","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   43","line":"}"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"## move to (x, y)"},
{"lineNum":"   46","line":"term_move () {"},
{"lineNum":"   47","line":"  local let x=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   48","line":"  local let y=\"${2}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   49","line":""},
{"lineNum":"   50","line":"  ## ensure"},
{"lineNum":"   51","line":"  if [ -z \"${x}\" ] || [ -z \"${y}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   52","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   53","line":"  fi"},
{"lineNum":"   54","line":""},
{"lineNum":"   55","line":"  ## set state"},
{"lineNum":"   56","line":"  (( _x = ${x} ))"},
{"lineNum":"   57","line":"  (( _y = ${y} ))"},
{"lineNum":"   58","line":""},
{"lineNum":"   59","line":"  ## write"},
{"lineNum":"   60","line":"  printf \"\\e[%d;%d;f\" ${y} ${x}","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   61","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   62","line":"}"},
{"lineNum":"   63","line":""},
{"lineNum":"   64","line":"term_transition () {"},
{"lineNum":"   65","line":"  local let x=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   66","line":"  local let y=\"${2}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   67","line":"  if [ -z \"${x}\" ] || [ -z \"${y}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   68","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   69","line":"  fi"},
{"lineNum":"   70","line":""},
{"lineNum":"   71","line":"  (( x = ${x} + ${_x} ))"},
{"lineNum":"   72","line":"  (( y = ${y} + ${_y} ))"},
{"lineNum":"   73","line":""},
{"lineNum":"   74","line":"  term move \"${x}\" \"${y}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   75","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   76","line":"}"},
{"lineNum":"   77","line":""},
{"lineNum":"   78","line":"## set terminal color"},
{"lineNum":"   79","line":"term_color () {"},
{"lineNum":"   80","line":"  local color=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   81","line":"  local fmt=\"\\e[3%dm\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   82","line":"  if [ -z \"${color}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   83","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   84","line":"  fi"},
{"lineNum":"   85","line":"  case \"${color}\" in","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   86","line":"    black) printf \"${fmt}\" \"0\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   87","line":"    red) printf \"${fmt}\" \"1\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   88","line":"    green) printf \"${fmt}\" \"2\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   89","line":"    yellow) printf \"${fmt}\" \"3\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   90","line":"    blue) printf \"${fmt}\" \"4\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   91","line":"    magenta) printf \"${fmt}\" \"5\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   92","line":"    cyan) printf \"${fmt}\" \"6\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   93","line":"    white) printf \"${fmt}\" \"7\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   94","line":"    gray|grey) printf \"\\e[90m\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   95","line":"    *) return 1 ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   96","line":"  esac"},
{"lineNum":"   97","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   98","line":"}"},
{"lineNum":"   99","line":""},
{"lineNum":"  100","line":"## set term background color"},
{"lineNum":"  101","line":"term_background () {"},
{"lineNum":"  102","line":"  local color=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  103","line":"  local fmt=\"\\e[4%dm\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  104","line":"  if [ -z \"${color}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  105","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  106","line":"  fi"},
{"lineNum":"  107","line":"  case \"${color}\" in","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  108","line":"    black) printf \"${fmt}\" \"0\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  109","line":"    red) printf \"${fmt}\" \"1\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  110","line":"    green) printf \"${fmt}\" \"2\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  111","line":"    yellow) printf \"${fmt}\" \"3\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  112","line":"    blue) printf \"${fmt}\" \"4\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  113","line":"    magenta) printf \"${fmt}\" \"5\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  114","line":"    cyan) printf \"${fmt}\" \"6\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  115","line":"    white) printf \"${fmt}\" \"7\" ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  116","line":"    *) return 1 ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  117","line":"  esac"},
{"lineNum":"  118","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  119","line":"}"},
{"lineNum":"  120","line":""},
{"lineNum":"  121","line":"## reset terminal escape sequence"},
{"lineNum":"  122","line":"term_reset () {"},
{"lineNum":"  123","line":"  term write \"0m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  124","line":"}"},
{"lineNum":"  125","line":""},
{"lineNum":"  126","line":"## make terminal bright"},
{"lineNum":"  127","line":"term_bright () {"},
{"lineNum":"  128","line":"  term write \"1m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  129","line":"}"},
{"lineNum":"  130","line":""},
{"lineNum":"  131","line":"## make terminal dim"},
{"lineNum":"  132","line":"term_dim () {"},
{"lineNum":"  133","line":"  term write \"2m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  134","line":"}"},
{"lineNum":"  135","line":""},
{"lineNum":"  136","line":"## make terminal underlined"},
{"lineNum":"  137","line":"term_underline () {"},
{"lineNum":"  138","line":"  term write \"4m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  139","line":"}"},
{"lineNum":"  140","line":""},
{"lineNum":"  141","line":"## make terminal blink"},
{"lineNum":"  142","line":"term_blink () {"},
{"lineNum":"  143","line":"  term write \"5m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  144","line":"}"},
{"lineNum":"  145","line":""},
{"lineNum":"  146","line":"## make terminal reverse"},
{"lineNum":"  147","line":"term_reverse () {"},
{"lineNum":"  148","line":"  term write \"7m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  149","line":"}"},
{"lineNum":"  150","line":""},
{"lineNum":"  151","line":"## make terminal hidden"},
{"lineNum":"  152","line":"term_hidden () {"},
{"lineNum":"  153","line":"  term write \"8m\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  154","line":"}"},
{"lineNum":"  155","line":""},
{"lineNum":"  156","line":"## clear a terminal section by name"},
{"lineNum":"  157","line":"term_clear () {"},
{"lineNum":"  158","line":"  local section=\"${1}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  159","line":"  local fmt=\"\\e[%s\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  160","line":"  if [ -z \"${section}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  161","line":"    return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  162","line":"  fi"},
{"lineNum":"  163","line":"  case \"${section}\" in","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  164","line":"    start) printf \"${fmt}\" \"1K\";;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  165","line":"    end) printf \"${fmt}\" \"K\";;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  166","line":"    line) printf \"${fmt}\" \"2K\";;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  167","line":"    screen|up) printf \"${fmt}\" \"1J\";;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  168","line":"    down) printf \"${fmt}\" \"J\";;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  169","line":"    *) return 1 ;;","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  170","line":"  esac"},
{"lineNum":"  171","line":"  return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  172","line":"}"},
{"lineNum":"  173","line":""},
{"lineNum":"  174","line":"##"},
{"lineNum":"  175","line":"# Term functions"},
{"lineNum":"  176","line":"#"},
{"lineNum":"  177","line":"# usage: term [-hV] <command>"},
{"lineNum":"  178","line":"##"},
{"lineNum":"  179","line":""},
{"lineNum":"  180","line":"term () {"},
{"lineNum":"  181","line":"  local arg=\"$1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  182","line":"  local cmd=\"\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  183","line":"  shift","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  184","line":""},
{"lineNum":"  185","line":"  case \"${arg}\" in","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  186","line":""},
{"lineNum":"  187","line":"    ## flags"},
{"lineNum":"  188","line":"    -V|--version)"},
{"lineNum":"  189","line":"      echo \"${VERSION}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  190","line":"      return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  191","line":"      ;;"},
{"lineNum":"  192","line":""},
{"lineNum":"  193","line":"    -h|--help)"},
{"lineNum":"  194","line":"      usage","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  195","line":""},
{"lineNum":"  196","line":"      ## commands"},
{"lineNum":"  197","line":"      {"},
{"lineNum":"  198","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  199","line":"        echo \"commands: \"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  200","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  201","line":"        echo \"  write <code>           Write a terminal escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  202","line":"        echo \"  cursor <op>            Perform operation to cursor\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  203","line":"        echo \"  color <color>          Set terminal color by name (See colors)\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  204","line":"        echo \"  background <color>     Set terminal background by name (See colors)\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  205","line":"        echo \"  move <x> <y>           Move to (x, y)\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  206","line":"        echo \"  transition <x> <y>     Transition to (x, y)\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  207","line":"        echo \"  clear <section>        Clear terminal section by name (See sections)\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  208","line":"        echo \"  reset                  Reset the terminal escape code sequence\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  209","line":"        echo \"  bright                 Write bright escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  210","line":"        echo \"  dim                    Write dim escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  211","line":"        echo \"  underline              Write underline escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  212","line":"        echo \"  blink                  Write blink escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  213","line":"        echo \"  reverse                Write reverse escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  214","line":"        echo \"  hidden                 Write hidden escape code\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  215","line":"      }"},
{"lineNum":"  216","line":""},
{"lineNum":"  217","line":"      ## colors"},
{"lineNum":"  218","line":"      {"},
{"lineNum":"  219","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  220","line":"        echo \"colors:\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  221","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  222","line":""},
{"lineNum":"  223","line":"        term color black","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  224","line":"        echo \"  black                  $ term color black\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  225","line":""},
{"lineNum":"  226","line":"        term color red","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  227","line":"        echo \"  red                    $ term color red\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  228","line":""},
{"lineNum":"  229","line":"        term color green","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  230","line":"        echo \"  green                  $ term color green\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  231","line":""},
{"lineNum":"  232","line":"        term color yellow","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  233","line":"        echo \"  yellow                 $ term color yellow\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  234","line":""},
{"lineNum":"  235","line":"        term color blue","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  236","line":"        echo \"  blue                   $ term color blue\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  237","line":""},
{"lineNum":"  238","line":"        term color magenta","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  239","line":"        echo \"  magenta                $ term color magenta\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  240","line":""},
{"lineNum":"  241","line":"        term color cyan","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  242","line":"        echo \"  cyan                   $ term color cyan\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  243","line":""},
{"lineNum":"  244","line":"        term color white","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  245","line":"        echo \"  white                  $ term color white\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  246","line":""},
{"lineNum":"  247","line":"        term color gray","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  248","line":"        echo \"  gray|grey              $ term color gray\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  249","line":""},
{"lineNum":"  250","line":"        term reset","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  251","line":"      }"},
{"lineNum":"  252","line":""},
{"lineNum":"  253","line":"      ## sections"},
{"lineNum":"  254","line":"      {"},
{"lineNum":"  255","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  256","line":"        echo \"sections:\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  257","line":"        echo","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  258","line":"        echo \"  start                  Start of line\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  259","line":"        echo \"  end                    End of line\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  260","line":"        echo \"  up                     Upper section\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  261","line":"        echo \"  down                   Lower section\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  262","line":"        echo \"  line                   Current line\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  263","line":"        echo \"  screen                 Entire screen\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  264","line":"      }"},
{"lineNum":"  265","line":""},
{"lineNum":"  266","line":"      return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  267","line":"      ;;"},
{"lineNum":"  268","line":""},
{"lineNum":"  269","line":"    *)"},
{"lineNum":"  270","line":"      cmd=\"term_${arg}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  271","line":"      if type \"${cmd}\" > /dev/null 2>&1; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  272","line":"        \"${cmd}\" \"${@}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  273","line":"        return $?","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  274","line":"      else"},
{"lineNum":"  275","line":"        if [ ! -z \"${arg}\" ]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  276","line":"          error \"Unknown argument: \\`${arg}\'\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  277","line":"        fi"},
{"lineNum":"  278","line":"        usage","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  279","line":"        return 1","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  280","line":"      fi"},
{"lineNum":"  281","line":"      ;;"},
{"lineNum":"  282","line":"  esac"},
{"lineNum":"  283","line":"}"},
{"lineNum":"  284","line":""},
{"lineNum":"  285","line":""},
{"lineNum":"  286","line":"## detect if being sourced and"},
{"lineNum":"  287","line":"## export if so else execute"},
{"lineNum":"  288","line":"## main function with args"},
{"lineNum":"  289","line":"if [[ ${BASH_SOURCE[0]} != $0 ]]; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  290","line":"  export -f term","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  291","line":"else"},
{"lineNum":"  292","line":"  term \"${@}\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"  293","line":"fi"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "shellspec lib/json/spec spec", "date" : "2021-03-28 23:31:54", "instrumented" : 147, "covered" : 0,};
var merged_data = [];