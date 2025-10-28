// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/component_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelComponentTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (id or alias) of the component type to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/component_type#identifier DataOpslevelComponentType#identifier}
  */
  readonly identifier: string;
}
export interface DataOpslevelComponentTypeIcon {
}

export function dataOpslevelComponentTypeIconToTerraform(struct?: DataOpslevelComponentTypeIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpslevelComponentTypeIconToHclTerraform(struct?: DataOpslevelComponentTypeIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpslevelComponentTypeIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpslevelComponentTypeIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpslevelComponentTypeIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOpslevelComponentTypeProperties {
}

export function dataOpslevelComponentTypePropertiesToTerraform(struct?: DataOpslevelComponentTypeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpslevelComponentTypePropertiesToHclTerraform(struct?: DataOpslevelComponentTypeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpslevelComponentTypePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataOpslevelComponentTypeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpslevelComponentTypeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_in_config_files - computed: true, optional: false, required: false
  public get allowedInConfigFiles() {
    return this.getBooleanAttribute('allowed_in_config_files');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_status - computed: true, optional: false, required: false
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }

  // locked_status - computed: true, optional: false, required: false
  public get lockedStatus() {
    return this.getStringAttribute('locked_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export class DataOpslevelComponentTypePropertiesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataOpslevelComponentTypePropertiesOutputReference {
    return new DataOpslevelComponentTypePropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/component_type opslevel_component_type}
*/
export class DataOpslevelComponentType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_component_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelComponentType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelComponentType to import
  * @param importFromId The id of the existing DataOpslevelComponentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/component_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelComponentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_component_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/data-sources/component_type opslevel_component_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelComponentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelComponentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_component_type',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // icon - computed: true, optional: false, required: false
  private _icon = new DataOpslevelComponentTypeIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOpslevelComponentTypePropertiesMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
