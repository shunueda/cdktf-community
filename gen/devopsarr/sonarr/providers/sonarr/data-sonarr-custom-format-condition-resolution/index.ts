// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrCustomFormatConditionResolutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specification name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution#name DataSonarrCustomFormatConditionResolution#name}
  */
  readonly name: string;
  /**
  * Negate flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution#negate DataSonarrCustomFormatConditionResolution#negate}
  */
  readonly negate: boolean | cdktf.IResolvable;
  /**
  * Computed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution#required DataSonarrCustomFormatConditionResolution#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Resolution ID. `0` Unknown, `1` R360p, `2` R480p, `3` R540p, `4` R576p, `5` R720p, `6` R1080p, `7` R2160p.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution#value DataSonarrCustomFormatConditionResolution#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution sonarr_custom_format_condition_resolution}
*/
export class DataSonarrCustomFormatConditionResolution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_custom_format_condition_resolution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrCustomFormatConditionResolution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrCustomFormatConditionResolution to import
  * @param importFromId The id of the existing DataSonarrCustomFormatConditionResolution that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrCustomFormatConditionResolution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_custom_format_condition_resolution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/custom_format_condition_resolution sonarr_custom_format_condition_resolution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrCustomFormatConditionResolutionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrCustomFormatConditionResolutionConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_custom_format_condition_resolution',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._negate = config.negate;
    this._required = config.required;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: true, optional: false, required: false
  public get implementation() {
    return this.getStringAttribute('implementation');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // negate - computed: false, optional: false, required: true
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      negate: cdktf.booleanToTerraform(this._negate),
      required: cdktf.booleanToTerraform(this._required),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negate: {
        value: cdktf.booleanToHclTerraform(this._negate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
