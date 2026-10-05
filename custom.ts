/**
 * Minecraft Command Learning Blocks V1
 *
 * Learning goal:
 * - Keep Minecraft MakeCode vanilla blocks as-is.
 * - Students assemble command strings 100% by connecting small value blocks.
 * - This file contains ALL custom block definitions.
 * - No hidden spaces are appended to token blocks.
 * - Use the separate "space" block whenever a command needs a space.
 */

//% block="Command Parts" weight=100 color=#4C97FF icon="\uf1b2"
namespace commandParts {
    // -------------------------------------------------------------------------
    // Commands
    // -------------------------------------------------------------------------

    //% blockId=command_parts_effect block="effect" weight=100
    export function effect(): string {
        return "effect"
    }

    //% blockId=command_parts_summon block="summon" weight=99
    export function summon(): string {
        return "summon"
    }

    // -------------------------------------------------------------------------
    // Spacing
    // -------------------------------------------------------------------------

    //% blockId=command_parts_space block="space" weight=95
    export function space(): string {
        return " "
    }

    // -------------------------------------------------------------------------
    // Selectors
    // -------------------------------------------------------------------------

    //% blockId=command_parts_selector_self block="@s" weight=90
    export function selectorSelf(): string {
        return "@s"
    }

    //% blockId=command_parts_selector_entities block="@e" weight=89
    export function selectorEntities(): string {
        return "@e"
    }

    // -------------------------------------------------------------------------
    // Selector syntax
    // -------------------------------------------------------------------------

    //% blockId=command_parts_open_bracket block="[" weight=85
    export function openBracket(): string {
        return "["
    }

    //% blockId=command_parts_close_bracket block="]" weight=84
    export function closeBracket(): string {
        return "]"
    }

    //% blockId=command_parts_equals block="=" weight=83
    export function equals(): string {
        return "="
    }

    //% blockId=command_parts_comma block="," weight=82
    export function comma(): string {
        return ","
    }

    //% blockId=command_parts_type block="type" weight=81
    export function typeKeyword(): string {
        return "type"
    }

    //% blockId=command_parts_count block="c" weight=80
    export function countKeyword(): string {
        return "c"
    }

    //% blockId=command_parts_name block="name" weight=79
    export function nameKeyword(): string {
        return "name"
    }

    // -------------------------------------------------------------------------
    // Entities
    // Reusable in summon and selector type=...
    // -------------------------------------------------------------------------

    //% blockId=command_parts_zombie block="zombie" weight=75
    export function zombie(): string {
        return "zombie"
    }

    //% blockId=command_parts_chicken block="chicken" weight=74
    export function chicken(): string {
        return "chicken"
    }

    //% blockId=command_parts_pig block="pig" weight=73
    export function pig(): string {
        return "pig"
    }

    //% blockId=command_parts_cow block="cow" weight=72
    export function cow(): string {
        return "cow"
    }

    //% blockId=command_parts_sheep block="sheep" weight=71
    export function sheep(): string {
        return "sheep"
    }

    //% blockId=command_parts_villager block="villager" weight=70
    export function villager(): string {
        return "villager"
    }

    // -------------------------------------------------------------------------
    // Effects
    // -------------------------------------------------------------------------

    //% blockId=command_parts_speed block="speed" weight=65
    export function speed(): string {
        return "speed"
    }

    //% blockId=command_parts_slowness block="slowness" weight=64
    export function slowness(): string {
        return "slowness"
    }

    //% blockId=command_parts_invisibility block="invisibility" weight=63
    export function invisibility(): string {
        return "invisibility"
    }

    //% blockId=command_parts_night_vision block="night_vision" weight=62
    export function nightVision(): string {
        return "night_vision"
    }

    // -------------------------------------------------------------------------
    // Values
    // Reusable for selector c=..., effect duration/amplifier, etc.
    // -------------------------------------------------------------------------

    //% blockId=command_parts_zero block="0" weight=58
    export function zero(): string {
        return "0"
    }

    //% blockId=command_parts_one block="1" weight=57
    export function one(): string {
        return "1"
    }

    //% blockId=command_parts_five block="5" weight=56
    export function five(): string {
        return "5"
    }

    //% blockId=command_parts_ten block="10" weight=55
    export function ten(): string {
        return "10"
    }

    //% blockId=command_parts_thirty block="30" weight=54
    export function thirty(): string {
        return "30"
    }

    //% blockId=command_parts_true block="true" weight=53
    export function trueValue(): string {
        return "true"
    }

    //% blockId=command_parts_false block="false" weight=52
    export function falseValue(): string {
        return "false"
    }

    // -------------------------------------------------------------------------
    // Relative coordinates
    // -------------------------------------------------------------------------

    //% blockId=command_parts_relative block="~" weight=48
    export function relative(): string {
        return "~"
    }

    //% blockId=command_parts_relative_one block="~1" weight=47
    export function relativeOne(): string {
        return "~1"
    }

    //% blockId=command_parts_relative_two block="~2" weight=46
    export function relativeTwo(): string {
        return "~2"
    }

    // -------------------------------------------------------------------------
    // Spawn events
    // -------------------------------------------------------------------------

    //% blockId=command_parts_entity_born block="minecraft:entity_born" weight=40
    export function entityBorn(): string {
        return "minecraft:entity_born"
    }

    //% blockId=command_parts_as_baby block="minecraft:as_baby" weight=39
    export function asBaby(): string {
        return "minecraft:as_baby"
    }

    //% blockId=command_parts_become_farmer block="minecraft:become_farmer" weight=38
    export function becomeFarmer(): string {
        return "minecraft:become_farmer"
    }

    //% blockId=command_parts_become_librarian block="minecraft:become_librarian" weight=37
    export function becomeLibrarian(): string {
        return "minecraft:become_librarian"
    }

    //% blockId=command_parts_become_armorer block="minecraft:become_armorer" weight=36
    export function becomeArmorer(): string {
        return "minecraft:become_armorer"
    }

    //% blockId=command_parts_become_fisherman block="minecraft:become_fisherman" weight=35
    export function becomeFisherman(): string {
        return "minecraft:become_fisherman"
    }
}
