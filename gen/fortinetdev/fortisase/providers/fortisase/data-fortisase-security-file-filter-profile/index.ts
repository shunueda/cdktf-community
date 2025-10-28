// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityFileFilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#block DataFortisaseSecurityFileFilterProfile#block}
  */
  readonly block?: DataFortisaseSecurityFileFilterProfileBlock[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#block_password_protected_files DataFortisaseSecurityFileFilterProfile#block_password_protected_files}
  */
  readonly blockPasswordProtectedFiles?: boolean | cdktf.IResolvable;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#direction DataFortisaseSecurityFileFilterProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#monitor DataFortisaseSecurityFileFilterProfile#monitor}
  */
  readonly monitor?: DataFortisaseSecurityFileFilterProfileMonitor[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#primary_key DataFortisaseSecurityFileFilterProfile#primary_key}
  */
  readonly primaryKey: string;
}
export interface DataFortisaseSecurityFileFilterProfileBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#datasource DataFortisaseSecurityFileFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#primary_key DataFortisaseSecurityFileFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityFileFilterProfileBlockToTerraform(struct?: DataFortisaseSecurityFileFilterProfileBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityFileFilterProfileBlockToHclTerraform(struct?: DataFortisaseSecurityFileFilterProfileBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityFileFilterProfileBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortisaseSecurityFileFilterProfileBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityFileFilterProfileBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityFileFilterProfileBlockList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityFileFilterProfileBlock[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortisaseSecurityFileFilterProfileBlockOutputReference {
    return new DataFortisaseSecurityFileFilterProfileBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityFileFilterProfileMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#datasource DataFortisaseSecurityFileFilterProfile#datasource}
  */
  readonly datasource?: string;
}

export function dataFortisaseSecurityFileFilterProfileMonitorToTerraform(struct?: DataFortisaseSecurityFileFilterProfileMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
  }
}


export function dataFortisaseSecurityFileFilterProfileMonitorToHclTerraform(struct?: DataFortisaseSecurityFileFilterProfileMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityFileFilterProfileMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortisaseSecurityFileFilterProfileMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityFileFilterProfileMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }
}

export class DataFortisaseSecurityFileFilterProfileMonitorList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityFileFilterProfileMonitor[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortisaseSecurityFileFilterProfileMonitorOutputReference {
    return new DataFortisaseSecurityFileFilterProfileMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile fortisase_security_file_filter_profile}
*/
export class DataFortisaseSecurityFileFilterProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_file_filter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityFileFilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityFileFilterProfile to import
  * @param importFromId The id of the existing DataFortisaseSecurityFileFilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityFileFilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_file_filter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_file_filter_profile fortisase_security_file_filter_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityFileFilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityFileFilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_file_filter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._block.internalValue = config.block;
    this._blockPasswordProtectedFiles = config.blockPasswordProtectedFiles;
    this._direction = config.direction;
    this._monitor.internalValue = config.monitor;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block - computed: true, optional: true, required: false
  private _block = new DataFortisaseSecurityFileFilterProfileBlockList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: DataFortisaseSecurityFileFilterProfileBlock[] | cdktf.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // block_password_protected_files - computed: true, optional: true, required: false
  private _blockPasswordProtectedFiles?: boolean | cdktf.IResolvable; 
  public get blockPasswordProtectedFiles() {
    return this.getBooleanAttribute('block_password_protected_files');
  }
  public set blockPasswordProtectedFiles(value: boolean | cdktf.IResolvable) {
    this._blockPasswordProtectedFiles = value;
  }
  public resetBlockPasswordProtectedFiles() {
    this._blockPasswordProtectedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPasswordProtectedFilesInput() {
    return this._blockPasswordProtectedFiles;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor = new DataFortisaseSecurityFileFilterProfileMonitorList(this, "monitor", false);
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: DataFortisaseSecurityFileFilterProfileMonitor[] | cdktf.IResolvable) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block: cdktf.listMapper(dataFortisaseSecurityFileFilterProfileBlockToTerraform, false)(this._block.internalValue),
      block_password_protected_files: cdktf.booleanToTerraform(this._blockPasswordProtectedFiles),
      direction: cdktf.stringToTerraform(this._direction),
      monitor: cdktf.listMapper(dataFortisaseSecurityFileFilterProfileMonitorToTerraform, false)(this._monitor.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityFileFilterProfileBlockToHclTerraform, false)(this._block.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityFileFilterProfileBlockList",
      },
      block_password_protected_files: {
        value: cdktf.booleanToHclTerraform(this._blockPasswordProtectedFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityFileFilterProfileMonitorToHclTerraform, false)(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityFileFilterProfileMonitorList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
